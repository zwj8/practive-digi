<template>
  <com-modal :value="show" @close="close">
    <template #title>
      <h1 v-if="type === 'privacy'" class="title">PrivacyPolicy</h1>
      <h1 v-else-if="type === 'service'" class="title">TermsAndConditions</h1>
      <h1 v-else-if="type === 'cookie'" class="title">Cookie 政策</h1>
    </template>
    <div class="content">
      <template v-if="type === 'privacy'">
        <h2>PRIVACY NOTICE</h2>
        <h3>Last updated June 24, 2022</h3>
        <p> This privacy notice for ADSEASY PTE.LTD. ("<strong>Company</strong>,"
          "<strong>we</strong>,"
          "<strong>us</strong>,"
          or "<strong>our</strong>"), describes how and why we might
          collect, store, use, and/or share ("<strong>process</strong>")
          your information when you use our services ("<strong>Services</strong>"), such as
          when you:</p>
        <ul>
          <li>Visit our website at <a href="http://www.superdigiads.com/">
              http://www.superdigiads.com/</a>, or any
            website of ours that links to this privacy notice </li>
          <li>Engage with us in other related ways, including any sales,
            marketing, or events</li>
        </ul>
        <span>
          <strong>Questions or concerns?</strong>
          Reading this privacy notice will help you understand your privacy rights and choices.
          If you do not agree with our policies and practices, please do not use our Services.
          If you still have any questions or concerns, please contact us at <a href="service@superdigiads.com">
            service@superdigiads.com</a>.
        </span> <br>
        <h3>SUMMARY OF KEY POINTS</h3>
        <h4>
          This summary provides key points from our privacy notice, but you can find out
          more details about any of these topics by clicking the link following each key
          point or by using our table of contents below to find the section you are looking
          for. You can also click here to go directly to our table of contents.
        </h4>
        <span>
          <strong>What personal information do we process?</strong>
           When you visit, use, or navigate our Services, we may process personal
          information depending on how you interact with ADSEASY PTE.LTD. and the Services,
          the choices you make, and the products and features you use. Click here to learn
          more.
        </span> <br>
        <span>
          <strong>Do we process any sensitive personal information?</strong>
          We do not process sensitive personal information.
        </span><br>
        <span>
          <strong>Do we receive any information from third parties?</strong>
           We may receive information from public databases,
          marketing partners, social media platforms, and other
          outside sources. Click here to learn more.
        </span> <br>
        <span>
          <strong>How do we process your information?</strong>
          We process your information to provide, improve, and administer
          our Services, communicate with you, for security and fraud prevention,
          and to comply with law. We may also process your information for other
          purposes with your consent. We process your information only when we
          have a valid legal reason to do so. Click here to learn more.
        </span> <br>
        <span>
          <strong>In what situations and with which parties do we share personal information? </strong>
          We may share information in specific situations and with specific third
          parties. Click here to learn more.
        </span> <br>
        <span>
          <strong>How do we keep your information safe?</strong>
           We have organizational and technical processes and procedures in place to
          protect your personal information. However, no electronic transmission over
          the internet or information storage technology can be guaranteed to be 100%
          secure, so we cannot promise or guarantee that hackers, cybercriminals,
          or other unauthorized third parties will not be able to defeat our security
          and improperly collect, access, steal, or modify your information.
          Click here to learn more.
        </span> <br>
        <span>
          <strong>What are your rights?</strong>
          Depending on where you are located geographically, the applicable privacy
          law may mean you have certain rights regarding your personal information.
          Click here to learn more.
        </span> <br>
        <span>
          <strong>How do you exercise your rights? </strong>
           The easiest way to exercise your rights is by contacting us.
          We will consider and act upon any request in accordance with applicable
          data protection laws.
        </span> <br>
        <p>Want to learn more about what ADSEASY PTE.LTD. does with any information we collect? Click here to review the
          notice in full.</p>

        <h2>TABLE OF CONTENTS</h2>
        <p>1. WHAT INFORMATION DO WE COLLECT?</p>
        <p>2. HOW DO WE PROCESS YOUR INFORMATION?</p>
        <p>3. WHAT LEGAL BASES DO WE RELY ON TO PROCESS YOUR PERSONAL INFORMATION?</p>
        <p>4. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?</p>
        <p>5. WHAT IS OUR STANCE ON THIRD-PARTY WEBSITES?</p>
        <p>6. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?</p>
        <p>7. HOW LONG DO WE KEEP YOUR INFORMATION?</p>
        <p>8. HOW DO WE KEEP YOUR INFORMATION SAFE?</p>
        <p>9. DO WE COLLECT INFORMATION FROM MINORS?</p>
        <p>10. WHAT ARE YOUR PRIVACY RIGHTS?</p>
        <p>11. CONTROLS FOR DO-NOT-TRACK FEATURES</p>
        <p>12. DO CALIFORNIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?</p>
        <p>13. DO WE MAKE UPDATES TO THIS NOTICE?</p>
        <p>14. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</p>
        <p>15. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?</p>

        <h2>1. WHAT INFORMATION DO WE COLLECT?</h2>
        <h3>Personal information you disclose to us</h3>

        <span>
          <strong>In Short:  </strong>
          We collect personal information that you provide to us.
        </span> <br>

        <p>
          We collect personal information that you voluntarily provide to us when
          you register on the Services, express an interest in obtaining information
          about us or our products and Services, when you participate in activities
          on the Services, or otherwise when you contact us.
        </p>
        <span>
          <strong>Personal Information Provided by You.</strong>
          The personal information that we collect depends on the context of your
          interactions with us and the Services, the choices you make, and the
          products and features you use. The personal information we collect may
          include the following:
        </span>
        <ul>
          <li>names</li>
          <li>email addresses</li>
          <li>mailing addresses</li>
          <li>usernames</li>
          <li>passwords</li>
          <li>billing addresses</li>
          <li>debit/credit card numbers</li>
          <li>phone numbers</li>
        </ul>
        <span>
          <strong>Sensitive Information.</strong>
          We do not process sensitive information.
        </span> <br>

        <span>
          <strong>Payment Data.</strong>
          We may collect data necessary to process your payment if you make
          purchases, such as your payment instrument number (such as a credit
          card number), and the security code associated with your payment
          instrument. All payment data is stored by WeChat Pay, Alipay, Visa,
           PayPal and Mastercard. You may find their privacy notice link(s)
        </span> <br>
        <p>here: <a
            href="https://www.wechat.com/en/privacy_policy.html">https://www.wechat.com/en/privacy_policy.html,</a><br>
          <a
            href="https://global.alipay.com/docs/ac/Platform/privacy">https://global.alipay.com/docs/ac/Platform/privacy.</a><br>
          <a
            href=" https://usa.visa.com/legal/privacy-policy.html">https://usa.visa.com/legal/privacy-policy.html.</a><br>
          <a
            href="https://www.paypal.com/myaccount/privacy/privacyhub">https://www.paypal.com/myaccount/privacy/privacyhub</a>
          <br>and 
          <a
            href="https://www.mastercard.com/global/en/vision/corp-responsibility/commitment-to-privacy/privacy.html">https://www.mastercard.com/global/en/vision/corp-responsibility/commitment-to-privacy/privacy.html.</a>
        </p>
        <p>All personal information that you provide to us must be true, complete, and accurate,
          and you must notify us of any changes to such personal information.</p>
        <h4>Information automatically collected</h4>
        <span>
          <strong>In Short: </strong>
          Some information — such as your Internet Protocol (IP) address and/or browser and device
          characteristics — is collected automatically when you visit our Services.
        </span> <br>
        <p>We automatically collect certain information when you visit, use, or navigate the Services.
          This information does not reveal your specific identity (like your name or contact information)
          but may include device and usage information, such as your IP address, browser and device
          characteristics, operating system, language preferences, referring URLs, device name, country,
          location, information about how and when you use our Services, and other technical information.
          This information is primarily needed to maintain the security and operation of our Services,
          and for our internal analytics and reporting purposes.</p>
        <p>The information we collect includes:</p>
        <ul>
          <li>Log and Usage Data. Log and usage data is service-related, diagnostic, usage, and performance
            information our servers automatically collect when you access or use our Services and which we
            record in log files. Depending on how you interact with us, this log data may include your IP
            address, device information, browser type, and settings and information about your activity
            in the Services (such as the date/time stamps associated with your usage, pages and files viewed,
            searches, and other actions you take such as which features you use), device event information
            (such as system activity, error reports (sometimes called "crash dumps"), and hardware settings).</li>
          <li>Device Data. We collect device data such as information about your computer, phone, tablet, or
            other device you use to access the Services. Depending on the device used, this device data may
            include information such as your IP address (or proxy server), device and application
            identification numbers, location, browser type, hardware model, Internet service provider
            and/or mobile carrier, operating system, and system configuration information.</li>
          <li>Location Data. We collect location data such as information about your device's location,
            which can be either precise or imprecise. How much information we collect depends on the type
            and settings of the device you use to access the Services. For example, we may use GPS and
            other technologies to collect geolocation data that tells us your current location
            (based on your IP address). You can opt out of allowing us to collect this information either
            by refusing access to the information or by disabling your Location setting on your device.
            However, if you choose to opt out, you may not be able to use certain aspects of the Services.</li>
        </ul>
        <h3>Information collected from other sources</h3>
        <span>
          <strong>In Short: </strong>
          We may collect limited data from public databases, marketing partners, and other outside
          sources.
        </span> <br>
        <p>In order to enhance our ability to provide relevant marketing, offers, and services to you and
          update our records, we may obtain information about you from other sources, such as public
          databases, joint marketing partners, affiliate programs, data providers, and from other third
          parties. This information includes mailing addresses, job titles, email addresses, phone numbers,
          intent data (or user behavior data), Internet Protocol (IP) addresses, social media profiles,
          social media URLs, and custom profiles, for purposes of targeted advertising and event promotion.
        </p>
        <h2>2. HOW DO WE PROCESS YOUR INFORMATION?</h2>
        <span>
          <strong>In Short: </strong>
          We process your information to provide, improve, and administer our Services,
          communicate with you, for security and fraud prevention, and to comply with
          law. We may also process your information for other purposes with your consent.
        </span> <br>
        <h4>We process your personal information for a variety of reasons, depending on how
          you interact with our Services, including:</h4>
        <ul>
          <li>
            <strong>To facilitate account creation and authentication and otherwise manage user

              accounts.</strong>
            We may process your information so you can create and log in to your account,
            as well as keep your account in working order.

          </li>
          <li>

            <strong>To request feedback.</strong>
             We may process your information when necessary to request feedback and to
            contact you about your use of our Services.

          </li>
          <li>

            <strong>To send you marketing and promotional communications.</strong>
             We may process the personal information you send to us for our marketing
            purposes, if this is in accordance with your marketing preferences.
            You can opt out of our marketing emails at any time. For more information,
            see "WHAT ARE YOUR PRIVACY RIGHTS?" below).

          </li>
          <li>

            <strong>To deliver targeted advertising to you.</strong>
            We may process your information to develop and display personalized content
            and advertising tailored to your interests, location, and more.

          </li>
          <li>

            <strong>To protect our Services. </strong>
             We may process your information as part of our efforts to keep our Services
            safe and secure, including fraud monitoring and prevention.

          </li>
          <li>
            <strong>To save or protect an individual's vital interest. </strong>
            We may process your information when necessary to save or protect an
            individual’s vital interest, such as to prevent harm.

          </li>
        </ul>
        <h2>3. WHAT LEGAL BASES DO WE RELY ON TO PROCESS YOUR INFORMATION?</h2>
        <span>
          <strong>In Short: </strong>
          We only process your personal information when we believe it is
          necessary and we have a valid legal reason (i.e., legal basis) to
          do so under applicable law, like with your consent, to comply
          with laws, to provide you with services to enter into or fulfill 
          our contractual obligations, to protect your rights, or to fulfill
           our legitimate business interests.
        </span> <br>
        <h3 style="text-decoration:underline ;">If you are located in the EU or UK, this section applies to you.</h3>
        <p>The General Data Protection Regulation (GDPR) and UK GDPR require us to
          explain the valid legal bases we rely on in order to process your personal
          information. As such, we may rely on the following legal bases to
          process your personal information:</p>
        <ul>
          <li>

            <strong>Consent.</strong>
            We may process your information if you have given us permission
            (i.e., consent) to use your personal information for a specific
            purpose. You can withdraw your consent at any time. Click here 
            to learn more.

          </li>
          <li>

            <strong>Legitimate Interests. </strong>
            We may process your information when we believe it is reasonably
            necessary to achieve our legitimate business interests and those
            interests do not outweigh your interests and fundamental rights
            and freedoms. For example, we may process your personal information
            for some of the purposes described in order to:

          </li>
          <li>
            Send users information about special offers and discounts on our
            products and services
          </li>
          <li>
            Develop and display personalized and relevant advertising content
            for our users
          </li>
          <li>
            Diagnose problems and/or prevent fraudulent activities
          </li>
          <li>
            Understand how our users use our products and services so we can
            improve user experience
          </li>
          <li>

            <strong>Legal Obligations. </strong>
            We may process your information where we believe it is necessary
            for compliance with our legal obligations, such as to cooperate with
            a law enforcement body or regulatory agency, exercise or defend our
            legal rights, or disclose your information as evidence in litigation
            in which we are involved.

          </li>
          <li>

            <strong>Vital Interests.</strong>
            We may process your information where we believe it is necessary to
            protect your vital interests or the vital interests of a third party,
            such as situations involving potential threats to the safety of any
            person.

          </li>
        </ul>
        <h3 style="text-decoration:underline ;">If you are located in Canada, this section applies to you.</h3>
        <p>
          We may process your information if you have given us specific permission
          (i.e., express consent) to use your personal information for a specific
          purpose, or in situations where your permission can be inferred (i.e., implied
          consent). You can withdraw your consent at any time. Click here to learn
          more.
        </p>
        <p>In some exceptional cases, we may be legally permitted under applicable
          law to process your information without your consent, including,
          for example:</p>
        <ul>
          <li>If collection is clearly in the interests of an individual and consent cannot be obtained in a timely way
          </li>
          <li>For investigations and fraud detection and prevention</li>
          <li>For business transactions provided certain conditions are met</li>
          <li>If it is contained in a witness statement and the collection is necessary to assess, process, or settle an
            insurance claim</li>
          <li>For identifying injured, ill, or deceased persons and communicating with next of kin</li>
          <li>If we have reasonable grounds to believe an individual has been, is, or may be victim of financial abuse
          </li>
          <li>If it is reasonable to expect collection and use with consent would
            compromise the availability or the accuracy of the information and the
            collection is reasonable for purposes related to investigating a breach
            of an agreement or a contravention of the laws of Canada or a province</li>
          <li>If disclosure is required to comply with a subpoena, warrant, court
            order, or rules of the court relating to the production of records</li>
          <li>If it was produced by an individual in the course of their employment,
            business, or profession and the collection is consistent with the
            purposes for which the information was produced</li>
          <li>If the collection is solely for journalistic, artistic, or literary purposes</li>
          <li>If the information is publicly available and is specified by the regulations</li>
        </ul>
        <h2>4. WHEN AND WITH WHOM DO WE SHARE YOUR PERSONAL INFORMATION?</h2>
        <span>
          <strong>In Short:</strong>
          We may share information in specific situations described in this
          section and/or with the following third parties.
        </span> <br>
        <p>We may need to share your personal information in the following
          situations:</p>
        <ul>
          <li>

            <strong>Business Transfers.</strong>
            We may share or transfer your information in connection with,
            or during negotiations of, any merger, sale of company assets,
            financing, or acquisition of all or a portion of our business to
            another company.

          </li>
          <li>

            <strong>Affiliates. </strong>
             We may share your information with our affiliates, in which
            case we will require those affiliates to honor this privacy
            notice. Affiliates include our parent company and any
            subsidiaries, joint venture partners, or other companies that
            we control or that are under common control with us.

          </li>
          <li>

            <strong>Business Partners.</strong>
             We may share your information with our business partners to
            offer you certain products, services, or promotions.

          </li>
        </ul>
        <h2>5. WHAT IS OUR STANCE ON THIRD-PARTY WEBSITES?</h2>
        <span>
          <strong>In Short:</strong>
          We are not responsible for the safety of any information that you
          share with third parties that we may link to or who advertise on
          our Services, but are not affiliated with, our Services.
        </span> <br>
        <p>The Services may link to third-party websites, online services,
          or mobile applications and/or contain advertisements from third
          parties that are not affiliated with us and which may link to other
          websites, services, or applications. Accordingly, we do not make
          any guarantee regarding any such third parties, and we will not
          be liable for any loss or damage caused by the use of such
          third-party websites, services, or applications. The inclusion
          of a link towards a third-party website, service, or application
          does not imply an endorsement by us. We cannot guarantee the safety
          and privacy of data you provide to any third parties. Any data
          collected by third parties is not covered by this privacy notice.
          We are not responsible for the content or privacy and security
          practices and policies of any third parties, including other
          websites, services, or applications that may be linked to or
          from the Services. You should review the policies of such third
          parties and contact them directly to respond to your questions.
        </p>
        <h2>6. DO WE USE COOKIES AND OTHER TRACKING TECHNOLOGIES?</h2>
        <span>
          <strong>In Short:</strong>
          We may use cookies and other tracking technologies to collect and
          store your information.
        </span> <br>
        <p>We may use cookies and similar tracking technologies (like web beacons and
          pixels) to access or store information. Specific information about how we
          use such technologies and how you can refuse certain cookies is set out in
          our Cookie Notice.</p>

        <h2>7. HOW LONG DO WE KEEP YOUR INFORMATION?</h2>
        <span>
          <strong>In Short:</strong>
          We keep your information for as long as necessary to fulfill the purposes
          outlined in this privacy notice unless otherwise required by law.
        </span> <br>
        <p>We will only keep your personal information for as long as it is
          necessary for the purposes set out in this privacy notice, unless a
          longer retention period is required or permitted by law (such as tax,
          accounting, or other legal requirements). No purpose in this notice
          will require us keeping your personal information for longer than 
          the period of time in which users have an account with us.</p>
        <p>When we have no ongoing legitimate business need to process your personal
          information, we will either delete or anonymize such information, or,
          if this is not possible (for example, because your personal information
          has been stored in backup archives), then we will securely store your
          personal information and isolate it from any further processing until
          deletion is possible.</p>

        <h2>8. HOW DO WE KEEP YOUR INFORMATION SAFE?</h2>
        <span>
          <strong>In Short:</strong>
           We aim to protect your personal information through a system of organizational
           and technical security measures.
        </span> <br>
        <p>We have implemented appropriate and reasonable technical and 
          organizational security measures designed to protect the security
          of any personal information we process. However, despite our safeguards
          and efforts to secure your information, no electronic transmission
          over the Internet or information storage technology can be guaranteed
          to be 100% secure, so we cannot promise or guarantee that hackers,
          cybercriminals, or other unauthorized third parties will not be
          able to defeat our security and improperly collect, access, steal,
          or modify your information. Although we will do our best to protect
          your personal information, transmission of personal information to
          and from our Services is at your own risk. You should only access
          the Services within a secure environment.</p>
        <h2>9. DO WE COLLECT INFORMATION FROM MINORS?</h2>
        <span>
          <strong>In Short:</strong>
          We do not knowingly collect data from or market to children under 18 years of age.
        </span> <br>
        <p>We do not knowingly solicit data from or market to children under 18
          years of age. By using the Services, you represent that you are a
          t least 18 or that you are the parent or guardian of such a minor
          and consent to such minor dependent’s use of the Services. If we
          learn that personal information from users less than 18 years of
          age has been collected, we will deactivate the account and take
          reasonable measures to promptly delete such data from our records.
          If you become aware of any data we may have collected from
          children under age 18, please contact
          us at <a href=" service@superdigiads.com"> service@superdigiads.com</a>.</p>

        <h2>10. WHAT ARE YOUR PRIVACY RIGHTS?</h2>
        <span>
          <strong>In Short:</strong>
          In some regions, such as the European Economic Area (EEA), United
          Kingdom (UK), and Canada, you have rights that allow you greater access
          to and control over your personal information. You may review, change,
          or terminate your account at any time.
        </span> <br>
        <p>In some regions (like the EEA, UK, and Canada), you have certain
          rights under applicable data protection laws. These may include
          the right (i) to request access and obtain a copy of your personal
          information, (ii) to request rectification or erasure; (iii) to
          restrict the processing of your personal information; and (iv)
          if applicable, to data portability. In certain circumstances,
          you may also have the right to object to the processing of your
          personal information. You can make such a request by contacting
          us by using the contact details provided in the section "HOW
          CAN YOU CONTACT US ABOUT THIS NOTICE?" below.</p>
        <p>We will consider and act upon any request in accordance with
          applicable data protection laws.</p>

        <p>If you are located in the EEA or UK and you believe we are
          unlawfully processing your personal information, you also have
          the right to complain to your local data protection supervisory
          authority. You can find their contact details
          here: <a
            href="https://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm"> https://ec.europa.eu/justice/data-protection/bodies/authorities/index_en.htm</a>.
        </p>
        <p>Withdrawing your consent: If we are relying on your consent to
          process your personal information, which may be express and/or
          implied consent depending on the applicable law, you have the
          right to withdraw your consent at any time. You can withdraw your
          consent at any time by contacting us by using the contact details
          provided in the section "HOW CAN YOU CONTACT US ABOUT THIS
          NOTICE?" below.</p>
        <p>However, please note that this will not affect the lawfulness of the
          processing before its withdrawal, nor when applicable law allows, will
          it affect the processing of your personal information conducted in
          reliance on lawful processing grounds other than consent.</p>

        <span>
          <strong style="text-decoration:underline ;">Opting out of marketing and promotional communications:</strong>
          You can unsubscribe from our marketing and promotional
          communications at any time by clicking on the unsubscribe link
          in the emails that we send, replying "STOP" or "UNSUBSCRIBE" to
          the SMS messages that we send, or by contacting us using the
          details provided in the section "HOW CAN YOU CONTACT US ABOUT
          THIS NOTICE?" below. You will then be removed from the marketing
          lists. However, we may still communicate with you — for example,
          to send you service-related messages that are necessary for the
          administration and use of your account, to respond to service
          requests, or for other non-marketing purposes.
        </span> <br>
        <h4>Account Information</h4>
        <p>If you would at any time like to review or change the information in
          your account or terminate your account, you can:</p>
        <ul>
          <li>Contact us using the contact information provided.</li>
        </ul>
        <p>Cookies and similar technologies: Most Web browsers are set to accept
          cookies by default. If you prefer, you can usually choose to set your
          browser to remove cookies and to reject cookies. If you choose to
          remove cookies or reject cookies, this could affect certain features
          or services of our Services. To opt out of interest-based advertising
          by advertisers on our Services
          visit <a href="http://www.aboutads.info/choices/">
            http://www.aboutads.info/choices/</a>.</p>

        <p>If you have questions or comments about your privacy rights, you may email us at <a
            href="service@superdigiads.com"> service@superdigiads.com</a>.</p>
        <h2>11. CONTROLS FOR DO-NOT-TRACK FEATURES</h2>
        <p>Most web browsers and some mobile operating systems and mobile
          applications include a Do-Not-Track ("DNT") feature or setting
          you can activate to signal your privacy preference not to have
          data about your online browsing activities monitored and
          collected. At this stage no uniform technology standard
          for recognizing and implementing DNT signals has been 
          finalized. As such, we do not currently respond to DNT
          browser signals or any other mechanism that automatically
          communicates your choice not to be tracked online. If
          a standard for online tracking is adopted that we must
          follow in the future, we will inform you about that practice
          in a revised version of this privacy notice.</p>
        <h2>12. DO CALIFORNIA RESIDENTS HAVE SPECIFIC PRIVACY RIGHTS?</h2>
        <span>
          <strong>In Short:</strong>
          Yes, if you are a resident of California, you are granted specific
          rights regarding access to your personal information.
        </span> <br>
        <p>California Civil Code Section 1798.83, also known as the "Shine
          The Light" law, permits our users who are California residents
          to request and obtain from us, once a year and free of charge,
          information about categories of personal information (if any)
          we disclosed to third parties for direct marketing purposes
          and the names and addresses of all third parties with which
          we shared personal information in the immediately preceding
          calendar year. If you are a California resident and would
          like to make such a request, please submit your request
          in writing to us using the contact information provided
          below.</p>
        <p>If you are under 18 years of age, reside in California,
          and have a registered account with Services, you have the
          right to request removal of unwanted data that you publicly post
          on the Services. To request removal of such data, please contact
          us using the contact information provided below and include
          the email address associated with your account and a statement
          that you reside in California. We will make sure the data
          is not publicly displayed on the Services, but please be aware
          that the data may not be completely or comprehensively removed
          from all our systems (e.g., backups, etc.).</p>
        <h4>CCPA Privacy Notice</h4>
        <p>The California Code of Regulations defines a "resident" as:</p>
        <p>(1) every individual who is in the State of California for
          other than a temporary or transitory purpose and</p>
        <p>(2) every individual who is domiciled in the State of
          California who is outside the State of California for a
          temporary or transitory purpose</p>
        <p>All other individuals are defined as "non-residents."</p>
        <p>If this definition of "resident" applies to you, we must
          adhere to certain rights and obligations regarding your
          personal information.</p>
        <h4>What categories of personal information do we collect?</h4>
        <p>We have collected the following categories of personal information in the past twelve
          (12) months:</p>
        <table>
          <tr>
            <th>Category</th>
            <th>Examples</th>
            <th>Collected</th>
          </tr>
          <!-- 第一行 -->
          <tr>
            <td>A. Identifiers</td>
            <td>Contact details, such as real name, alias, postal address,
              telephone or mobile contact number, unique personal identifier,
              online identifier, Internet Protocol address, email address,
              and account name</td>
            <td>NO</td>
          </tr>
          <!-- 第二行 -->
          <tr>
            <td>B. Personal information categories listed in the California
              Customer Records statute</td>
            <td>Name, contact information, education, employment, employment
              history, and financial information</td>
            <td>YES</td>
          </tr>
          <!-- 第三行 -->
          <tr>
            <td>C. Protected classification characteristics under California or
              federal law</td>
            <td>Gender and date of birth</td>
            <td>NO</td>
          </tr>
          <!-- 第四行 -->
          <tr>
            <td>D. Commercial information</td>
            <td>Transaction information, purchase history, financial details,
              and payment information</td>
            <td>NO</td>
          </tr>
          <!-- 第五行 -->
          <tr>
            <td>E. Biometric information </td>
            <td>Fingerprints and voiceprints</td>
            <td>NO</td>
          </tr>
          <!-- 第六行 -->
          <tr>
            <td>F. Internet or other similar network activity</td>
            <td>Browsing history, search history, online behavior, interest
              data, and interactions with our and other websites,
              applications, systems, and advertisements</td>
            <td>YES</td>
          </tr>
          <!-- 第七行 -->
          <tr>
            <td>G. Geolocation data</td>
            <td>Device location</td>
            <td>NO</td>
          </tr>
          <!-- 第八行 -->
          <tr>
            <td>H. Audio, electronic, visual, thermal, olfactory, or similar information</td>
            <td>Images and audio, video or call recordings created in
              connection with our business activities</td>
            <td>NO</td>
          </tr>
          <!-- 第九行 -->
          <tr>
            <td>I. Professional or employment-related information</td>
            <td>Business contact details in order to provide you our
              services at a business level or job title, work history,
              and professional qualifications if you apply for a job
              with us</td>
            <td>NO</td>
          </tr>
          <!-- 第十行 -->
          <tr>
            <td>J. Education Information</td>
            <td>Student records and directory information</td>
            <td>NO</td>
          </tr>
          <!-- 第十一行 -->
          <tr>
            <td>K. Inferences drawn from other personal information</td>
            <td>Inferences drawn from any of the collected personal
              information listed above to create a profile or summary
              about, for example, an individual’s preferences and
              characteristics</td>
            <td>NO</td>
          </tr>
        </table>
        <p>We may also collect other personal information outside of these
          categories instances where you interact with us in person,
          online, or by phone or mail in the context of:</p>
        <ul>
          <li>Receiving help through our customer support channels;</li>
          <li>Participation in customer surveys or contests; and</li>
          <li>Facilitation in the delivery of our Services and to respond
            to your inquiries.</li>
        </ul>
        <h4>How do we use and share your personal information?</h4>
        <p>More information about our data collection and sharing practices
          can be found in this privacy notice.</p>

        <p>You may contact us by email at <a href="service@superdigiads.com"> service@superdigiads.com</a> , or by
          referring
          to the contact details at the bottom of this document.</p>
        <p>If you are using an authorized agent to exercise your right to opt out
          we may deny a request if the authorized agent does not submit proof that they
          have been validly authorized to act on your behalf.</p>
        <h4>Will your information be shared with anyone else?</h4>
        <p>We may disclose your personal information with our service providers
          pursuant to a written contract between us and each service provider.
          Each service provider is a for-profit entity that processes the
          information on our behalf.</p>
        <p>We may use your personal information for our own business purposes,
          such as for undertaking internal research for technological development
          and demonstration. This is not considered to be "selling" of your
          personal information.</p>
        <p>ADSEASY PTE.LTD. has not disclosed or sold any personal information
          to third parties for a business or commercial purpose in the preceding
          twelve (12) months. ADSEASY PTE.LTD. will not sell personal information
          in the future belonging to website visitors, users, and other consumers
          .</p>
        <h4></h4>
        <p style="text-decoration:underline;">Right to request deletion of the data — Request to delete</p>
        <p>You can ask for the deletion of your personal information. If you ask us to
          delete your personal information, we will respect your request and delete your
          personal information, subject to certain exceptions provided by law, such as
          (but not limited to) the exercise by another consumer of his or her right to
          free speech, our compliance requirements resulting from a legal obligation,
          or any processing that may be required to protect against illegal activities.</p>
        <p style="text-decoration:underline;">Right to be informed — Request to know</p>
        <p>Depending on the circumstances, you have a right to know:</p>
        <ul>
          <li>whether we collect and use your personal information;</li>
          <li>the categories of personal information that we collect;</li>
          <li>the purposes for which the collected personal information is used;</li>
          <li>whether we sell your personal information to third parties;</li>
          <li>the categories of personal information that we sold or disclosed for a
            business purpose;</li>
          <li>the categories of third parties to whom the personal information was sold
            or disclosed for a business purpose; and</li>
          <li>the business or commercial purpose for collecting or selling personal
            information.</li>
        </ul>
        <p>In accordance with applicable law, we are not obligated to provide or
          delete consumer information that is de-identified in response to a consumer
          request or to re-identify individual data to verify a consumer request.</p>
        <p style="text-decoration:underline;">Right to Non-Discrimination for the Exercise of a Consumer’s Privacy
          Rights</p>
        <p>We will not discriminate against you if you exercise your privacy rights.</p>
        <p style="text-decoration:underline;">Verification process</p>
        <p>Upon receiving your request, we will need to verify your identity to
          determine you are the same person about whom we have the information in our
          system. These verification efforts require us to ask you to provide information
          so that we can match it with information you have previously provided us.
          For instance, depending on the type of request you submit, we may ask you
          to provide certain information so that we can match the information you
          provide with the information we already have on file, or we may contact
          you through a communication method (e.g., phone or email) that you have
          previously provided to us. We may also use other verification methods as
          the circumstances dictate.</p>
        <p>We will only use personal information provided in your request to verify
          your identity or authority to make the request. To the extent possible,
          we will avoid requesting additional information from you for the purposes
          of verification. However, if we cannot verify your identity from the
          information already maintained by us, we may request that you provide
          additional information for the purposes of verifying your identity and
          for security or fraud-prevention purposes. We will delete such additionally
          provided information as soon as we finish verifying you.</p>
        <p style="text-decoration:underline;">Other privacy rights</p>
        <ul>
          <li>You may object to the processing of your personal information.</li>
          <li>You may request correction of your personal data if it is incorrect
            or no longer relevant, or ask to restrict the processing of the
            information.</li>
          <li>You can designate an authorized agent to make a request under the
            CCPA on your behalf. We may deny a request from an authorized agent
            that does not submit proof that they have been validly authorized to
            act on your behalf in accordance with the CCPA.</li>
          <li>You may request to opt out from future selling of your personal
            information to third parties. Upon receiving an opt-out request, we
            will act upon the request as soon as feasibly possible, but no later
            than fifteen (15) days from the date of the request submission.</li>
        </ul>
        <p>To exercise these rights, you can contact us by email
          at <a href="service@superdigiads.com">service@superdigiads.com</a> , or by referring to the contact details
          at the bottom of this document. If you have a complaint about how we
          handle your data, we would like to hear from you.</p>
        <h2>13. DO WE MAKE UPDATES TO THIS NOTICE?</h2>
        <span>Yes, we will update this notice as necessary to stay compliant with relevant
          <strong>In Short: </strong>
          laws.</span> <br>
        <p>We may update this privacy notice from time to time. The updated version will
          be indicated by an updated "Revised" date and the updated version will be
          effective as soon as it is accessible. If we make material changes to this
          privacy notice, we may notify you either by prominently posting a notice
          of such changes or by directly sending you a notification. We encourage
          you to review this privacy notice frequently to be informed of how we are
          protecting your information.</p>
        <h2>14. HOW CAN YOU CONTACT US ABOUT THIS NOTICE?</h2>
        <p>If you have questions or comments about this notice,
          you may email us at <a href="service@superdigiads.com">service@superdigiads.com</a>  or by post to:</p>
        <p>ADSEASY PTE.LTD.</p>
        <p>112 ROBINSON ROAD</p>
        <p>#03-01</p>
        <p>ROBINSON 112</p>
        <p>SINGAPORE(068902)</p>
        <h4>15. HOW CAN YOU REVIEW, UPDATE, OR DELETE THE DATA WE COLLECT FROM YOU?</h4>
        <p>Based on the applicable laws of your country, you may have the right to request
          access to the personal information we collect from you, change that information,
          or delete it. To request to review, update, or delete your personal information,
          please contact: <a href="service@superdigiads.com">service@superdigiads.com</a> .</p>
      </template>
      <template v-else-if="type === 'service'">
        <h2>TERMS AND CONDITIONS</h2>
        <h3>Last updated May 31, 2022</h3>
        <h4>TABLE OF CONTENTS</h4>
        <p>1. AGREEMENT TO TERMS</p>
        <p>2. INTELLECTUAL PROPERTY RIGHTS</p>
        <p>3. USER REPRESENTATIONS</p>
        <p>4. USER REGISTRATION</p>
        <p>5. FEES AND PAYMENT</p>
        <p>6. FREE TRIAL</p>
        <p>7. CANCELLATION</p>
        <p>8. PROHIBITED ACTIVITIES</p>
        <p>9. USER GENERATED CONTRIBUTIONS</p>
        <p>10. CONTRIBUTION LICENSE</p>
        <p>11. SUBMISSIONS</p>
        <p>12. THIRD-PARTY WEBSITES AND CONTENT</p>
        <p>13. ADVERTISERS</p>
        <p>14. U.S. GOVERNMENT RIGHTS</p>
        <p>15. SITE MANAGEMENT</p>
        <p>16. PRIVACY POLICY</p>
        <p>17. TERM AND TERMINATION</p>
        <p>18. MODIFICATIONS AND INTERRUPTIONS</p>
        <p>19. GOVERNING LAW</p>
        <p>20. DISPUTE RESOLUTION</p>
        <p>21. CORRECTIONS</p>
        <p>22. DISCLAIMER</p>
        <p>23. LIMITATIONS OF LIABILITY</p>
        <p>24. INDEMNIFICATION</p>
        <p>25. USER DATA</p>
        <p>26. ELECTRONIC COMMUNICATIONS, TRANSACTIONS, AND SIGNATURES</p>
        <p>27. CALIFORNIA USERS AND RESIDENTS</p>
        <p>28. MISCELLANEOUS</p>
        <p>29. CONTACT US</p>

        <h2>1. AGREEMENT TO TERMS</h2>
        <p>These Terms of Use constitute a legally binding agreement made between
          you, whether personally or on behalf of an entity (“you”) and ADSEASY
          PTE.LTD. ("<strong>Company</strong>", “ <strong>we</strong> ”, “ <strong>us</strong> ”,
          or “ <strong>our</strong> ”), concerning your access to
          and use of the <a href="http://www.superdigiads.com/">http://www.superdigiads.com/</a>  website as well as any
          other
          media form, media channel, mobile website or mobile application related,
          linked, or otherwise connected thereto (collectively, the “Site”). We are
          registered in Hong Kong and have our registered office at ADSEASY PTE.LTD.
           Our UEN number is 202224438C. You agree that by accessing the Site, you
          have read, understood, and agree to be bound by all of these Terms of Use
          , including the User Agreement posted on the Site, which are incorporated
          into these Terms of Use. IF YOU DO NOT AGREE WITH ALL OF THESE TERMS OF
          USE, THEN YOU ARE EXPRESSLY PROHIBITED FROM USING THE SITE AND YOU MUST 
          DISCONTINUE USE IMMEDIATELY.</p>

        <p>Supplemental terms and conditions or documents that may be posted on
          the Site from time to time are hereby expressly incorporated herein by
          reference. We reserve the right, in our sole discretion, to make changes
          or modifications to these Terms of Use from time to time. We will
          alert you about any changes by updating the “Last updated” date of
          these Terms of Use, and you waive any right to receive specific
          notice of each such change. Please ensure that you check the applicable
          Terms every time you use our Site so that you understand which Terms
          apply. You will be subject to, and will be deemed to have been made
          aware of and to have accepted, the changes in any revised Terms of
          Use by your continued use of the Site after the date such revised
          Terms of Use are posted.</p>
        <p>The information provided on the Site is not intended for distribution
          to or use by any person or entity in any jurisdiction or country where
          such distribution or use would be contrary to law or regulation or
          which would subject us to any registration requirement within such
          jurisdiction or country. Accordingly, those persons who choose to
          access the Site from other locations do so on their own initiative
          and are solely responsible for compliance with local laws, if and to
          the extent local laws are applicable.</p>
        <p>The Site is not tailored to comply with industry-specific regulations
          (Health Insurance Portability and Accountability Act (HIPAA), Federal
          Information Security Management Act (FISMA), etc.), so if your
          interactions would be subjected to such laws, you may not use this
          Site. You may not use the Site in a way that would violate the
          Gramm-Leach-Bliley Act (GLBA).</p>
        <p>The Site is not tailored to comply with industry-specific regulations
          (Health Insurance Portability and Accountability Act (HIPAA), Federal
          Information Security Management Act (FISMA), etc.), so if your
          interactions would be subjected to such laws, you may not use this
          Site. You may not use the Site in a way that would violate the
          Gramm-Leach-Bliley Act (GLBA).</p>
        <h2>2. INTELLECTUAL PROPERTY RIGHTS</h2>
        <p>Unless otherwise indicated, the Site is our proprietary property and all source code, databases,
          functionality, software, website designs, audio, video, text, photographs, and graphics on the Site
          (collectively, the “Content”) and the trademarks, service marks, and logos contained therein (the “Marks”) are
          owned or controlled by us or licensed to us, and are protected by copyright and trademark laws and various
          other intellectual property rights and unfair competition laws of the United States, international copyright
          laws, and international conventions. The Content and the Marks are provided on the Site “AS IS” for your
          information and personal use only. Except as expressly provided in these Terms of Use, no part of the Site and
          no Content or Marks may be copied, reproduced, aggregated, republished, uploaded, posted, publicly displayed,
          encoded, translated, transmitted, distributed, sold, licensed, or otherwise exploited for any commercial
          purpose whatsoever, without our express prior written permission.</p>
        <p>Provided that you are eligible to use the Site, you are granted a limited license to access and use the Site
          and to download or print a copy of any portion of the Content to which you have properly gained access solely
          for your personal, non-commercial use. We reserve all rights not expressly granted to you in and to the Site,
          the Content and the Marks.</p>
        <h2>3. USER REPRESENTATIONS</h2>
        <p>By using the Site, you represent and warrant that: (1) all registration information you submit will be true,
          accurate, current, and complete; (2) you will maintain the accuracy of such information and promptly update
          such registration information as necessary; (3) you have the legal capacity and you agree to comply with these
          Terms of Use; (4) you are not a minor in the jurisdiction in which you reside; (5) you will not access the
          Site through automated or non-human means, whether through a bot, script or otherwise; (6) you will not use
          the Site for any illegal or unauthorized purpose; and (7) your use of the Site will not violate any applicable
          law or regulation.</p>
        <p>If you provide any information that is untrue, inaccurate, not current, or incomplete, we have the right to
          suspend or terminate your account and refuse any and all current or future use of the Site (or any portion
          thereof).</p>
        <h2>4. USER REGISTRATION</h2>
        <p>You may be required to register with the Site. You agree to keep your password confidential and will be
          responsible for all use of your account and password. We reserve the right to remove, reclaim, or change a
          username you select if we determine, in our sole discretion, that such username is inappropriate, obscene, or
          otherwise objectionable.</p>
        <h2>5. FEES AND PAYMENT</h2>
        <p>We accept the following forms of payment:</p>
        <p>-  Visa</p>
        <p>-  PayPal</p>
        <p>-  Mastercard</p>
        <p>-  Union Pay</p>
        <p>-  WeChat Pay</p>
        <p>-  Ali Pay</p>
        <p>You may be required to purchase or pay a fee to access some of our services. You agree to provide current,
          complete, and accurate purchase and account information for all purchases made via the Site. You further agree
          to promptly update account and payment information, including email address, payment method, and payment card
          expiration date, so that we can complete your transactions and contact you as needed. We bill you through an
          online billing account for purchases made via the Site. Sales tax will be added to the price of purchases as
          deemed required by us. We may change prices at any time. All payments shall be in U.S. dollars.</p>
        <p>You agree to pay all charges or fees at the prices then in effect for your purchases, and you authorize us to
          charge your chosen payment provider for any such amounts upon making your purchase. If your purchase is
          subject to recurring charges, then you consent to our charging your payment method on a recurring basis
          without requiring your prior approval for each recurring charge, until you notify us of your cancellation.</p>
        <p>We reserve the right to correct any errors or mistakes in pricing, even if we have already requested or
          received payment. We also reserve the right to refuse any order placed through the Site.</p>

        <h2>6. FREE TRIAL</h2>
        <p>We offer a 7-day free trial to new users who register with the Site. The account will not be charged and the
          subscription will be suspended until upgraded to a paid version at the end of the free trial.</p>
        <h2>7. CANCELLATION</h2>
        <p>All purchases are non-refundable. You can cancel your subscription at any time by logging into your account.
          Your cancellation will take effect at the end of the current paid term.</p>
        <p>If you are unsatisfied with our services, please email us at service@superdigiads.com.</p>
        <h2>8. PROHIBITED ACTIVITIES</h2>
        <p>You may not access or use the Site for any purpose other than that for which we make the Site available. The
          Site may not be used in connection with any commercial endeavors except those that are specifically endorsed
          or approved by us.</p>
        <p>As a user of the Site, you agree not to:</p>
        <ul>
          <li>Systematically retrieve data or other content from the Site to create or compile, directly or
            indirectly, a collection, compilation, database, or directory without written permission from us.</li>
          <li>Trick, defraud, or mislead us and other users, especially in any attempt to learn sensitive account
            information such as user passwords.</li>
          <li>Circumvent, disable, or otherwise interfere with security-related features of the Site, including
            features that prevent or restrict the use or copying of any Content or enforce limitations on the use of the
            Site and/or the Content contained therein.</li>
          <li>Disparage, tarnish, or otherwise harm, in our opinion, us and/or the Site.</li>
          <li>Use any information obtained from the Site in order to harass, abuse, or harm another person.</li>
          <li>Make improper use of our support services or submit false reports of abuse or misconduct.</li>
          <li>Use the Site in a manner inconsistent with any applicable laws or regulations.</li>
          <li>Engage in unauthorized framing of or linking to the Site.</li>
          <li>Upload or transmit (or attempt to upload or to transmit) viruses, Trojan
            horses, or other material, including excessive use of capital letters and
            spamming (continuous posting of repetitive text), that interferes with any
            party’s uninterrupted use and enjoyment of the Site or modifies, impairs,
            disrupts, alters, or interferes with the use, features, functions, operation,
            or maintenance of the Site.</li>
          <li>Engage in any automated use of the system, such as using scripts to send comments or messages, or using
            any data mining, robots, or similar data gathering and extraction tools.</li>
          <li>Delete the copyright or other proprietary rights notice from any Content.</li>
          <li>Attempt to impersonate another user or person or use the username of another user.</li>
          <li>Upload or transmit (or attempt to upload or to transmit) any material that acts as a passive or active
            information collection or transmission mechanism, including without limitation, clear graphics interchange
            formats (“gifs”), 1×1 pixels, web bugs, cookies, or other similar devices (sometimes referred to as
            “spyware” or “passive collection mechanisms” or “pcms”).</li>
          <li>Interfere with, disrupt, or create an undue burden on the Site or the networks or services connected to
            the Site.</li>
          <li>Harass, annoy, intimidate, or threaten any of our employees or agents engaged in providing any portion
            of the Site to you.</li>
          <li>Attempt to bypass any measures of the Site designed to prevent or restrict access to the Site, or any
            portion of the Site.</li>
          <li>Copy or adapt the Site’s software, including but not limited to Flash, PHP, HTML, JavaScript, or other
            code.</li>
          <li>Except as permitted by applicable law, decipher, decompile, disassemble, or reverse engineer any of the
            software comprising or in any way making up a part of the Site.</li>
          <li>Except as may be the result of standard search engine or Internet browser usage, use, launch, develop,
            or distribute any automated system, including without limitation, any spider, robot, cheat utility, scraper,
            or offline reader that accesses the Site, or using or launching any unauthorized script or other software.
          </li>
          <li>Use a buying agent or purchasing agent to make purchases on the Site.</li>
          <li>Make any unauthorized use of the Site, including collecting usernames and/or email addresses of users by
            electronic or other means for the purpose of sending unsolicited email, or creating user accounts by
            automated means or under false pretenses.</li>
          <li>Use the Site as part of any effort to compete with us or otherwise use the Site and/or the Content for
            any revenue-generating endeavor or commercial enterprise.</li>
          <li>Sell or otherwise transfer your profile.</li>
          <li>Use the Site to advertise or offer to sell goods and services.</li>
        </ul>
        <h2>9. USER GENERATED CONTRIBUTIONS</h2>
        <p>The Site does not offer users to submit or post content. We may provide you with the opportunity to create,
          submit, post, display, transmit, perform, publish, distribute, or broadcast content and materials to us or on
          the Site, including but not limited to text, writings, video, audio, photographs, graphics, comments,
          suggestions, or personal information or other material (collectively, "Contributions"). Contributions may be
          viewable by other users of the Site and through third-party websites. As such, any Contributions you transmit
          may be treated in accordance with the Site Privacy Policy. When you create or make available any
          Contributions, you thereby represent and warrant that:</p>
        <ul>
          <li>The creation, distribution, transmission, public display, or performance, and the accessing,
            downloading, or copying of your Contributions do not and will not infringe the proprietary rights, including
            but not limited to the copyright, patent, trademark, trade secret, or moral rights of any third party.</li>
          <li>You are the creator and owner of or have the necessary licenses, rights, consents, releases, and
            permissions to use and to authorize us, the Site, and other users of the Site to use your Contributions in
            any manner contemplated by the Site and these Terms of Use.</li>
          <li>You have the written consent, release, and/or permission of each and every identifiable individual
            person in your Contributions to use the name or likeness of each and every such identifiable individual
            person to enable inclusion and use of your Contributions in any manner contemplated by the Site and these
            Terms of Use.</li>
          <li>Your Contributions are not false, inaccurate, or misleading.</li>
          <li>Your Contributions are not unsolicited or unauthorized advertising, promotional materials, pyramid
            schemes, chain letters, spam, mass mailings, or other forms of solicitation.</li>
          <li>Your Contributions are not obscene, lewd, lascivious, filthy, violent, harassing, libelous, slanderous,
            or otherwise objectionable (as determined by us).</li>
          <li>Your Contributions do not ridicule, mock, disparage, intimidate, or abuse anyone.</li>
          <li>Your Contributions are not used to harass or threaten (in the legal sense of those terms) any other
            person and to promote violence against a specific person or class of people.</li>
          <li>Your Contributions do not violate any applicable law, regulation, or rule.</li>
          <li>Your Contributions do not violate the privacy or publicity rights of any third party.</li>
          <li>Your Contributions do not violate any applicable law concerning child pornography, or otherwise intended
            to protect the health or well-being of minors.</li>
          <li>Your Contributions do not include any offensive comments that are connected to race, national origin,
            gender, sexual preference, or physical handicap.</li>
          <li>Your Contributions do not otherwise violate, or link to material that violates, any provision of these
            Terms of Use, or any applicable law or regulation.</li>
        </ul>
        <p>Any use of the Site in violation of the foregoing violates these Terms of Use and may result in, among other
          things, termination or suspension of your rights to use the Site.</p>
        <h2>10. CONTRIBUTION LICENSE</h2>
        <p>You and the Site agree that we may access, store, process, and use any information and personal data that you
          provide following the terms of the Privacy Policy and your choices (including settings).</p>
        <p>By submitting suggestions or other feedback regarding the Site, you agree that we can use and share  such
          feedback for any purpose without compensation to you.</p>
        <p>We do not assert any ownership over your Contributions. You retain full ownership of all of your
          Contributions and any intellectual property rights or other proprietary rights associated with your
          Contributions. We are not liable for any statements or representations in your Contributions provided by you
          in any area on the Site. You are solely responsible for your Contributions to the Site and you expressly agree
          to exonerate us from any and all responsibility and to refrain from any legal action against us regarding your
          Contributions.</p>
        <h2>11. SUBMISSIONS</h2>
        <p>You acknowledge and agree that any questions, comments, suggestions, ideas, feedback, or other information
          regarding the Site ("Submissions") provided by you to us are non-confidential and shall become our sole
          property. We shall own exclusive rights, including all intellectual property rights, and shall be entitled to
          the unrestricted use and dissemination of these Submissions for any lawful purpose, commercial or otherwise,
          without acknowledgment or compensation to you. You hereby waive all moral rights to any such Submissions, and
          you hereby warrant that any such Submissions are original with you or that you have the right to submit such
          Submissions. You agree there shall be no recourse against us for any alleged or actual infringement or
          misappropriation of any proprietary right in your Submissions.</p>
        <h2>12. THIRD-PARTY WEBSITES AND CONTENT</h2>
        <p>The Site may contain (or you may be sent via the Site) links to other websites ("Third-Party Websites") as
          well as articles, photographs, text, graphics, pictures, designs, music, sound, video, information,
          applications, software, and other content or items belonging to or originating from third parties
          ("Third-Party Content"). Such Third-Party Websites and Third-Party Content are not investigated, monitored, or
          checked for accuracy, appropriateness, or completeness by us, and we are not responsible for any Third-Party
          Websites accessed through the Site or any Third-Party Content posted on, available through, or installed from
          the Site, including the content, accuracy, offensiveness, opinions, reliability, privacy practices, or other
          policies of or contained in the Third-Party Websites or the Third-Party Content. Inclusion of, linking to, or
          permitting the use or installation of any Third-Party Websites or any Third-Party Content does not imply
          approval or endorsement thereof by us. If you decide to leave the Site and access the Third-Party Websites or
          to use or install any Third-Party Content, you do so at your own risk, and you should be aware these Terms of
          Use no longer govern. You should review the applicable terms and policies, including privacy and data
          gathering practices, of any website to which you navigate from the Site or relating to any applications you
          use or install from the Site. Any purchases you make through Third-Party Websites will be through other
          websites and from other companies, and we take no responsibility whatsoever in relation to such purchases
          which are exclusively between you and the applicable third party. You agree and acknowledge that we do not
          endorse the products or services offered on Third-Party Websites and you shall hold us harmless from any harm
          caused by your purchase of such products or services. Additionally, you shall hold us harmless from any losses
          sustained by you or harm caused to you relating to or resulting in any way from any Third-Party Content or any
          contact with Third-Party Websites.</p>
        <h2>13. ADVERTISERS</h2>
        <p>We allow advertisers to display their advertisements and other information in certain areas of the Site, such
          as sidebar advertisements or banner advertisements. If you are an advertiser, you shall take full
          responsibility for any advertisements you place on the Site and any services provided on the Site or products
          sold through those advertisements. Further, as an advertiser, you warrant and represent that you possess all
          rights and authority to place advertisements on the Site, including, but not limited to, intellectual property
          rights, publicity rights, and contractual rights. We simply provide the space to place such advertisements,
          and we have no other relationship with advertisers.</p>
        <h2>14. U.S. GOVERNMENT RIGHTS</h2>
        <p>Our services are “commercial items” as defined in Federal Acquisition Regulation (“FAR”) 2.101. If our
          services are acquired by or on behalf of any agency not within the Department of Defense (“DOD”), our services
          are subject to the terms of these Terms of Use in accordance with FAR 12.212 (for computer software) and FAR
          12.211 (for technical data). If our services are acquired by or on behalf of any agency within the Department
          of Defense, our services are subject to the terms of these Terms of Use in accordance with Defense Federal
          Acquisition Regulation (“DFARS”) 227.72023. In addition, DFARS 252.2277015 applies to technical data acquired
          by the DOD. This U.S. Government Rights clause is in lieu of, and supersedes, any other FAR, DFARS, or other
          clause or provision that addresses government rights in computer software or technical data under these Terms
          of Use.</p>
        <h2>15. SITE MANAGEMENT</h2>
        <p>We reserve the right, but not the obligation, to: (1) monitor the Site for violations of these Terms of Use;
          (2) take appropriate legal action against anyone who, in our sole discretion, violates the law or these Terms
          of Use, including without limitation, reporting such user to law enforcement authorities; (3) in our sole
          discretion and without limitation, refuse, restrict access to, limit the availability of, or disable (to the
          extent technologically feasible) any of your Contributions or any portion thereof; (4) in our sole discretion
          and without limitation, notice, or liability, to remove from the Site or otherwise disable all files and
          content that are excessive in size or are in any way burdensome to our systems; and (5) otherwise manage the
          Site in a manner designed to protect our rights and property and to facilitate the proper functioning of the
          Site.</p>
        <h2>16. PRIVACY POLICY</h2>
        <p>We care about data privacy and security. By using the Site, you agree to be bound by our Privacy Policy
          posted on the Site, which is incorporated into these Terms of Use. Please be advised the Site is hosted
          in China. If you access the Site from any other region of the world with laws or other requirements governing
          personal data collection, use, or disclosure that differ from applicable laws in China, then through your
          continued use of the Site, you are transferring your data to China, and you agree to have your data
          transferred to and processed in China.</p>
        <h2>17. TERM AND TERMINATION</h2>
        <p>These Terms of Use shall remain in full force and effect while you use the Site. WITHOUT LIMITING ANY OTHER
          PROVISION OF THESE TERMS OF USE, WE RESERVE THE RIGHT TO, IN OUR SOLE DISCRETION AND WITHOUT NOTICE OR
          LIABILITY, DENY ACCESS TO AND USE OF THE SITE (INCLUDING BLOCKING CERTAIN IP ADDRESSES), TO ANY PERSON FOR ANY
          REASON OR FOR NO REASON, INCLUDING WITHOUT LIMITATION FOR BREACH OF ANY REPRESENTATION, WARRANTY, OR COVENANT
          CONTAINED IN THESE TERMS OF USE OR OF ANY APPLICABLE LAW OR REGULATION. WE MAY TERMINATE YOUR USE OR
          PARTICIPATION IN THE SITE OR DELETE YOUR ACCOUNT AND ANY CONTENT OR INFORMATION THAT YOU POSTED AT ANY TIME,
          WITHOUT WARNING, IN OUR SOLE DISCRETION.</p>
        <p>If we terminate or suspend your account for any reason, you are prohibited from registering and creating a
          new account under your name, a fake or borrowed name, or the name of any third party, even if you may be
          acting on behalf of the third party. In addition to terminating or suspending your account, we reserve the
          right to take appropriate legal action, including without limitation pursuing civil, criminal, and injunctive
          redress.</p>
        <h2>18. MODIFICATIONS AND INTERRUPTIONS</h2>
        <p>We reserve the right to change, modify, or remove the contents of the Site at any time or for any reason at
          our sole discretion without notice. However, we have no obligation to update any information on our Site. We
          also reserve the right to modify or discontinue all or part of the Site without notice at any time. We will
          not be liable to you or any third party for any modification, price change, suspension, or discontinuance of
          the Site.</p>
        <p>We cannot guarantee the Site will be available at all times. We may experience hardware, software, or other
          problems or need to perform maintenance related to the Site, resulting in interruptions, delays, or errors. We
          reserve the right to change, revise, update, suspend, discontinue, or otherwise modify the Site at any time or
          for any reason without notice to you. You agree that we have no liability whatsoever for any loss, damage, or
          inconvenience caused by your inability to access or use the Site during any downtime or discontinuance of the
          Site. Nothing in these Terms of Use will be construed to obligate us to maintain and support the Site or to
          supply any corrections, updates, or releases in connection therewith.</p>
        <h2>19. GOVERNING LAW</h2>
        <p>These Terms shall be governed by and defined following the laws of China. ADSEASY PTE.LTD. and yourself
          irrevocably consent that the courts of China shall have exclusive jurisdiction to resolve any dispute which
          may arise in connection with these terms.</p>
        <h2>20. DISPUTE RESOLUTION</h2>
        <h4>Binding Arbitration</h4>
        <p>Any dispute arising out of or in connection with this contract, including any question regarding its
          existence, validity, or termination, shall be referred to and finally resolved by the International Commercial
          Arbitration Court under the European Arbitration Chamber (Belgium, Brussels, Avenue Louise, 146)  according to
          the Rules of this ICAC, which, as a result of referring to it, is considered as the part of this clause. The
          number of arbitrators shall be one (1). The seat, or legal place, of arbitration shall be Shenzhen, China. The
          language to be used in the arbitral proceedings shall be Chinese. The governing law of the contract shall be
          the substantive law of China.</p>
        <h4>Restrictions</h4>
        <p>The Parties agree that any arbitration shall be limited to the Dispute between the Parties individually. To
          the full extent permitted by law, (a) no arbitration shall be joined with any other proceeding; (b) there is
          no right or authority for any Dispute to be arbitrated on a class-action basis or to utilize class action
          procedures; and (c) there is no right or authority for any Dispute to be brought in a purported representative
          capacity on behalf of the general public or any other persons.</p>
        <h4>Exceptions to Arbitration</h4>
        <p>The Parties agree that the following Disputes are not subject to the above provisions concerning binding
          arbitration: (a) any Disputes seeking to enforce or protect, or concerning the validity of, any of the
          intellectual property rights of a Party; (b) any Dispute related to, or arising from, allegations of theft,
          piracy, invasion of privacy, or unauthorized use; and (c) any claim for injunctive relief. If this provision
          is found to be illegal or unenforceable, then neither Party will elect to arbitrate any Dispute falling within
          that portion of this provision found to be illegal or unenforceable and such Dispute shall be decided by a
          court of competent jurisdiction within the courts listed for jurisdiction above, and the Parties agree to
          submit to the personal jurisdiction of that court.</p>
        <h2>21. CORRECTIONS</h2>
        <p>There may be information on the Site that contains typographical errors, inaccuracies, or omissions,
          including descriptions, pricing, availability, and various other information. We reserve the right to correct
          any errors, inaccuracies, or omissions and to change or update the information on the Site at any time,
          without prior notice.</p>
        <h2>22. DISCLAIMER</h2>
        <p>THE SITE IS PROVIDED ON AN AS-IS AND AS-AVAILABLE BASIS. YOU AGREE THAT YOUR USE OF THE SITE AND OUR SERVICES
          WILL BE AT YOUR SOLE RISK. TO THE FULLEST EXTENT PERMITTED BY LAW, WE DISCLAIM ALL WARRANTIES, EXPRESS OR
          IMPLIED, IN CONNECTION WITH THE SITE AND YOUR USE THEREOF, INCLUDING, WITHOUT LIMITATION, THE IMPLIED
          WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE MAKE NO WARRANTIES
          OR REPRESENTATIONS ABOUT THE ACCURACY OR COMPLETENESS OF THE SITE’S CONTENT OR THE CONTENT OF ANY WEBSITES
          LINKED TO THE SITE AND WE WILL ASSUME NO LIABILITY OR RESPONSIBILITY FOR ANY (1) ERRORS, MISTAKES, OR
          INACCURACIES OF CONTENT AND MATERIALS, (2) PERSONAL INJURY OR PROPERTY DAMAGE, OF ANY NATURE WHATSOEVER,
          RESULTING FROM YOUR ACCESS TO AND USE OF THE SITE, (3) ANY UNAUTHORIZED ACCESS TO OR USE OF OUR SECURE SERVERS
          AND/OR ANY AND ALL PERSONAL INFORMATION AND/OR FINANCIAL INFORMATION STORED THEREIN, (4) ANY INTERRUPTION OR
          CESSATION OF TRANSMISSION TO OR FROM THE SITE, (5) ANY BUGS, VIRUSES, TROJAN HORSES, OR THE LIKE WHICH MAY BE
          TRANSMITTED TO OR THROUGH THE SITE BY ANY THIRD PARTY, AND/OR (6) ANY ERRORS OR OMISSIONS IN ANY CONTENT AND
          MATERIALS OR FOR ANY LOSS OR DAMAGE OF ANY KIND INCURRED AS A RESULT OF THE USE OF ANY CONTENT POSTED,
          TRANSMITTED, OR OTHERWISE MADE AVAILABLE VIA THE SITE. WE DO NOT WARRANT, ENDORSE, GUARANTEE, OR ASSUME
          RESPONSIBILITY FOR ANY PRODUCT OR SERVICE ADVERTISED OR OFFERED BY A THIRD PARTY THROUGH THE SITE, ANY
          HYPERLINKED WEBSITE, OR ANY WEBSITE OR MOBILE APPLICATION FEATURED IN ANY BANNER OR OTHER ADVERTISING, AND WE
          WILL NOT BE A PARTY TO OR IN ANY WAY BE RESPONSIBLE FOR MONITORING ANY TRANSACTION BETWEEN YOU AND ANY
          THIRD-PARTY PROVIDERS OF PRODUCTS OR SERVICES. AS WITH THE PURCHASE OF A PRODUCT OR SERVICE THROUGH ANY MEDIUM
          OR IN ANY ENVIRONMENT, YOU SHOULD USE YOUR BEST JUDGMENT AND EXERCISE CAUTION WHERE APPROPRIATE.</p>
        <h2>23. LIMITATIONS OF LIABILITY</h2>
        <p>IN NO EVENT WILL WE OR OUR DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE TO YOU OR ANY THIRD PARTY FOR ANY
          DIRECT, INDIRECT, CONSEQUENTIAL, EXEMPLARY, INCIDENTAL, SPECIAL, OR PUNITIVE DAMAGES, INCLUDING LOST PROFIT,
          LOST REVENUE, LOSS OF DATA, OR OTHER DAMAGES ARISING FROM YOUR USE OF THE SITE, EVEN IF WE HAVE BEEN ADVISED
          OF THE POSSIBILITY OF SUCH DAMAGES. NOTWITHSTANDING ANYTHING TO THE CONTRARY CONTAINED HEREIN, OUR LIABILITY
          TO YOU FOR ANY CAUSE WHATSOEVER AND REGARDLESS OF THE FORM OF THE ACTION, WILL AT ALL TIMES BE LIMITED TO  THE
          LESSER OF THE AMOUNT PAID, IF ANY, BY YOU TO US  DURING THE SIX (6) MONTH PERIOD PRIOR TO ANY CAUSE OF
          ACTION ARISING OR $500.00 USD. CERTAIN US STATE LAWS AND INTERNATIONAL LAWS DO NOT ALLOW LIMITATIONS ON
          IMPLIED WARRANTIES OR THE EXCLUSION OR LIMITATION OF CERTAIN DAMAGES. IF THESE LAWS APPLY TO YOU, SOME OR ALL
          OF THE ABOVE DISCLAIMERS OR LIMITATIONS MAY NOT APPLY TO YOU, AND YOU MAY HAVE ADDITIONAL RIGHTS.</p>
        <h2>24. INDEMNIFICATION</h2>
        <p>You agree to defend, indemnify, and hold us harmless, including our subsidiaries, affiliates, and all of our
          respective officers, agents, partners, and employees, from and against any loss, damage, liability, claim, or
          demand, including reasonable attorneys’ fees and expenses, made by any third party due to or arising out
          of: (1) use of the Site; (2) breach of these Terms of Use; (3) any breach of your representations and
          warranties set forth in these Terms of Use; (4) your violation of the rights of a third party, including but
          not limited to intellectual property rights; or (5) any overt harmful act toward any other user of the Site
          with whom you connected via the Site. Notwithstanding the foregoing, we reserve the right, at your expense, to
          assume the exclusive defense and control of any matter for which you are required to indemnify us, and you
          agree to cooperate, at your expense, with our defense of such claims. We will use reasonable efforts to notify
          you of any such claim, action, or proceeding which is subject to this indemnification upon becoming aware of
          it.</p>
        <h2>25. USER DATA</h2>
        <p>We will maintain certain data that you transmit to the Site for the purpose of managing the performance of
          the Site, as well as data relating to your use of the Site. Although we perform regular routine backups of
          data, you are solely responsible for all data that you transmit or that relates to any activity you have
          undertaken using the Site. You agree that we shall have no liability to you for any loss or corruption of any
          such data, and you hereby waive any right of action against us arising from any such loss or corruption of
          such data.</p>
        <h2>26. ELECTRONIC COMMUNICATIONS, TRANSACTIONS, AND SIGNATURES</h2>
        <p>Visiting the Site, sending us emails, and completing online forms constitute electronic communications. You
          consent to receive electronic communications, and you agree that all agreements, notices, disclosures, and
          other communications we provide to you electronically, via email and on the Site, satisfy any legal
          requirement that such communication be in writing. YOU HEREBY AGREE TO THE USE OF ELECTRONIC SIGNATURES,
          CONTRACTS, ORDERS, AND OTHER RECORDS, AND TO ELECTRONIC DELIVERY OF NOTICES, POLICIES, AND RECORDS OF
          TRANSACTIONS INITIATED OR COMPLETED BY US OR VIA THE SITE. You hereby waive any rights or requirements under
          any statutes, regulations, rules, ordinances, or other laws in any jurisdiction which require an original
          signature or delivery or retention of non-electronic records, or to payments or the granting of credits by any
          means other than electronic means.</p>
        <h2>27. CALIFORNIA USERS AND RESIDENTS</h2>
        <p>If any complaint with us is not satisfactorily resolved, you can contact the Complaint Assistance Unit of the
          Division of Consumer Services of the California Department of Consumer Affairs in writing at 1625 North Market
          Blvd., Suite N 112, Sacramento, California 95834 or by telephone at (800) 952-5210 or (916) 445-1254.</p>

        <h2>28. MISCELLANEOUS</h2>
        <p>These Terms of Use and any policies or operating rules posted by us on the Site or in respect to the Site
          constitute the entire agreement and understanding between you and us. Our failure to exercise or enforce any
          right or provision of these Terms of Use shall not operate as a waiver of such right or provision. These Terms
          of Use operate to the fullest extent permissible by law. We may assign any or all of our rights and
          obligations to others at any time. We shall not be responsible or liable for any loss, damage, delay, or
          failure to act caused by any cause beyond our reasonable control. If any provision or part of a provision of
          these Terms of Use is determined to be unlawful, void, or unenforceable, that provision or part of the
          provision is deemed severable from these Terms of Use and does not affect the validity and enforceability of
          any remaining provisions. There is no joint venture, partnership, employment or agency relationship created
          between you and us as a result of these Terms of Use or use of the Site. You agree that these Terms of Use
          will not be construed against us by virtue of having drafted them. You hereby waive any and all defenses you
          may have based on the electronic form of these Terms of Use and the lack of signing by the parties hereto to
          execute these Terms of Use.</p>

        <h2>29. CONTACT US</h2>
        <p>In order to resolve a complaint regarding the Site or to receive further information regarding use of the
          Site, please contact us at:</p>
        <h3>ADSEASY PTE.LTD.</h3>
        <h3>112 ROBINSON ROAD</h3>
        <h3>#03-01</h3>
        <h3>ROBINSON 112</h3>
        <h3>SINGAPORE(068902)</h3>
        <h3><a href="service@superdigiads.com">service@superdigiads.com</a></h3>
      </template>
    </div>
  </com-modal>
