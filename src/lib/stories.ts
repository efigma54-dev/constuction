export type StoryLanguage = "en" | "mr" | "hi" | "gu" | "bn" | "ta" | "kn";
export type StoryTranslation = { headline: string; summary: string };
export type Story = {
  slug: string; name: string; project: string; unit: string; headline: string; summary: string;
  proof: string[]; photo?: string | null; image?: string | null; photoCredit?: string;
  photoSource?: string; photoAlt?: string; location?: string; title?: string; excerpt?: string;
  kind?: "public-source" | "client-approved"; sourceLabel?: string; sourceUrl?: string;
  translations: Record<StoryLanguage, StoryTranslation>;
};

// Public-source editorial notes only. These are not customer testimonials.
// Named customer quotations are intentionally not reproduced without consent and supporting documentation.
const review: Record<StoryLanguage, StoryTranslation> = {
  en: { headline: "A practical place to live, with the trade-offs in view", summary: "A public resident review describes Balaji Empire's locality as helpful and well connected, while also noting traffic and parking pressure. We keep both sides visible." },
  mr: { headline: "राहण्यासाठी सोयीची जागा, आणि वास्तवही स्पष्ट", summary: "सार्वजनिक रहिवासी अभिप्रायात परिसरातील मदतशील वातावरण आणि चांगली जोडणी नमूद आहे; त्याचबरोबर वाहतूक आणि पार्किंगची अडचणही स्पष्ट केली आहे." },
  hi: { headline: "रहने के लिए व्यावहारिक जगह, कमियों के साथ", summary: "एक सार्वजनिक निवासी समीक्षा परिसर को मददगार और अच्छी कनेक्टिविटी वाला बताती है, साथ ही ट्रैफिक और पार्किंग की परेशानी भी दर्ज करती है।" },
  gu: { headline: "રહેવા માટે વ્યવહારુ જગ્યા, સાથે વાસ્તવિકતા પણ", summary: "જાહેર રહેવાસી સમીક્ષામાં વિસ્તારને મદદરૂપ અને સારી કનેક્ટિવિટી ધરાવતો જણાવાયો છે, સાથે ટ્રાફિક અને પાર્કિંગની અડચણ પણ નોંધાઈ છે." },
  bn: { headline: "বাসের জন্য ব্যবহারিক জায়গা, সুবিধা ও সীমাবদ্ধতা দুটোই", summary: "একটি প্রকাশ্য বাসিন্দা পর্যালোচনায় এলাকার সহায়ক পরিবেশ ও যোগাযোগের সুবিধার কথা বলা হয়েছে, পাশাপাশি যানজট ও পার্কিংয়ের চাপও উল্লেখ করা হয়েছে।" },
  ta: { headline: "வாழ்வதற்கு நடைமுறையான இடம், சவால்களும் வெளிப்படையாக", summary: "ஒரு பொது குடியிருப்பாளர் மதிப்புரையில் பகுதி நல்ல இணைப்பும் உதவும் சூழலும் கொண்டதாக கூறப்பட்டுள்ளது; போக்குவரத்து மற்றும் பார்க்கிங் சிக்கல்களும் குறிப்பிடப்பட்டுள்ளன." },
  kn: { headline: "ವಾಸಕ್ಕೆ ಅನುಕೂಲಕರ ಸ್ಥಳ, ಸವಾಲುಗಳನ್ನೂ ಸ್ಪಷ್ಟವಾಗಿ", summary: "ಸಾರ್ವಜನಿಕ ನಿವಾಸಿ ವಿಮರ್ಶೆಯು ಪ್ರದೇಶದ ಉತ್ತಮ ಸಂಪರ್ಕ ಮತ್ತು ಸಹಾಯಕ ವಾತಾವರಣವನ್ನು ಉಲ್ಲೇಖಿಸುತ್ತದೆ; ಟ್ರಾಫಿಕ್ ಮತ್ತು ಪಾರ್ಕಿಂಗ್ ಒತ್ತಡವನ್ನೂ ದಾಖಲಿಸುತ್ತದೆ." },
};
const record: Record<StoryLanguage, StoryTranslation> = {
  en: { headline: "The public record tells a clearer story", summary: "MahaRERA records identify BALAJI EMPIRE as a residential project promoted by AAKAR DEVELOPERS, registered as P52100001661, with a declared completion date of 31 December 2018." },
  mr: { headline: "सार्वजनिक नोंद अधिक स्पष्ट माहिती देते", summary: "MahaRERA नोंदींमध्ये BALAJI EMPIRE हा AAKAR DEVELOPERS यांनी प्रवर्तित केलेला निवासी प्रकल्प म्हणून नोंदलेला आहे. प्रकल्प क्रमांक P52100001661 असून घोषित पूर्णता तारीख 31 डिसेंबर 2018 आहे." },
  hi: { headline: "सार्वजनिक रिकॉर्ड अधिक स्पष्ट तस्वीर देता है", summary: "MahaRERA रिकॉर्ड BALAJI EMPIRE को AAKAR DEVELOPERS द्वारा प्रवर्तित आवासीय परियोजना के रूप में दर्ज करते हैं। इसका पंजीकरण P52100001661 है और घोषित पूर्णता तिथि 31 दिसंबर 2018 है।" },
  gu: { headline: "જાહેર રેકોર્ડ વધુ સ્પષ્ટ માહિતી આપે છે", summary: "MahaRERA રેકોર્ડ BALAJI EMPIRE ને AAKAR DEVELOPERS દ્વારા પ્રમોટ કરાયેલ રહેણાંક પ્રોજેક્ટ તરીકે ઓળખાવે છે. તેનું રજીસ્ટ્રેશન P52100001661 છે અને જાહેર પૂર્ણતા તારીખ 31 ડિસેમ્બર 2018 છે." },
  bn: { headline: "প্রকাশ্য রেকর্ড আরও পরিষ্কার তথ্য দেয়", summary: "MahaRERA রেকর্ডে BALAJI EMPIRE-কে AAKAR DEVELOPERS-এর প্রমোট করা আবাসিক প্রকল্প হিসেবে নথিভুক্ত করা হয়েছে। রেজিস্ট্রেশন P52100001661 এবং ঘোষিত সমাপ্তির তারিখ ৩১ ডিসেম্বর ২০১৮।" },
  ta: { headline: "பொது பதிவு தெளிவான தகவலை வழங்குகிறது", summary: "MahaRERA பதிவுகள் BALAJI EMPIRE திட்டத்தை AAKAR DEVELOPERS முன்னெடுத்த குடியிருப்பு திட்டமாகக் குறிப்பிடுகின்றன. பதிவு எண் P52100001661; அறிவிக்கப்பட்ட நிறைவு தேதி 31 டிசம்பர் 2018." },
  kn: { headline: "ಸಾರ್ವಜನಿಕ ದಾಖಲೆ ಹೆಚ್ಚು ಸ್ಪಷ್ಟವಾದ ಮಾಹಿತಿಯನ್ನು ನೀಡುತ್ತದೆ", summary: "MahaRERA ದಾಖಲೆಗಳು BALAJI EMPIRE ಅನ್ನು AAKAR DEVELOPERS ಪ್ರವರ್ತಿಸಿದ ವಸತಿ ಯೋಜನೆಯಾಗಿ ದಾಖಲಿಸುತ್ತವೆ. ನೋಂದಣಿ ಸಂಖ್ಯೆ P52100001661 ಮತ್ತು ಘೋಷಿತ ಪೂರ್ಣಗೊಳ್ಳುವ ದಿನಾಂಕ 31 ಡಿಸೆಂಬರ್ 2018." },
};
export const stories: Story[] = [
  { slug: "balaji-empire-public-review", name: "Public review synthesis", project: "Balaji Empire", unit: "Vikas Nagar", headline: review.en.headline, summary: review.en.summary, proof: ["Housing.com resident review", "Public project listing"], location: "Vikas Nagar, Dehu Road, Pune, Maharashtra", kind: "public-source", sourceLabel: "Public review synthesis · Housing.com", sourceUrl: "https://housing.com/in/buy/projects/page/117415-aakar-balaji-empire-by-aakar-developers-in-vikas-nagar", translations: review },
  { slug: "balaji-empire-public-record", name: "Public record story", project: "Balaji Empire", unit: "Vikas Nagar", headline: record.en.headline, summary: record.en.summary, proof: ["MahaRERA registration P52100001661", "Promoter AAKAR DEVELOPERS", "Declared completion: 31 December 2018"], location: "Vikas Nagar, Dehu Road, Pune, Maharashtra", kind: "public-source", sourceLabel: "MahaRERA public record", sourceUrl: "https://www.aurumproptech.in/pulse/rera/maharashtra/pune/balaji-empire-P52100001661", translations: record },
];
export function getStory(slug: string): Story | undefined { return stories.find((story) => story.slug === slug); }
