export type StoryLanguage = "en" | "mr" | "hi" | "gu" | "bn" | "ta" | "kn";

export type StoryTranslation = {
  headline: string;
  summary: string;
};

export type Story = {
  slug: string;
  name: string;
  project: string;
  unit: string;
  headline: string;
  summary: string;
  proof: string[];
  photo?: string | null;
  image?: string | null;
  photoCredit?: string;
  photoSource?: string;
  photoAlt?: string;
  location?: string;
  title?: string;
  excerpt?: string;
  kind?: "public-source" | "client-approved";
  sourceLabel?: string;
  sourceUrl?: string;
  translations: Record<StoryLanguage, StoryTranslation>;
};

// These are editorial evidence stories, not invented customer testimonials.
// They summarize public project reviews and public records. Named customer quotations
// are intentionally not reproduced without consent and supporting documentation.
const storyTranslations = {
  empire: {
    en: {
      headline: "A practical place to live, with the trade-offs in view",
      summary: "A public resident review describes Balaji Empire's locality as helpful and well connected, while also noting traffic and parking pressure. We keep both sides visible.",
    },
    mr: {
      headline: "राहण्यासाठी सोयीची जागा, आणि वास्तवही स्पष्ट",
      summary: "सार्वजनिक रहिवासी अभिप्रायात परिसरातील मदतशील वातावरण आणि चांगली जोडणी नमूद आहे; त्याचबरोबर वाहतूक आणि पार्किंगची अडचणही स्पष्ट केली आहे.",
    },
    hi: {
      headline: "रहने के लिए व्यावहारिक जगह, कमियों के साथ",
      summary: "एक सार्वजनिक निवासी समीक्षा परिसर को मददगार और अच्छी कनेक्टिविटी वाला बताती है, साथ ही ट्रैफिक और पार्किंग की परेशानी भी दर्ज करती है।",
    },
    gu: {
      headline: "રહેવા માટે વ્યવહારુ જગ્યા, સાથે વાસ્તવિકતા પણ",
      summary: "જાહેર રહેવાસી સમીક્ષામાં વિસ્તારને મદદરૂપ અને સારી કનેક્ટિવિટી ધરાવતો જણાવાયો છે, સાથે ટ્રાફિક અને પાર્કિંગની અડચણ પણ નોંધાઈ છે.",
    },
    bn: {
      headline: "বাসের জন্য ব্যবহারিক জায়গা, সুবিধা ও সীমাবদ্ধতা দুটোই",
      summary: "একটি প্রকাশ্য বাসিন্দা পর্যালোচনায় এলাকার সহায়ক পরিবেশ ও যোগাযোগের সুবিধার কথা বলা হয়েছে, পাশাপাশি যানজট ও পার্কিংয়ের চাপও উল্লেখ করা হয়েছে।",
    },
    ta: {
      headline: "வாழ்வதற்கு நடைமுறையான இடம், சவால்களும் வெளிப்படையாக",
      summary: "ஒரு பொது குடியிருப்பாளர் மதிப்புரையில் பகுதி நல்ல இணைப்பும் உதவும் சூழலும் கொண்டதாக கூறப்பட்டுள்ளது; போக்குவரத்து மற்றும் பார்க்கிங் சிக்கல்களும் குறிப்பிடப்பட்டுள்ளன.",
    },
    kn: {
      headline: "ವಾಸಕ್ಕೆ ಅನುಕೂಲಕರ ಸ್ಥಳ, ಸವಾಲುಗಳನ್ನೂ ಸ್ಪಷ್ಟವಾಗಿ",
      summary: "ಸಾರ್ವಜನಿಕ ನಿವಾಸಿ ವಿಮರ್ಶೆಯು ಪ್ರದೇಶದ ಉತ್ತಮ ಸಂಪರ್ಕ ಮತ್ತು ಸಹಾಯಕ ವಾತಾವರಣವನ್ನು ಉಲ್ಲೇಖಿಸುತ್ತದೆ; ಟ್ರಾಫಿಕ್ ಮತ್ತು ಪಾರ್ಕಿಂಗ್ ಒತ್ತಡವನ್ನೂ ದಾಖಲಿಸುತ್ತದೆ.",
    },
  },
  connectivity: {
    en: {
      headline: "Connectivity is part of the everyday story",
      summary: "Public feedback around Dangat Corner repeatedly points to road connectivity and access to schools, hospitals, markets and everyday services as practical advantages.",
    },
    mr: {
      headline: "दैनंदिन आयुष्यातील जोडणी हीच खरी सोय",
      summary: "Dangat Corner बद्दलच्या सार्वजनिक अभिप्रायात रस्ते जोडणी तसेच शाळा, रुग्णालये, बाजार आणि दैनंदिन सेवांपर्यंत पोहोच यांचा उल्लेख आहे.",
    },
    hi: {
      headline: "रोजमर्रा की जिंदगी में कनेक्टिविटी मायने रखती है",
      summary: "Dangat Corner के सार्वजनिक फीडबैक में सड़क संपर्क और स्कूल, अस्पताल, बाजार व रोजमर्रा की सेवाओं तक पहुंच को व्यावहारिक फायदे बताया गया है।",
    },
    gu: {
      headline: "રોજિંદા જીવનમાં કનેક્ટિવિટી મહત્વની છે",
      summary: "Dangat Corner અંગેના જાહેર પ્રતિસાદમાં રસ્તાની કનેક્ટિવિટી તથા શાળા, હોસ્પિટલ, બજાર અને દૈનિક સેવાઓ સુધીની પહોંચને વ્યવહારુ લાભ ગણાવવામાં આવી છે.",
    },
    bn: {
      headline: "প্রতিদিনের জীবনে যোগাযোগ ব্যবস্থার গুরুত্ব",
      summary: "Dangat Corner নিয়ে প্রকাশ্য মতামতে রাস্তার যোগাযোগ এবং স্কুল, হাসপাতাল, বাজার ও দৈনন্দিন পরিষেবায় সহজ পৌঁছনোর কথা উঠে এসেছে।",
    },
    ta: {
      headline: "தினசரி வாழ்க்கையில் இணைப்பு முக்கியம்",
      summary: "Dangat Corner குறித்த பொது கருத்துகளில் சாலை இணைப்பு, பள்ளிகள், மருத்துவமனைகள், சந்தைகள் மற்றும் அன்றாட சேவைகளுக்கான அணுகல் குறிப்பிடப்படுகிறது.",
    },
    kn: {
      headline: "ದೈನಂದಿನ ಬದುಕಿನಲ್ಲಿ ಸಂಪರ್ಕ ಮುಖ್ಯ",
      summary: "Dangat Corner ಕುರಿತ ಸಾರ್ವಜನಿಕ ಅಭಿಪ್ರಾಯಗಳು ರಸ್ತೆ ಸಂಪರ್ಕ ಮತ್ತು ಶಾಲೆ, ಆಸ್ಪತ್ರೆ, ಮಾರುಕಟ್ಟೆ ಹಾಗೂ ದೈನಂದಿನ ಸೇವೆಗಳ ಸುಲಭ ಪ್ರವೇಶವನ್ನು ಪ್ರಾಯೋಗಿಕ ಅನುಕೂಲವೆಂದು ಸೂಚಿಸುತ್ತವೆ.",
    },
  },
  staff: {
    en: {
      headline: "A small interaction can shape the experience",
      summary: "One public review specifically describes a staff member as polite and friendly. We present that observation as a sourced review signal, not as a company-created testimonial.",
    },
    mr: {
      headline: "एक छोटा संवादही अनुभव घडवतो",
      summary: "एका सार्वजनिक अभिप्रायात कर्मचाऱ्यांपैकी एका व्यक्तीचे नम्र आणि मैत्रीपूर्ण वर्तन नमूद केले आहे. हा कंपनीचा तयार केलेला प्रशंसापत्र नसून स्रोताधारित निरीक्षण आहे.",
    },
    hi: {
      headline: "एक छोटा संवाद भी अनुभव बदल सकता है",
      summary: "एक सार्वजनिक समीक्षा में एक स्टाफ सदस्य के विनम्र और दोस्ताना व्यवहार का उल्लेख है। इसे कंपनी की बनाई हुई गवाही नहीं, बल्कि स्रोत-आधारित अवलोकन के रूप में रखा गया है।",
    },
    gu: {
      headline: "નાનો સંવાદ પણ અનુભવ ઘડી શકે છે",
      summary: "એક જાહેર સમીક્ષામાં સ્ટાફના એક સભ્યના નમ્ર અને મિત્રતાભર્યા વર્તનનો ઉલ્લેખ છે. તેને કંપનીની બનાવટી પ્રશંસા તરીકે નહીં, પરંતુ સ્રોત આધારિત અવલોકન તરીકે રજૂ કરવામાં આવ્યું છે.",
    },
    bn: {
      headline: "একটি ছোট যোগাযোগও অভিজ্ঞতা গড়ে দেয়",
      summary: "একটি প্রকাশ্য পর্যালোচনায় একজন স্টাফ সদস্যের ভদ্র ও বন্ধুত্বপূর্ণ আচরণের কথা বলা হয়েছে। এটি কোম্পানির তৈরি প্রশংসাপত্র নয়, উৎসভিত্তিক পর্যবেক্ষণ।",
    },
    ta: {
      headline: "ஒரு சிறிய உரையாடலும் அனுபவத்தை உருவாக்கும்",
      summary: "ஒரு பொது மதிப்புரையில் ஒரு பணியாளர் மரியாதையாகவும் நட்பாகவும் நடந்துகொண்டதாக குறிப்பிடப்பட்டுள்ளது. இது நிறுவனத்தின் உருவாக்கப்பட்ட சான்றுரை அல்ல; ஆதாரத்தை அடிப்படையாகக் கொண்ட பதிவு.",
    },
    kn: {
      headline: "ಒಂದು ಸಣ್ಣ ಸಂವಹನವೂ ಅನುಭವವನ್ನು ರೂಪಿಸಬಹುದು",
      summary: "ಒಂದು ಸಾರ್ವಜನಿಕ ವಿಮರ್ಶೆಯಲ್ಲಿ ಸಿಬ್ಬಂದಿಯೊಬ್ಬರು ವಿನಯಶೀಲ ಮತ್ತು ಸ್ನೇಹಪರರಾಗಿದ್ದರು ಎಂದು ಉಲ್ಲೇಖಿಸಲಾಗಿದೆ. ಇದು ಕಂಪನಿ ರಚಿಸಿದ ಪ್ರಶಂಸಾಪತ್ರವಲ್ಲ, ಮೂಲಾಧಾರಿತ ಗಮನಾರ್ಹ ಅಂಶವಾಗಿದೆ.",
    },
  },
  layouts: {
    en: {
      headline: "Good layouts deserve specific feedback",
      summary: "A public review of Dangat Corner mentions that the flat layouts are good and connectivity is strong. That is useful context, without turning one review into a universal claim.",
    },
    mr: {
      headline: "चांगल्या आराखड्याबद्दल स्पष्ट अभिप्राय",
      summary: "Dangat Corner वरील सार्वजनिक अभिप्रायात फ्लॅटचे आराखडे चांगले आणि जोडणी मजबूत असल्याचे नमूद आहे. एका अभिप्रायाला सार्वत्रिक दावा न बनवता हा संदर्भ दिला आहे.",
    },
    hi: {
      headline: "अच्छे लेआउट पर स्पष्ट प्रतिक्रिया",
      summary: "Dangat Corner की एक सार्वजनिक समीक्षा फ्लैट लेआउट को अच्छा और कनेक्टिविटी को मजबूत बताती है। हम इसे एक समीक्षा का संदर्भ रखते हैं, सार्वभौमिक दावा नहीं।",
    },
    gu: {
      headline: "સારા લેઆઉટ અંગે સ્પષ્ટ પ્રતિસાદ",
      summary: "Dangat Cornerની એક જાહેર સમીક્ષા ફ્લેટના લેઆઉટને સારા અને કનેક્ટિવિટીને મજબૂત ગણાવે છે. એક સમીક્ષાને સર્વવ્યાપી દાવો બનાવ્યા વગર આ સંદર્ભ આપવામાં આવ્યો છે.",
    },
    bn: {
      headline: "ভালো লেআউট নিয়ে নির্দিষ্ট মতামত",
      summary: "Dangat Corner-এর একটি প্রকাশ্য পর্যালোচনায় ফ্ল্যাটের লেআউট ভালো এবং যোগাযোগ ব্যবস্থা শক্তিশালী বলা হয়েছে। এটিকে সার্বজনীন দাবি না করে একটি পর্যালোচনার প্রেক্ষিত হিসেবে রাখা হয়েছে।",
    },
    ta: {
      headline: "நல்ல வடிவமைப்புக்கு குறிப்பிட்ட கருத்து",
      summary: "Dangat Corner குறித்த ஒரு பொது மதிப்புரை குடியிருப்பின் தளவமைப்பு நன்றாகவும் இணைப்பு வலுவாகவும் இருப்பதாக கூறுகிறது. இதை ஒரு மதிப்புரையின் சூழலாக மட்டுமே வழங்குகிறோம்.",
    },
    kn: {
      headline: "ಉತ್ತಮ ವಿನ್ಯಾಸಕ್ಕೆ ನಿರ್ದಿಷ್ಟ ಪ್ರತಿಕ್ರಿಯೆ",
      summary: "Dangat Corner ಕುರಿತ ಸಾರ್ವಜನಿಕ ವಿಮರ್ಶೆಯೊಂದು ಫ್ಲಾಟ್ ಲೇಔಟ್ ಉತ್ತಮ ಮತ್ತು ಸಂಪರ್ಕ ಬಲವಾಗಿದೆ ಎಂದು ಹೇಳುತ್ತದೆ. ಇದನ್ನು ಸಾರ್ವತ್ರಿಕ ಹೇಳಿಕೆಯಾಗಿಸದೆ ಒಂದು ವಿಮರ್ಶೆಯ ಸಂದರ್ಭವಾಗಿ ನೀಡಲಾಗಿದೆ.",
    },
  },
  essentials: {
    en: {
      headline: "The neighborhood is part of the home",
      summary: "Public feedback mentions nearby markets, malls, restaurants and everyday services. For a family home, those ordinary details can matter as much as the building itself.",
    },
    mr: {
      headline: "घराचा अनुभव परिसराशी जोडलेला असतो",
      summary: "सार्वजनिक अभिप्रायात जवळचे बाजार, मॉल, रेस्टॉरंट आणि दैनंदिन सेवा यांचा उल्लेख आहे. कुटुंबाच्या घरासाठी या साध्या गोष्टीही इमारतीइतक्याच महत्त्वाच्या ठरू शकतात.",
    },
    hi: {
      headline: "घर का अनुभव आसपास के इलाके से जुड़ा है",
      summary: "सार्वजनिक फीडबैक में पास के बाजार, मॉल, रेस्टोरेंट और रोजमर्रा की सेवाओं का उल्लेख है। परिवार के लिए ये छोटी सुविधाएं भी घर जितनी महत्वपूर्ण हो सकती हैं।",
    },
    gu: {
      headline: "ઘરનો અનુભવ આસપાસના વિસ્તારથી જોડાયેલો છે",
      summary: "જાહેર પ્રતિસાદમાં નજીકના બજાર, મોલ, રેસ્ટોરન્ટ અને દૈનિક સેવાઓનો ઉલ્લેખ છે. પરિવાર માટે આ સામાન્ય સુવિધાઓ પણ ઇમારત જેટલી મહત્વની બની શકે છે.",
    },
    bn: {
      headline: "বাড়ির অভিজ্ঞতা আশপাশের এলাকার সঙ্গেও জড়িত",
      summary: "প্রকাশ্য মতামতে কাছের বাজার, মল, রেস্তোরাঁ ও দৈনন্দিন পরিষেবার কথা বলা হয়েছে। পরিবারের জন্য এই সাধারণ সুবিধাগুলোও বাড়ির মতোই গুরুত্বপূর্ণ হতে পারে।",
    },
    ta: {
      headline: "வீட்டின் அனுபவம் சுற்றுப்புறத்துடனும் இணைந்தது",
      summary: "பொது கருத்துகளில் அருகிலுள்ள சந்தைகள், மால்கள், உணவகங்கள் மற்றும் அன்றாட சேவைகள் குறிப்பிடப்படுகின்றன. குடும்ப வீட்டிற்கு இத்தகைய சாதாரண வசதிகளும் கட்டிடத்தைப் போலவே முக்கியம்.",
    },
    kn: {
      headline: "ಮನೆಯ ಅನುಭವ ಸುತ್ತಮುತ್ತಲಿನ ಪ್ರದೇಶಕ್ಕೂ ಸೇರಿದೆ",
      summary: "ಸಾರ್ವಜನಿಕ ಅಭಿಪ್ರಾಯಗಳಲ್ಲಿ ಹತ್ತಿರದ ಮಾರುಕಟ್ಟೆ, ಮಾಲ್, ರೆಸ್ಟೋರೆಂಟ್ ಮತ್ತು ದೈನಂದಿನ ಸೇವೆಗಳ ಉಲ್ಲೇಖವಿದೆ. ಕುಟುಂಬದ ಮನೆಗೆ ಇಂತಹ ಸಾಮಾನ್ಯ ಸೌಲಭ್ಯಗಳೂ ಕಟ್ಟಡದಷ್ಟೇ ಮುಖ್ಯವಾಗಬಹುದು.",
    },
  },
  record: {
    en: {
      headline: "The public record tells a clearer story",
      summary: "MahaRERA records identify BALAJI EMPIRE as a residential project promoted by AAKAR DEVELOPERS, registered as P52100001661, with a declared completion date of 31 December 2018.",
    },
    mr: {
      headline: "सार्वजनिक नोंद अधिक स्पष्ट चित्र देते",
      summary: "MahaRERA नोंदीनुसार BALAJI EMPIRE हा AAKAR DEVELOPERS चा निवासी प्रकल्प आहे. त्याचा RERA क्रमांक P52100001661 असून घोषित पूर्णता तारीख 31 डिसेंबर 2018 आहे.",
    },
    hi: {
      headline: "सार्वजनिक रिकॉर्ड तस्वीर को स्पष्ट करता है",
      summary: "MahaRERA रिकॉर्ड BALAJI EMPIRE को AAKAR DEVELOPERS द्वारा प्रवर्तित आवासीय परियोजना बताता है। RERA संख्या P52100001661 और घोषित पूर्णता तिथि 31 दिसंबर 2018 है।",
    },
    gu: {
      headline: "જાહેર રેકોર્ડ વધુ સ્પષ્ટ ચિત્ર આપે છે",
      summary: "MahaRERA રેકોર્ડ BALAJI EMPIREને AAKAR DEVELOPERS દ્વારા પ્રમોટ કરાયેલ રહેણાંક પ્રોજેક્ટ તરીકે ઓળખાવે છે. RERA નંબર P52100001661 અને જાહેર પૂર્ણતા તારીખ 31 ડિસેમ્બર 2018 છે.",
    },
    bn: {
      headline: "প্রকাশ্য নথি ছবিটিকে আরও পরিষ্কার করে",
      summary: "MahaRERA রেকর্ডে BALAJI EMPIRE-কে AAKAR DEVELOPERS-এর আবাসিক প্রকল্প হিসেবে দেখানো হয়েছে। RERA নম্বর P52100001661 এবং ঘোষিত সম্পূর্ণতার তারিখ 31 ডিসেম্বর 2018।",
    },
    ta: {
      headline: "பொது பதிவு தெளிவான படத்தை அளிக்கிறது",
      summary: "MahaRERA பதிவில் BALAJI EMPIRE, AAKAR DEVELOPERS மூலம் மேம்படுத்தப்பட்ட குடியிருப்பு திட்டமாக குறிப்பிடப்பட்டுள்ளது. RERA எண் P52100001661; அறிவிக்கப்பட்ட நிறைவு தேதி 31 டிசம்பர் 2018.",
    },
    kn: {
      headline: "ಸಾರ್ವಜನಿಕ ದಾಖಲೆ ಹೆಚ್ಚು ಸ್ಪಷ್ಟ ಚಿತ್ರ ನೀಡುತ್ತದೆ",
      summary: "MahaRERA ದಾಖಲೆ BALAJI EMPIRE ಅನ್ನು AAKAR DEVELOPERS ಪ್ರಚಾರ ಮಾಡಿದ ವಸತಿ ಯೋಜನೆ ಎಂದು ಗುರುತಿಸುತ್ತದೆ. RERA ಸಂಖ್ಯೆ P52100001661 ಮತ್ತು ಘೋಷಿತ ಪೂರ್ಣತಾ ದಿನಾಂಕ 31 ಡಿಸೆಂಬರ್ 2018.",
    },
  },
  portfolio: {
    en: {
      headline: "A portfolio is stronger when each project can be checked",
      summary: "Public property records currently list Aakar Developers in Pune with projects including Aakar Balaji Empire and Aakar Paramount Apartment. We keep project-level facts separate so visitors can verify them one by one.",
    },
    mr: {
      headline: "प्रत्येक प्रकल्प स्वतंत्रपणे तपासता आला तर पोर्टफोलिओ अधिक विश्वासार्ह",
      summary: "सार्वजनिक मालमत्ता नोंदी पुण्यातील Aakar Developers सोबत Aakar Balaji Empire आणि Aakar Paramount Apartment यांसारखे प्रकल्प दाखवतात. प्रत्येक प्रकल्पाची तथ्ये स्वतंत्र ठेवली आहेत.",
    },
    hi: {
      headline: "हर परियोजना अलग से जांची जा सके तो पोर्टफोलियो मजबूत होता है",
      summary: "सार्वजनिक संपत्ति रिकॉर्ड पुणे में Aakar Developers के साथ Aakar Balaji Empire और Aakar Paramount Apartment जैसी परियोजनाएं सूचीबद्ध करते हैं। हम परियोजना-स्तर के तथ्यों को अलग रखते हैं।",
    },
    gu: {
      headline: "દરેક પ્રોજેક્ટ અલગથી ચકાસી શકાય ત્યારે પોર્ટફોલિયો મજબૂત બને છે",
      summary: "જાહેર પ્રોપર્ટી રેકોર્ડ્સ પુણેમાં Aakar Developers સાથે Aakar Balaji Empire અને Aakar Paramount Apartment જેવા પ્રોજેક્ટ્સ દર્શાવે છે. પ્રોજેક્ટ સ્તરની હકીકતો અલગ રાખવામાં આવે છે.",
    },
    bn: {
      headline: "প্রতিটি প্রকল্প আলাদাভাবে যাচাই করা গেলে পোর্টফোলিও আরও শক্তিশালী",
      summary: "প্রকাশ্য সম্পত্তি রেকর্ডে পুনেতে Aakar Developers-এর সঙ্গে Aakar Balaji Empire ও Aakar Paramount Apartment-এর মতো প্রকল্প তালিকাভুক্ত আছে। প্রকল্পভিত্তিক তথ্য আলাদা রাখা হয়েছে।",
    },
    ta: {
      headline: "ஒவ்வொரு திட்டத்தையும் தனித்தனியாக சரிபார்க்க முடிந்தால் பதிவு வலுவாகும்",
      summary: "பொது சொத்து பதிவுகள் புனேயில் Aakar Developers உடன் Aakar Balaji Empire மற்றும் Aakar Paramount Apartment போன்ற திட்டங்களை பட்டியலிடுகின்றன. திட்ட அளவிலான தகவல்கள் தனித்தனியாக வைக்கப்பட்டுள்ளன.",
    },
    kn: {
      headline: "ಪ್ರತಿ ಯೋಜನೆಯನ್ನು ಪ್ರತ್ಯೇಕವಾಗಿ ಪರಿಶೀಲಿಸಬಹುದಾದಾಗ ಪೋರ್ಟ್‌ಫೋಲಿಯೊ ಬಲವಾಗುತ್ತದೆ",
      summary: "ಸಾರ್ವಜನಿಕ ಆಸ್ತಿ ದಾಖಲೆಗಳು ಪುಣೆಯಲ್ಲಿ Aakar Developers ಜೊತೆಗೆ Aakar Balaji Empire ಮತ್ತು Aakar Paramount Apartment ಮುಂತಾದ ಯೋಜನೆಗಳನ್ನು ಪಟ್ಟಿ ಮಾಡುತ್ತವೆ. ಯೋಜನಾ ಮಟ್ಟದ ಮಾಹಿತಿಯನ್ನು ಪ್ರತ್ಯೇಕವಾಗಿ ಇಡಲಾಗಿದೆ.",
    },
  },
} satisfies Record<string, Record<StoryLanguage, StoryTranslation>>;

