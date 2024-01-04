import { EMAIL } from "../constants"

export default function DeleteAccount() {
  return (
    <div className="min-h-screen bg-[#000000] flex flex-col justify-center">
      <div className="max-w-md w-full mx-auto">
        <div className="bg-white p-8 border border-gray-300 rounded-lg">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Delete Your Account</h1>
          <p className="text-gray-600">
            {"If you wish to delete your account, please email us at "}
            <a href={`mailto:${EMAIL}`} className="text-blue-500 underline">
              {EMAIL}
            </a>
            {" with your request."}
          </p>
        </div>
      </div>
    </div>
  )
}
