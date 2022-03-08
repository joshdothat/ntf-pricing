import React from 'react';
import Box from './Box';

const PricingBox = () => {
  const featureBox1 = [
    { available: true, title: 'Unlimited affiliates' },
    { available: true, title: '1 program' },
    { available: true, title: '3 affiliate acquisition methods' },
    { available: true, title: '6 payout methods' },
    { available: true, title: 'Dashboards & data reports' },
    { available: true, title: 'Live chat support' },
    { available: false, title: 'Use tracking links instead of discount codes' },
    { available: false, title: 'Klaviyo integration' },
    { available: false, title: 'Postscript integration' },
    { available: false, title: 'Full customization of the thank you page' },
    { available: false, title: 'Full customization of the sign up form' },
    { available: false, title: 'Remove Social Snowball branding' },
    { available: false, title: 'Enterprise support (Slack Connect channel)' },
    { available: false, title: 'Dedicated account manager' },
  ];
  const featureBox2 = [
    { available: true, title: 'Unlimited affiliates' },
    { available: true, title: '4 program' },
    { available: true, title: '3 affiliate acquisition methods' },
    { available: true, title: '6 payout methods' },
    { available: true, title: 'Dashboards & data reports' },
    { available: true, title: 'Live chat support' },
    { available: true, title: 'Use tracking links instead of discount codes' },
    { available: true, title: 'Klaviyo integration' },
    { available: true, title: 'Postscript integration' },
    { available: true, title: 'Full customization of the thank you page' },
    { available: true, title: 'Full customization of the sign up form' },
    { available: true, title: 'Remove Social Snowball branding' },
    { available: false, title: 'Enterprise support (Slack Connect channel)' },
    { available: false, title: 'Dedicated account manager' },
  ];
  const featureBox3 = [
    { available: true, title: 'Unlimited affiliates' },
    { available: true, title: '10 program' },
    { available: true, title: '3 affiliate acquisition methods' },
    { available: true, title: '6 payout methods' },
    { available: true, title: 'Dashboards & data reports' },
    { available: true, title: 'Live chat support' },
    { available: true, title: 'Use tracking links instead of discount codes' },
    { available: true, title: 'Klaviyo integration' },
    { available: true, title: 'Postscript integration' },
    { available: true, title: 'Full customization of the thank you page' },
    { available: true, title: 'Full customization of the sign up form' },
    { available: true, title: 'Remove Social Snowball branding' },
    { available: true, title: 'Enterprise support (Slack Connect channel)' },
    { available: true, title: 'Dedicated account manager' },
  ];
  return (
    <div className="card-deck mb-3 mt-5 text-center">
      <Box
        revenue="25"
        price="0"
        title="Dusting"
        // btnClass="btn-outline-primary"
        // btnTitle="Sign up for free"
        feature={featureBox1}
        keyword="Contract"
      />
      <Box
        revenue="15"
        price="25"
        title="Snow Day"
        // btnClass="btn-primary"
        // btnTitle="Get started"
        feature={featureBox2}
        keyword="Mint"
      />
      <Box
        revenue="5"
        price="49"
        title="Blizzard"
        // btnClass="btn-primary"
        // btnTitle="Contact us"
        feature={featureBox3}
        keyword="Dev"
      />
    </div>
  );
};

export default PricingBox;