export const stories: Story[] = [
  {
    slug: "balaji-empire-public-review",
    name: "Public review synthesis",
    project: "Balaji Empire",
    unit: "Vikas Nagar",
    headline: storyTranslations.empire.en.headline,
    summary: storyTranslations.empire.en.summary,
    proof: ["Housing.com resident review", "Public project listing"],
    photo: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85",
    photoCredit: "Unsplash · real photograph · illustrative only",
    photoSource: "https://unsplash.com/s/photos/indian-home",
    photoAlt: "Real residential home photograph used as an illustrative story visual",
    location: "Vikas Nagar · Pune",
    title: storyTranslations.empire.en.headline,
    excerpt: storyTranslations.empire.en.summary,
    kind: "public-source",
    sourceLabel: "Public review synthesis · Housing.com",
    sourceUrl: "https://housing.com/in/buy/projects/page/117415-aakar-balaji-empire-by-aakar-developers-in-vikas-nagar",
    translations: storyTranslations.empire,
  },
  {
    slug: "dangat-corner-connectivity",
    name: "Public review synthesis",
    project: "Dangat Corner",
    unit: "Kiwale",
    headline: storyTranslations.connectivity.en.headline,
    summary: storyTranslations.connectivity.en.summary,
    proof: ["Housing.com resident/locality reviews", "Public project listing"],
    photo: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1600&q=85",
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=85",
    photoCredit: "Unsplash · real photograph · illustrative only",
    photoSource: "https://unsplash.com/s/photos/indian-apartment",
    photoAlt: "Real apartment interior photograph used as an illustrative story visual",
    location: "Kiwale · Pune",
    title: storyTranslations.connectivity.en.headline,
    excerpt: storyTranslations.connectivity.en.summary,
    kind: "public-source",
    sourceLabel: "Public review synthesis · Housing.com",
    sourceUrl: "https://housing.com/in/buy/projects/page/54289-aakar-dangat-corner-by-aakar-developers-in-kiwale",
    translations: storyTranslations.connectivity,
  },
  {
    slug: "dangat-corner-staff",
    name: "Public review synthesis",
    project: "Dangat Corner",
    unit: "Kiwale",
    headline: storyTranslations.staff.en.headline,
    summary: storyTranslations.staff.en.summary,
    proof: ["Public project review", "Source attribution retained"],
    photo: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=85",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85",
    photoCredit: "Unsplash · real photograph · illustrative only",
    photoSource: "https://unsplash.com/s/photos/family-home",
    photoAlt: "Real home interior photograph used as an illustrative story visual",
    location: "Kiwale · Pune",
    title: storyTranslations.staff.en.headline,
    excerpt: storyTranslations.staff.en.summary,
    kind: "public-source",
    sourceLabel: "Public review synthesis · Housing.com",
    sourceUrl: "https://housing.com/in/buy/projects/page/54289-aakar-dangat-corner-by-aakar-developers-in-kiwale",
    translations: storyTranslations.staff,
  },
  {
    slug: "dangat-corner-layouts",
    name: "Public review synthesis",
    project: "Dangat Corner",
    unit: "Kiwale",
    headline: storyTranslations.layouts.en.headline,
    summary: storyTranslations.layouts.en.summary,
    proof: ["Public project review", "Source attribution retained"],
    photo: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1600&q=85",
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=85",
    photoCredit: "Unsplash · real photograph · illustrative only",
    photoSource: "https://unsplash.com/s/photos/residential-architecture",
    photoAlt: "Real residential architecture photograph used as an illustrative story visual",
    location: "Kiwale · Pune",
    title: storyTranslations.layouts.en.headline,
    excerpt: storyTranslations.layouts.en.summary,
    kind: "public-source",
    sourceLabel: "Public review synthesis · Housing.com",
    sourceUrl: "https://housing.com/in/buy/projects/page/54289-aakar-dangat-corner-by-aakar-developers-in-kiwale",
    translations: storyTranslations.layouts,
  },
  {
    slug: "dangat-corner-neighborhood",
    name: "Public review synthesis",
    project: "Dangat Corner",
    unit: "Kiwale",
    headline: storyTranslations.essentials.en.headline,
    summary: storyTranslations.essentials.en.summary,
    proof: ["Public locality review", "Nearby-services listing"],
    photo: "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1600&q=85",
    image: "https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=1200&q=85",
    photoCredit: "Unsplash · real photograph · illustrative only",
    photoSource: "https://unsplash.com/s/photos/pune-india",
    photoAlt: "Real residential neighborhood photograph used as an illustrative story visual",
    location: "Kiwale · Pune",
    title: storyTranslations.essentials.en.headline,
    excerpt: storyTranslations.essentials.en.summary,
    kind: "public-source",
    sourceLabel: "Public review synthesis · Housing.com",
    sourceUrl: "https://housing.com/in/buy/projects/page/54289-aakar-dangat-corner-by-aakar-developers-in-kiwale",
    translations: storyTranslations.essentials,
  },
  {
    slug: "balaji-empire-public-record",
    name: "Public record story",
    project: "Balaji Empire",
    unit: "Vikas Nagar",
    headline: storyTranslations.record.en.headline,
    summary: storyTranslations.record.en.summary,
    proof: ["MahaRERA registration P52100001661", "Promoter: AAKAR DEVELOPERS", "Declared completion: 31 December 2018"],
    photo: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1600&q=85",
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=85",
    photoCredit: "Unsplash · real photograph · illustrative only",
    photoSource: "https://unsplash.com/s/photos/residential-building",
    photoAlt: "Real residential building photograph used as an illustrative story visual",
    location: "Pune · Maharashtra",
    title: storyTranslations.record.en.headline,
    excerpt: storyTranslations.record.en.summary,
    kind: "public-source",
    sourceLabel: "MahaRERA public record",
    sourceUrl: "https://www.aurumproptech.in/pulse/rera/maharashtra/pune/balaji-empire-P52100001661",
    translations: storyTranslations.record,
  },
  {
    slug: "aakar-project-records",
    name: "Public portfolio story",
    project: "Aakar Developers",
    unit: "Pune",
    headline: storyTranslations.portfolio.en.headline,
    summary: storyTranslations.portfolio.en.summary,
    proof: ["Public property portfolio listing", "Project-level records kept separate"],
    photo: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1600&q=85",
    image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=85",
    photoCredit: "Unsplash · real photograph · illustrative only",
    photoSource: "https://unsplash.com/s/photos/residential-property",
    photoAlt: "Real residential property photograph used as an illustrative story visual",
    location: "Pune · Maharashtra",
    title: storyTranslations.portfolio.en.headline,
    excerpt: storyTranslations.portfolio.en.summary,
    kind: "public-source",
    sourceLabel: "Public portfolio listing · Housing.com",
    sourceUrl: "https://housing.com/buy-projects-by-aakar-developers-bid-334593-Abmto0thuwr1fdlsqveu851iat",
    translations: storyTranslations.portfolio,
  },
];

export function getStory(slug: string) {
  return stories.find((s) => s.slug === slug);
}
