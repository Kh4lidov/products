import { useEffect } from "react";
import Checkbox from "@/Components/UI/Checkbox.jsx";
import GuestLayout from "@/Layouts/GuestLayout";
import InputError from "@/Components/UI/InputError.jsx";
import InputLabel from "@/Components/UI/InputLabel.jsx";
import TextInput from "@/Components/UI/TextInput.jsx";
import { Head, Link, useForm, router } from "@inertiajs/react";
import CustomPrimaryButton from "@/Components/UI/CustomPrimaryButton.jsx";
import CustomSecondButton from "@/Components/UI/CustomSecondButton.jsx";

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        remember: false,
    });

    useEffect(() => {
        return () => {
            reset("password");
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route("login"));
    };

    return (
        <GuestLayout maxWidth="sm">
            <Head title="Авторизация" />

            {status && (
                <div className="mb-4 font-medium text-sm text-green-600">
                    {status}
                </div>
            )}

            <form onSubmit={submit}>
                <div>
                    <InputLabel htmlFor="email" value="Email" />

                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full"
                        autoComplete="username"
                        isFocused={true}
                        onChange={(e) => setData("email", e.target.value)}
                    />

                    <InputError message={errors.email} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="password" value="Пароль" />

                    <TextInput
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1 block w-full"
                        autoComplete="current-password"
                        onChange={(e) => setData("password", e.target.value)}
                    />

                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div className="flex justify-between mt-4">
                    <label className="flex items-center">
                        <Checkbox
                            name="remember"
                            checked={data.remember}
                            onChange={(e) =>
                                setData("remember", e.target.checked)
                            }
                        />
                        <span className="ms-2 text-sm text-gray-600">
                            Запомнить меня
                        </span>
                    </label>

                    {canResetPassword && (
                        <Link
                            href={route("password.request")}
                            className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Забыли пароль?
                        </Link>
                    )}
                </div>

                <div className="mt-2">
                    <CustomPrimaryButton
                        className="w-full uppercase"
                        disabled={processing}
                    >
                        Авторизоваться
                    </CustomPrimaryButton>
                </div>
                <div className="mt-2">
                    <CustomSecondButton
                        className="w-full uppercase"
                        disabled={processing}
                        onClick={(e) => {
                            e.preventDefault();
                            router.get(route("register"));
                        }}
                    >
                        Зарегистрироваться
                    </CustomSecondButton>
                </div>
            </form>
        </GuestLayout>
    );
}
