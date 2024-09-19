
import PrimaryButton from '@/Components/PrimaryButton';
import { Head, Link, useForm } from '@inertiajs/react';
import Layout from "@/Layouts/Layout.jsx";

export default function VerifyEmail({ status }) {
    const { post, processing } = useForm({});

    const submit = (e) => {
        e.preventDefault();

        post(route('verification.send'));
    };

    return (
        <Layout>
            <Head title="Email Verification"/>

            <div className="mb-4 text-sm text-gray-600">
                Thanks for signing up! Before getting started, could you verify your email address by clicking on the
                link we just emailed to you? If you didn't receive the email, we will gladly send you another.
            </div>

            {status === 'verification-link-sent' && (
                <div className="mb-4 font-medium text-sm text-green-600">
                    A new verification link has been sent to the email address you provided during registration.
                </div>
            )}
            <div className="w-full flex justify-center items-center">
                <div className="mt-40 w-fit md:w-[30%] p-1 bg-gradient-to-r from-pink-600 to-purple-700 rounded-lg">
                    <div className="bg-gray-50 p-6 rounded-lg">
                        <form onSubmit={submit}>
                            <div className="mt-4 flex items-center justify-between">
                                <PrimaryButton disabled={processing}>Resend Verification Email</PrimaryButton>

                                <Link
                                    href={route('logout')}
                                    method="post"
                                    as="button"
                                    className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                    Log Out
                                </Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </Layout>
);
}
