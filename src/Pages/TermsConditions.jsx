import React from "react";

const TermsConditions = () => {
  return (
    <div className="bg-gray-50 text-gray-800">
      <div className="max-w-4xl mx-auto p-6 shadow-2xl mt-10 mb-10 rounded-2xl">
        <h1 className="text-3xl font-bold mb-6 text-center text-blue-700">
          Terms & Conditions
        </h1>

        <p className="mb-6 text-lg">
          Welcome to <strong> Roommate.Finder</strong>, a roommate finder
          platform designed to help users connect with compatible roommates or
          find available housing. By using our website or services, you agree to
          be bound by the following Terms and Conditions. Please read them
          carefully.
        </p>

        <div className="space-y-5">
          <div>
            <h2 className="text-xl font-semibold"> 1. User Eligibility</h2>
            <p>
              Users must be at least 18 years old to use the platform. They must
              provide accurate and truthful information when creating an
              account.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold">
              {" "}
              2. Account Responsibility
            </h2>
            <p>
              Users are responsible for maintaining the confidentiality of their
              login credentials and for all activities that occur under their
              account.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold"> 3. Content Guidelines</h2>
            <p>
              Users must not post false, offensive, discriminatory, or illegal
              content. Listings and profiles must reflect real and lawful
              intentions.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold"> 4. Room Listings</h2>
            <p>
              All room or roommate listings must be genuine. Users cannot post
              listings for properties they do not own or manage unless
              authorized.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold"> 5. User Conduct</h2>
            <p>
              Users must treat each other respectfully. Harassment, abuse, or
              attempts to scam or defraud other users will lead to account
              termination.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold"> 6. Privacy Policy</h2>
            <p>
              Personal information shared on the platform will be handled
              according to the site’s Privacy Policy. Users are advised not to
              share sensitive information publicly.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold"> 7. Prohibited Uses</h2>
            <p>
              The site must not be used for unlawful activities, including
              fraud, solicitation, or sharing malware.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold">
              {" "}
              8. Termination of Service
            </h2>
            <p>
              The website reserves the right to suspend or delete accounts that
              violate its terms or misuse the platform.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold"> 9. Changes to Terms</h2>
            <p>
              The website may update these terms at any time. Continued use of
              the service indicates acceptance of any changes.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold"> 10. Liability Disclaimer</h2>
            <p>
              The website acts only as a platform for connecting users. It is
              not responsible for the actions of users or the outcome of
              roommate arrangements.
            </p>
          </div>
        </div>

        <footer className="mt-10 text-center text-sm text-gray-500">
          &copy; 2025 [ Roommate.Finder]. All rights reserved.
        </footer>
      </div>
    </div>
  );
};

export default TermsConditions;
