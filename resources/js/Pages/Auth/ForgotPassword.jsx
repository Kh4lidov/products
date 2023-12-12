import GuestLayout from "@/Layouts/GuestLayout";
import InputError from "@/Components/UI/InputError.jsx";
import TextInput from "@/Components/UI/TextInput.jsx";
import { Head, useForm } from "@inertiajs/react";
import CustomPrimaryButton from "@/Components/UI/CustomPrimaryButton.jsx";

export default function ForgotPassword({ status }) {
    const { data, setData, post, processing, errors } = useForm({
        email: "",
    });

    const submit = (e) => {
        e.preventDefault();

        post(route("password.email"));
    };

    return (
        <GuestLayout>
            <Head title="Forgot Password" />

            <div className="mb-4 text-sm text-gray-600">
                Забыли пароль? Просто укажите ваш адрес электронной почты, и мы
                отправим вам ссылку для сброса пароля.
            </div>

            {status && (
                <div className="mb-4 font-medium text-sm text-green-600">
                    {status}
                </div>
            )}

            <form onSubmit={submit}>
                <TextInput
                    id="email"
                    type="email"
                    name="email"
                    value={data.email}
                    className="mt-1 block w-full"
                    isFocused={true}
                    onChange={(e) => setData("email", e.target.value)}
                />

                <InputError message={errors.email} className="mt-2" />

                <div className="flex items-center justify-end mt-4">
                    <CustomPrimaryButton
                        className="w-48 uppercase"
                        disabled={processing}
                    >
                        Отправить ссылку
                    </CustomPrimaryButton>
                </div>
            </form>
        </GuestLayout>
    );
}
