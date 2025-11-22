import { Link } from 'react-router-dom';

export function TermsOfServiceSection() {
  const sections = [
    {
      title: "1. Acceptance of Terms",
      content: "By accessing and using BrajBuzz Tech's website, content, and services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please discontinue use of our services immediately. These terms apply to all visitors, users, and others who access or use our platform."
    },
    {
      title: "2. About Our Services",
      content: "BrajBuzz Tech provides honest, unbiased technology reviews, comparisons, and educational content. We test products in real-world conditions and provide factual information to help consumers make informed purchasing decisions. Our content includes written reviews, video content, product comparisons, and technology news analysis."
    },
    {
      title: "3. User Responsibilities",
      content: "You must be at least 13 years old to use our services, or have parental consent if under 18. You are responsible for maintaining the confidentiality of any account information. You agree to use our content for personal, non-commercial purposes unless otherwise authorized. You must not misrepresent or falsely attribute our content to other sources."
    },
    {
      title: "4. Prohibited Activities",
      content: "Users are prohibited from: copying, reproducing, or redistributing our original content without permission; using our content for commercial purposes without authorization; engaging in scraping, data mining, or automated collection of our content; posting harmful, abusive, or offensive comments; attempting to interfere with the website's operation or security; impersonating BrajBuzz Tech or our team members."
    },
    {
      title: "5. Intellectual Property Rights",
      content: "All content on BrajBuzz Tech, including text, images, videos, graphics, logos, and design elements, is owned by BrajBuzz Tech and protected by Indian and international copyright laws. You may share our content with proper attribution and links back to the original source. Commercial use requires written permission. Our brand name, logo, and trademarks may not be used without explicit authorization."
    },
    {
      title: "6. Content Accuracy and Disclaimer",
      content: "We strive to provide accurate, up-to-date information based on our testing and research. However, technology evolves rapidly, and product specifications may change. We make no warranties about the completeness, reliability, or accuracy of our content. Product prices, availability, and features mentioned are subject to change by manufacturers. We are not responsible for decisions made based solely on our content."
    },
    {
      title: "7. Affiliate Disclosures",
      content: "BrajBuzz Tech may include affiliate links in our content. When you purchase products through these links, we may earn a commission at no additional cost to you. These affiliate relationships do not influence our reviews or opinions. We maintain editorial independence and only recommend products we genuinely believe offer value. All affiliate relationships are disclosed in accordance with applicable regulations."
    },
    {
      title: "8. User Comments and Contributions",
      content: "Users may submit comments, questions, and feedback on our platform. By submitting content, you grant BrajBuzz Tech a non-exclusive, royalty-free license to use, display, and distribute your contributions. We reserve the right to moderate, edit, or remove user-generated content that violates our policies. You are responsible for the content you post and must not infringe on others' rights."
    },
    {
      title: "9. Privacy and Data Protection",
      content: "We respect your privacy and handle your data in accordance with our Privacy Policy. By using our services, you consent to the collection and use of your information as outlined in our Privacy Policy. We implement reasonable security measures to protect user data. For detailed information about data handling, please refer to our Privacy Policy."
    },
    {
      title: "10. Third-Party Links and Services",
      content: "Our website may contain links to third-party websites, including manufacturer sites, retailers, and other resources. We are not responsible for the content, privacy practices, or terms of these external sites. We do not endorse or guarantee the accuracy of information on third-party platforms. Access to linked sites is at your own risk."
    },
    {
      title: "11. Limitation of Liability",
      content: "To the fullest extent permitted by law, BrajBuzz Tech and its team members are not liable for any direct, indirect, incidental, consequential, or punitive damages arising from: use or inability to use our services; purchasing decisions based on our content; errors, omissions, or inaccuracies in our content; unauthorized access to your data; or any other matter relating to our services. Our liability is limited to the maximum extent permitted under Indian law."
    },
    {
      title: "12. Indemnification",
      content: "You agree to indemnify and hold BrajBuzz Tech, its team members, partners, and affiliates harmless from any claims, damages, liabilities, costs, or expenses (including legal fees) arising from: your use of our services; your violation of these terms; your violation of any third-party rights; or content you submit to our platform."
    },
    {
      title: "13. Product Testing and Reviews",
      content: "Our reviews are based on hands-on testing and real-world usage. Test units may be purchased, provided by manufacturers, or loaned for review purposes. Regardless of how we obtain products, our opinions remain independent and unbiased. We disclose when products are provided by manufacturers. Review units are often returned to manufacturers after testing."
    },
    {
      title: "14. Changes to Services",
      content: "We reserve the right to modify, suspend, or discontinue any aspect of our services at any time without notice. We may update our content, change our website design, or alter features as needed. We are not liable for any modifications, suspensions, or discontinuations of services."
    },
    {
      title: "15. Governing Law and Jurisdiction",
      content: "These Terms of Service are governed by the laws of India. Any disputes arising from these terms or use of our services will be resolved exclusively in the courts of Mathura, Uttar Pradesh, India. You consent to the personal jurisdiction of these courts."
    },
    {
      title: "16. Modifications to Terms",
      content: "We reserve the right to modify these Terms of Service at any time. Changes will be effective immediately upon posting to our website. Continued use of our services after modifications constitutes acceptance of the updated terms. We encourage you to review these terms periodically. The date of last revision will be indicated at the top of this page."
    },
    {
      title: "17. Severability",
      content: "If any provision of these terms is found to be unenforceable or invalid, that provision will be limited or eliminated to the minimum extent necessary, and the remaining provisions will remain in full force and effect."
    },
    {
      title: "18. Contact Information",
      content: "For questions, concerns, or inquiries about these Terms of Service, please contact us at: Email: legal@brajbuzztech.com. We will respond to your inquiries within 5-7 business days."
    }
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-black pt-20 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-5xl">

        {/* Header */}
        <div className="text-center mb-12 pt-8">
          <div className="inline-block mb-4">
            <span className="text-sm font-semibold tracking-wider uppercase text-gray-500 dark:text-gray-400">
              Legal Information
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black dark:text-white mb-4 leading-tight">
            Terms of Service
          </h1>
          <p className="text-lg text-black dark:text-white opacity-80 max-w-3xl mx-auto">
            Last Updated: November 22, 2025
          </p>
        </div>

        {/* Introduction */}
        <div className="bg-gray-100 dark:bg-gray-900 rounded-2xl p-8 sm:p-10 mb-10 border border-gray-200 dark:border-gray-800">
          <p className="text-lg text-black dark:text-white leading-relaxed">
            Welcome to BrajBuzz Tech. These Terms of Service ("Terms") govern your access to and use of 
            our website, content, and services. Please read these terms carefully before using our platform. 
            By accessing or using BrajBuzz Tech, you acknowledge that you have read, understood, and agree 
            to be bound by these Terms.
          </p>
        </div>

        {/* Terms Sections */}
        <div className="space-y-8 mb-12">
          {sections.map((section, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-gray-900 rounded-xl p-6 sm:p-8 border-2 border-gray-200 dark:border-gray-800 hover:border-gray-400 dark:hover:border-gray-600 transition-all duration-300"
            >
              <h2 className="text-2xl font-bold text-black dark:text-white mb-4">
                {section.title}
              </h2>
              <p className="text-black dark:text-white leading-relaxed opacity-90">
                {section.content}
              </p>
            </div>
          ))}
        </div>

        {/* Important Notice */}
        <div className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-black rounded-2xl p-8 sm:p-10 mb-10 border border-gray-200 dark:border-gray-800">
          <h3 className="text-2xl font-bold text-black dark:text-white mb-4 text-center">
            Important Notice
          </h3>
          <p className="text-black dark:text-white leading-relaxed text-center opacity-90">
            These Terms of Service constitute a general framework for using BrajBuzz Tech's services and 
            do not constitute legal advice. You should consult your own legal counsel for advice specific 
            to your situation. By continuing to use our services, you acknowledge that you have read and 
            understood these terms in their entirety.
          </p>
        </div>

        {/* Footer Links */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-center">
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-black dark:bg-white text-white dark:text-black px-8 py-4 rounded-xl font-semibold text-lg hover:opacity-80 transition-all duration-300"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}