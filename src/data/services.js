export const services = [
    {
        "service_title": "Recruitment for Companies",
        "service_id": "recruitment-for-companies",
        "service_images": ["img/service_image_1.jpg", "img/service_image_2.jpg"],
        "service_description": ["Kazipro is a fast growing recruitment company dedicated to helping clients find the best talent for their organizations. We specialize in placing professionals in a variety of industries, including technology, healthcare, and finance.", "Our recruitment services include sourcing and screening candidates, conducting interviews, and facilitating the hiring process. We have a proven track record of making successful placements for clients, and are committed to finding the best fit for both the client and the candidate.", "In addition to our expertise in the recruitment industry, Kazipro is known for our exceptional customer service. We work closely with clients to understand their needs and ensure that we find the right fit for their team.", "Choose Kazipro for your recruitment needs or your professional development partner. Let us assist you in finding top talent for your company or make sure you get the job of your dreams."]
    },
    {
        "service_title": "CV Writing and Revamping Services",
        "service_id": "resume-revamping",
        "service_images": ["img/service_image_3.jpg", "img/service_image_4.jpg"],
        "service_description": ["Professional CV writing and revamping services help job seekers create resumes that are optimized for applicant tracking systems (ATS). Our team of expert writers understands the requirements of ATS software and knows how to craft resumes that will pass through these systems and catch the attention of hiring managers. Whether you're just starting out in your career or you're an experienced professional looking to make a change, we can help you create a CV that showcases your skills and accomplishments in the best possible light."]
    },
    {
        "service_title": "LinkedIn Profile Development",
        "service_id": "linkedin-profile-development",
        "service_images": ["img/service_image_1.jpg", "img/service_image_2.jpg"],
        "service_description": ["At KaziPro, our mission is to help professionals take control of their careers and reach their full potential. One of the ways we do this is by offering expert guidance on building and developing LinkedIn profiles. Our team of experienced professionals will work with you to optimize your profile, ensuring that it accurately reflects your skills, experience, and achievements. We'll also provide tips and strategies on how to use LinkedIn effectively to network, find job opportunities, and showcase your professional brand. With our help, you'll be able to take your LinkedIn presence to the next level and stand out in today's competitive job market. Many of our clients have seen success in finding new job opportunities and advancing their careers thanks to the improved LinkedIn profiles we've helped them create. Contact us today to learn more about how we can help you make the most of your LinkedIn presence."]
    },
    // {
    //      "service_title": "Career Coaching & Development",
    //      "service_id": "career-coaching",
    //      "service_images": ["img/service_image_3.jpg", "img/service_image_4.jpg"],
    //      "service_description": ["KaziPro is your partner in career development. Our team of experienced coaches and advisors is here to help you build the skills and confidence you need to thrive in your career. Whether you're seeking a new role, a promotion, or simply want to take your career to the next level, we have the resources and support to help you reach your goals."],
    //      "service_description_extra": "The process typically includes assessing the individual's current skills and experience, identifying areas for improvement, setting goals, creating a plan to achieve those goals, and providing support and guidance throughout the process. KaziPro, charges Ksh. 3000 per hour for their full career coaching process. "
    // },
    // {
    //     "service_title": "Interview Preparation",
    //     "service_id": "interview-preparation",
    //     "service_images": ["img/service_image_1.jpg", "img/service_image_2.jpg"],
    //     "service_description": ["At KaziPro, we are committed to helping candidates succeed in their job search. Part of that process involves preparing for interviews, which can be intimidating and stressful for many people. Our team of experienced professionals is here to provide support and guidance to help candidates feel confident and prepared for their interviews. We offer a variety of services, including resume and cover letter review, mock interviews, and advice on how to answer common interview questions. With our help, candidates can feel prepared and ready to impress potential employers and land the job they want."],
    //     'service_description_extra':  "The process typically includes reviewing the individual's resume and cover letter, practicing answering common interview questions, discussing strategies for answering behavioral and situational questions, providing feedback on the individual's interviewing style and body language, and helping the individual prepare for any specific questions or scenarios that may come up in the interview. KaziPro charges Ksh.1500 per hour for their full interview coaching process. "
    // },
    {
        "service_title": "Interview Preparation",
        "service_id": "interview-preparation",
        "service_images": ["img/service_image_1.jpg", "img/service_image_2.jpg"],
        "service_description": ["At KaziPro, we have structured this into two session options: ."],
        service_options: [{ id: 0, name: '1 hour Session', price: 2000}, { id: 1, name: '2 hour Session', price: 3500}],
        more_description: ["Both options include a comprehensive write-up with a list of potential questions and model answers to prepare clients effectively for interviews.", "During the interview preparation session, which can be conducted via Zoom or Google Meet as per the client's preference, participants undergo a meticulous process designed to enhance their interview skills and readiness. Here's a brief overview of what happens during the session:"],
        specifities: [
                   {
                         id: 0,
                         title: "Introduction to the Interview Process",
                         description: "The session begins with an overview of what to expect during a typical interview, the structure, and the types of interviews one might encounter."
                   },
                   {
                        id: 1, 
                        title: "Mock Interview",
                        description: "The client participates in an intense mock interview, simulating the real interview experience. This exercise aims to familiarize the client with the interview environment and question formats."
                   },
                   {
                       id: 2,
                       title: "Answer Structuring",
                       description: "Clients are guided on how to effectively structure their answers, using techniques like the STAR method (Situation, Task, Action, Result) to articulate their responses clearly and impactfully."
                   },
                   {
                      id: 3,
                      title: "Body Language Assessment",
                      description: "Given that non-verbal communication is as critical as verbal during an interview, clients receive feedback on their body language. This includes posture, eye contact, hand gestures, and facial expressions, with tips on how to convey confidence and engagement."
                   },
                   {
                       id: 4,
                       title: "Constructive Feedback",
                       description: "Throughout the session, clients are provided with constructive feedback on their performance, highlighting areas of strength and aspects needing improvement."
                   },
                   {
                       id: 5,
                       title: "Tailored Advice",
                       description: "The session concludes with personalized advice, taking into account the client's unique background, the industry they are applying to, and the specific role they are targeting."
                   }
        ],
        'service_description_extra':  "The overall aim of these sessions is to ensure that clients not only answer questions effectively but also present themselves as competent, confident candidates who make a strong, positive impression on potential employers."
    },
    {
        "service_title": "Career Coaching Sessions",
        "service_id": "career-coaching",
        // "service_images": ["img/service_image_3.jpg", "img/service_image_4.jpg"],
        "service_description": ["We have two kinds of career coaching sessions depending on experience level designed to provide tailored support for our clients at different stages in their careers, ensuring they present the best version of their professional self to potential employers: "],
        level_options: [
                {
                       id: 0,
                       title: "Junior to Mid-Senior level",
                       intro: 'This comprehensive session includes:',
                       price: 10000,
                       option_list: ["CV Optimization", "LinkedIn Optimization", "Interview Preparation (with a guide to questions and answers)", "Cover letter Crafting"]
                },
                {
                      id: 1,
                      title: "Executives and Senior Professionals",
                      price: 17000,
                      intro: "Tailored for high-level professionals, this session offers a deep dive into personal branding and interview strategy, including: ",
                      option_list: ['Executive CV Optimization', "Advanced LinkedIn Optimization", "Strategic Interview Preparation (with a customized question and answer guide)", "Executive Cover Letter Crafting"]
                }
        ],
        more_description: ["The career coaching session is a comprehensive program designed to provide clients with the tools and insights necessary for advancing their careers. Here's what it includes:"],
        specifities: [
                   {
                         id: 0,
                         title: "Career Assessment",
                         description: "The session begins with an in-depth assessment of the client's career goals, experiences, strengths, and  areas for development. This helps in customizing the coaching to the client's specific needs."
                   },
                   {
                        id: 1, 
                        title: "CV and LinkedIn Optimization",
                        description: "Expert guidance is provided to revamp the client's CV, making it more appealing to recruiters by highlighting their achievements, skills, and experiences.",
                        extra: "LinkedIn profiles are also reviewed and optimized to ensure they are professional, comprehensive, and  leverage LinkedIn's networking capabilities effectively."
                   },
                   {
                       id: 2,
                       title: "Interview Preparation",
                       description: "Clients are trained in interview techniques and strategies that include crafting well-structured responses and understanding the nuances of different interview formats.",
                       extra: "This also involves mock interviews to practice real-life scenarios, with immediate feedback to refine techniques."
                   },
                   {
                      id: 3,
                      title: "Cover Letter Crafting",
                      description: "Advice on writing compelling cover letters that capture the client’s qualifications and interest in the position, tailoring each letter to specific job applications."
                   },
                   {
                       id: 4,
                       title: "Professional Branding",
                       description: "The session delves into personal branding, helping clients understand how to position themselves in their industry and how to communicate their unique value proposition to potential employers or connections."
                   },
                   {
                       id: 5,
                       title: "Networking Strategies",
                       description: "Clients learn effective networking strategies that can open doors to new opportunities. This includes leveraging online platforms and professional networks."
                   },
                   {
                    id: 6,
                    title: "Action Plan Creation",
                    description: "By the end of the session, clients will have a clear action plan that outlines that steps they need to take to achieve their career objectives, whether it's climbing the corporate ladder, changing industries, or seeking new roles."
                }
        ],
        "service_description_extra": ""
   },
]