</template>
<script>
export default {
  name: 'PratAgreement',
  props: {
    // default是指默认值,父组件不传值,就默认为xxx
    show: { type: Boolean, default: () => false },
    type: { type: String, default: () => 'privacy' } // privacy || service || cookie
  },
  components: {},
  filters: {},
  data() {
    return {
    }
  },
  computed: {},
  watch: {},
  created() { },
  mounted() { },
  methods: {
    close() {
      this.$emit('close')
    }
  }
}
</script>
<style  lang="less" scoped>
.content {
  text-align: left !important;

  // .title {
  //   font-size: 35px;
  // }

  h2 {
    font-size: 28px;
    padding: 45px 0 20px 0;
  }

  h3 {
    font-size: 25px;
    padding: 10px 0;
  }

  h4 {
    font-size: 22px;
    line-height: 36px;
  }

  a {
    text-decoration: none;
    color: #5073ff;
  }



  p {
    font-size: 20px;
    line-height: 33px;


    span {
      display: block;
      padding-left: 50px;
    }
  }

  table {
    border-collapse: collapse;
    width: 100%;
  }

  table,
  th,
  td {
    border: 1px solid #e5e6e9;
  }

  th {
    padding: 10px;
  }

  td {
    text-align: left;
    height: 50px;
    // vertical-align: bottom;
    padding: 10px;
  }

  ul>li {
    list-style-type: disc;
    list-style-position: inside;
    padding: 5px 0;
    font-size: 20px;
    line-height: 30px;

    p {
      margin-top: 0px;
      margin-bottom: 0px;
    }
  }

  span {
    display: inline-block;
    font-size: 20px;
    line-height: 35px;
    margin-bottom: 25px;
  }

  ul li::marker {
    color: #5073ff;
  }

}
</style>
