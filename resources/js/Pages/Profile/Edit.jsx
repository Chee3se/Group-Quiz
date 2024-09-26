
import DeleteUserForm from './Partials/DeleteUserForm';
import UpdatePasswordForm from './Partials/UpdatePasswordForm';
import UpdateProfileInformationForm from './Partials/UpdateProfileInformationForm';
import { Head } from '@inertiajs/react';
import Layout from "@/Layouts/Layout.jsx";

export default function Edit({ auth, mustVerifyEmail, status }) {
    return (
        <Layout auth={auth}>
            <Head title="Profile" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 space-y-6">
                    <div className="p-6 sm:p-8 bg-white shadow-lg rounded-lg">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Update Profile Information</h2>
                        <UpdateProfileInformationForm
                            mustVerifyEmail={mustVerifyEmail}
                            status={status}
                            className="max-w-xl"
                        />
                    </div>

                    <div className="p-6 sm:p-8 bg-white shadow-lg rounded-lg">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Update Password</h2>
                        <UpdatePasswordForm className="max-w-xl" />
                    </div>

                    <div className="p-6 sm:p-8 bg-white shadow-lg rounded-lg">
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Delete Account</h2>
                        <DeleteUserForm className="max-w-xl" />
                    </div>
                </div>
            </div>
        </Layout>
    );
}
