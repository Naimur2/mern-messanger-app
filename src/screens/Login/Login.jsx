import {
    Button,
    Checkbox,
    FormControl,
    HStack,
    Input,
    Stack,
    Text,
    VStack,
} from "native-base";
import SafeAreaView from "react-native-safe-area-view";
import KeyboardView from "./components/KeyboardView";
import React from "react";
import { Formik } from "formik";
import * as yup from "yup";

export default function Login() {
    const [showPassword, setShowPassword] = React.useState(false);

    const schema = yup.object().shape({
        email: yup.string().email().required("Email is required"),
        password: yup.string().required("Password is required"),
    });

    return (
        <SafeAreaView>
            <KeyboardView>
                <VStack px="4" space="4">
                    <Formik
                        initialValues={{ email: "", password: "" }}
                        onSubmit={(values) => console.log(values)}
                        validationSchema={schema}
                    >
                        {({
                            handleChange,
                            handleBlur,
                            handleSubmit,
                            values,
                            errors,
                            touched,
                        }) => (
                            <VStack
                                space="2"
                                flex="1"
                                justifyContent="center"
                                mt={"40%"}
                            >
                                <FormControl isRequired>
                                    <Stack>
                                        <FormControl.Label>
                                            Email
                                        </FormControl.Label>
                                        <Input
                                            type="text"
                                            placeholder="Email"
                                            value={values.email}
                                            onChangeText={handleChange("email")}
                                            onBlur={handleBlur("email")}
                                        />
                                        <FormControl.HelperText>
                                            {touched.email && errors.email
                                                ? errors.email
                                                : null}
                                        </FormControl.HelperText>
                                    </Stack>
                                </FormControl>
                                <FormControl isRequired>
                                    <Stack>
                                        <FormControl.Label>
                                            Password
                                        </FormControl.Label>
                                        <Input
                                            type={
                                                showPassword
                                                    ? "text"
                                                    : "password"
                                            }
                                            defaultValue="12345"
                                            placeholder="password"
                                            value={values.password}
                                            onChangeText={handleChange(
                                                "password"
                                            )}
                                            onBlur={handleBlur("password")}
                                        />
                                        <FormControl.HelperText>
                                            {touched.password && errors.password
                                                ? errors.password
                                                : null}
                                        </FormControl.HelperText>
                                    </Stack>
                                </FormControl>
                                <HStack
                                    justifyContent={"space-between"}
                                    alignItems="center"
                                >
                                    <Checkbox
                                        _text={{ fontSize: 14 }}
                                        checked={showPassword}
                                        onPress={() =>
                                            setShowPassword((prev) => !prev)
                                        }
                                    >
                                        Show password
                                    </Checkbox>

                                    <Text
                                        fontWeight={"bold"}
                                        color={"blue.900"}
                                    >
                                        Forget Password?
                                    </Text>
                                </HStack>
                                <Button
                                    _text={{ fontWeight: "bold" }}
                                    mt={4}
                                    onPress={handleSubmit}
                                >
                                    Login
                                </Button>
                            </VStack>
                        )}
                    </Formik>
                    <HStack mx="auto" space="1">
                        <Text>Don't have an account?</Text>
                        <Text fontWeight={"bold"} color={"blue.900"}>
                            Register
                        </Text>
                    </HStack>
                </VStack>
            </KeyboardView>
        </SafeAreaView>
    );
}
