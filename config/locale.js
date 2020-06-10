
const LocalizedStrings = require('./lib/LocalizedStrings').default;

const Strings = new LocalizedStrings({
    en: {
        menu: {
            dashboard: 'Dashboard',
            reports: 'Reports',
            support: 'For Support',
            members: 'Members',
            ecard: 'E-Card',
        },
        login: {
            signIn: 'SignIn',
            signOut: 'SignOut',
            username: 'Username',
            password: 'Password',
            forgotPassword: 'Forgot Password ?',
            resetPassword: 'Reset Password',
        },
        footer: {
            copyrigth: 'Copyright@2019',
            contactUs: 'Contact Us',
            aboutUS: 'About Us',
            careers: 'Careers',
        },
        editor: {
            district: 'District',
            constituency: 'Constituency',
            boothNumber: 'Polling Booth Number',
            boothName: 'Polling Booth Name',
            maleVoters: 'Male Voters',
            femaleVoters: 'Female Voters',
            thirdGender: 'Third Gender Voters',
            totalVoters: 'Total Voters',
            submit: 'Submit',
            selectDistrict: 'Select District',
            selectConstituency: 'Select Constituency',
            totalMissmatch: 'Total voters count is not matching the above count . It should match the sum of MV, FV, TGV',
            recordAdded: 'Record added successfully',
            recordFailed: 'Not able to add the record',
            ok: 'OK',
            close: 'Close',
        }
    },

    ta: {
        menu: {
            dashboard: 'முகப்புப்பெட்டி',
            reports: 'அறிக்கைகள்',
            support: 'ஊக்குதவி',
            members: 'உறுப்பினர்கள',
            ecard: 'E-அட்டை',
        },
        login: {
            signIn: 'உள் நுழை',
            signOut: 'வெளியேறு',
            username: 'பயனர்பெயர்',
            password: 'கடவுச்சொல்',
            forgotPassword: 'கடவுச்சொல்லை மறந்துவிட்டீர்களா ?',
            resetPassword: 'கடவுச்சொல்லை மீட்டமைக்க',
        },
        footer: {
            copyrigth: 'பதிப்புரிமை@2019',
            contactUs: 'எங்களை தொடர்பு கொள்ள',
            aboutUS: 'எங்களை பற்றி',
            careers: 'வேலை வாய்ப்புகள',
        },
        editor: {
            district: 'மாவட்டம்',
            constituency: 'சட்டமன்ற தொகுதி',
            boothNumber: 'வாக்குச்சாவடி எண்',
            boothName: 'வாக்குச்சாவடி பெயர்',
            maleVoters: 'ஆண் வாக்காளர்கள்',
            femaleVoters: 'பெண் வாக்காளர்கள்',
            thirdGender: 'மூன்றாம் பாலின  வாக்காளர்கள்',
            totalVoters: 'மொத்த  வாக்காளர்கள்',
            submit: 'சமர்ப்பி',
            selectDistrict: 'மாவட்டத்தைத் தேர்ந்தெடுக்கவும்',
            selectConstituency: 'தொகுதியைத் தேர்ந்தெடுக்கவும்',
            totalMissmatch: 'மொத்த வாக்காளர்களின் எண்ணிக்கை மேலே உள்ள எண்ணிக்கையுடன் பொருந்தவில்லை . இது கூட்டுத்தொகையுடன் பொருந்த வேண்டும்',
            recordAdded: 'பதிவு வெற்றிகரமாக சேர்க்கப்பட்டது',
            recordFailed: 'பதிவைச் சேர்க்க முடியவில்லை',
            ok: 'சரி',
            close: 'மூடு',
        }
    },
});

export default Strings;