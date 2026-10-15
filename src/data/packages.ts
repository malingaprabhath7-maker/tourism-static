// Tour packages. Edit this file to add or change a tour.
// "image" is optional: tours without a photo show a coloured placeholder until one is added to public/images/.
export type Lang = 'en' | 'si';
export type Kind = 'culture' | 'nature' | 'beach' | 'wildlife' | 'adventure';

export interface Day { en: string; si: string; enText: string; siText: string }
export interface Tour {
  slug: string;
  image?: string;
  imageAlt?: string;
  kind: Kind[];
  region: 'Cultural Triangle' | 'Hill Country' | 'South Coast' | 'West Coast';
  days: number;
  priceUsd: number;
  bestMonths: string;
  map: { lat: number; lon: number };
  en: { title: string; place: string; summary: string; highlights: string[] };
  si: { title: string; place: string; summary: string; highlights: string[] };
  itinerary: Day[];
  includes: { en: string[]; si: string[] };
}

export const LKR_PER_USD = 300; // approximate, shown with a note

export const tours: Tour[] = [
  {
    slug: 'sigiriya-dambulla',
    image: 'images/sigiriya-rock.webp',
    imageAlt: 'The summit ruins of Sigiriya rock above the forest',
    kind: ['culture', 'adventure'],
    region: 'Cultural Triangle',
    days: 2,
    priceUsd: 160,
    bestMonths: 'Jan – Apr, Jul – Sep',
    map: { lat: 7.957, lon: 80.76 },
    en: {
      title: 'Sigiriya & Dambulla',
      place: 'Sigiriya, Matale District',
      summary: 'Climb the Lion Rock fortress, see the cave temples of Dambulla and float over the jungle in a sunrise hot-air balloon.',
      highlights: ['Sigiriya frescoes and the Mirror Wall', 'Dambulla cave temple, a UNESCO site', 'Sunrise hot-air balloon ride', 'Village lunch in Hiriwadunna'],
    },
    si: {
      title: 'සීගිරිය සහ දඹුල්ල',
      place: 'සීගිරිය, මාතලේ දිස්ත්‍රික්කය',
      summary: 'සීගිරි පර්වතය නගින්න, දඹුලු ලෙන් විහාරය බලන්න, හිරු උදාවේ උණුසුම් වායු බැලූනයකින් වනාන්තරය උඩින් පාවෙන්න.',
      highlights: ['සීගිරි බිතුසිතුවම් සහ කැටපත් පවුර', 'දඹුලු ලෙන් විහාරය (UNESCO)', 'හිරු උදාවේ බැලූන් ගමන', 'හිරිවඩුන්නේ ගැමි දිවා ආහාරය'],
    },
    itinerary: [
      { en: 'Dambulla and the village', si: 'දඹුල්ල සහ ගම්මානය', enText: 'Morning at the Dambulla cave temple, lunch with a village family, sunset at Pidurangala.', siText: 'උදේ දඹුලු ලෙන් විහාරය, ගැමි පවුලක් සමඟ දිවා ආහාරය, පිදුරංගල හිරු බැසීම.' },
      { en: 'Balloon and Lion Rock', si: 'බැලූනය සහ සීගිරිය', enText: 'Sunrise balloon flight, then climb Sigiriya before the midday heat.', siText: 'හිරු උදාවේ බැලූන් ගමන, දහවලට කලින් සීගිරිය නැගීම.' },
    ],
    includes: { en: ['1 night in Sigiriya', 'Breakfast and lunch', 'Air-conditioned car with driver', 'Entrance tickets'], si: ['සීගිරියේ එක් රාත්‍රියක්', 'උදේ සහ දිවා ආහාර', 'රියදුරු සහිත වායුසමීකරණ වාහනය', 'ප්‍රවේශ පත්‍ර'] },
  },
  {
    slug: 'kandy-culture',
    image: 'images/temple-tooth-kandy.webp',
    imageAlt: 'Temple of the Sacred Tooth Relic in Kandy',
    kind: ['culture'],
    region: 'Hill Country',
    days: 2,
    priceUsd: 150,
    bestMonths: 'Jan – Apr, Jul – Aug (Perahera)',
    map: { lat: 7.2936, lon: 80.6413 },
    en: {
      title: 'Kandy Temple & Culture',
      place: 'Kandy, Central Province',
      summary: 'Visit the Temple of the Sacred Tooth Relic, the royal gardens of Peradeniya and an evening of Kandyan dance.',
      highlights: ['Temple of the Tooth evening puja', 'Peradeniya Botanical Gardens', 'Kandyan dance show', 'Walk around Kandy Lake'],
    },
    si: {
      title: 'මහනුවර සංස්කෘතික චාරිකාව',
      place: 'මහනුවර, මධ්‍යම පළාත',
      summary: 'දළදා මාළිගාව, පේරාදෙණිය උද්භිද උද්‍යානය සහ උඩරට නැටුම් සංදර්ශනයක් සහිත චාරිකාවක්.',
      highlights: ['දළදා මාළිගාවේ සවස පූජාව', 'පේරාදෙණිය උද්භිද උද්‍යානය', 'උඩරට නැටුම් සංදර්ශනය', 'නුවර වැව වටා ඇවිදීම'],
    },
    itinerary: [
      { en: 'The last royal capital', si: 'අවසන් රාජධානිය', enText: 'Arrive in Kandy, lakeside walk, Kandyan dance and the evening puja at the Temple of the Tooth.', siText: 'මහනුවරට පැමිණීම, වැව අසල ඇවිදීම, නැටුම් සංදර්ශනය සහ දළදා මාළිගාවේ සවස පූජාව.' },
      { en: 'Gardens and spice', si: 'උද්‍යාන සහ කුළුබඩු', enText: 'Peradeniya Botanical Gardens and a Matale spice garden on the way back.', siText: 'පේරාදෙණිය උද්භිද උද්‍යානය සහ ආපසු එන අතර මාතලේ කුළුබඩු වත්තක්.' },
    ],
    includes: { en: ['1 night in Kandy', 'Breakfast', 'Car with driver', 'Dance show ticket'], si: ['මහනුවර එක් රාත්‍රියක්', 'උදේ ආහාරය', 'රියදුරු සහිත වාහනය', 'නැටුම් සංදර්ශන ප්‍රවේශ පත්‍රය'] },
  },
  {
    slug: 'ella-hill-country',
    image: 'images/zipline-ella.webp',
    imageAlt: 'Zipline rider over a green valley in Ella',
    kind: ['nature', 'adventure'],
    region: 'Hill Country',
    days: 3,
    priceUsd: 210,
    bestMonths: 'Jan – Apr',
    map: { lat: 6.8667, lon: 81.0466 },
    en: {
      title: 'Ella Hill Country Escape',
      place: 'Ella, Badulla District',
      summary: 'Walk the Nine Arch Bridge, hike Little Adam’s Peak, fly over the valley on a zipline and cool off at Ravana Falls.',
      highlights: ['Nine Arch Bridge', 'Little Adam’s Peak sunrise hike', 'Flying Ravana zipline', 'Ravana Falls'],
    },
    si: {
      title: 'ඇල්ල කඳුකර චාරිකාව',
      place: 'ඇල්ල, බදුල්ල දිස්ත්‍රික්කය',
      summary: 'නවආරුක්කු පාලම, පුංචි ශ්‍රීපාදය, zipline ගමනක් සහ රාවණා ඇල්ල සහිත කඳුකර චාරිකාවක්.',
      highlights: ['නවආරුක්කු පාලම', 'පුංචි ශ්‍රීපාද හිරු උදාව', 'Flying Ravana zipline', 'රාවණා ඇල්ල'],
    },
    itinerary: [
      { en: 'Into the hills', si: 'කඳුකරයට', enText: 'Arrive in Ella, café afternoon and the Nine Arch Bridge as the train passes.', siText: 'ඇල්ලට පැමිණීම සහ දුම්රිය ගමන් කරන විට නවආරුක්කු පාලම.' },
      { en: 'Peaks and zipline', si: 'කඳු මුදුන් සහ zipline', enText: 'Sunrise on Little Adam’s Peak, then the Flying Ravana zipline.', siText: 'පුංචි ශ්‍රීපාදයේ හිරු උදාව, ඉන්පසු zipline ගමන.' },
      { en: 'Waterfalls', si: 'දිය ඇලි', enText: 'Ravana Falls and Ella Rock for the energetic, then depart.', siText: 'රාවණා ඇල්ල සහ ඇල්ල ගල, ඉන්පසු පිටත්වීම.' },
    ],
    includes: { en: ['2 nights in Ella', 'Breakfast', 'Zipline ticket', 'Local guide for hikes'], si: ['ඇල්ලේ රාත්‍රී දෙකක්', 'උදේ ආහාරය', 'Zipline ප්‍රවේශ පත්‍රය', 'කඳු නැගීම සඳහා මාර්ගෝපදේශකයෙක්'] },
  },
  {
    slug: 'kandy-ella-train',
    image: 'images/nine-arch-ella.webp',
    imageAlt: 'Blue train crossing the Nine Arch Bridge in Ella',
    kind: ['nature'],
    region: 'Hill Country',
    days: 1,
    priceUsd: 90,
    bestMonths: 'All year',
    map: { lat: 6.9497, lon: 80.7891 },
    en: {
      title: 'Kandy to Ella Scenic Train',
      place: 'Central Highlands',
      summary: 'One of the most beautiful train rides in the world, through tea estates, tunnels and waterfalls, with reserved seats.',
      highlights: ['Reserved observation-car seats', 'Tea estates and misty valleys', 'Demodara loop and tunnels', 'Pickup at the Ella end'],
    },
    si: {
      title: 'මහනුවර සිට ඇල්ල දුම්රිය ගමන',
      place: 'මධ්‍යම කඳුකරය',
      summary: 'තේ වතු, උමං සහ දිය ඇලි හරහා ලොව ලස්සනම දුම්රිය ගමනක් — වෙන් කළ ආසන සමඟ.',
      highlights: ['වෙන් කළ නිරීක්ෂණ මැදිරි ආසන', 'තේ වතු සහ මීදුම් නිම්න', 'දෙමෝදර වටරවුම සහ උමං', 'ඇල්ලේදී පිළිගැනීම'],
    },
    itinerary: [
      { en: 'All aboard', si: 'දුම්රියට', enText: 'Morning train from Kandy, about seven hours through the hills, met at Ella station.', siText: 'මහනුවරින් උදේ දුම්රිය, පැය හතක පමණ ගමන, ඇල්ල දුම්රියපොළේදී පිළිගැනීම.' },
    ],
    includes: { en: ['Reserved train ticket', 'Station transfers', 'Packed lunch'], si: ['වෙන් කළ දුම්රිය ප්‍රවේශ පත්‍රය', 'දුම්රියපොළ ප්‍රවාහනය', 'දිවා ආහාර පැකට්ටුව'] },
  },
  {
    slug: 'nuwara-eliya-tea',
    image: 'images/tea-nuwara-eliya.webp',
    imageAlt: 'Misty tea estate path in the hill country',
    kind: ['nature'],
    region: 'Hill Country',
    days: 2,
    priceUsd: 190,
    bestMonths: 'Feb – Apr',
    map: { lat: 6.9497, lon: 80.7891 },
    en: {
      title: 'Nuwara Eliya Tea Trails',
      place: 'Nuwara Eliya, Central Province',
      summary: 'Walk through emerald tea estates, learn how Ceylon tea is made and spend a cool evening in “Little England”.',
      highlights: ['Tea factory tour and tasting', 'Walk with tea pluckers', 'Gregory Lake', 'Horton Plains option'],
    },
    si: {
      title: 'නුවරඑළිය තේ වතු චාරිකාව',
      place: 'නුවරඑළිය, මධ්‍යම පළාත',
      summary: 'කොළ පැහැ තේ වතු හරහා ඇවිදින්න, ලංකා තේ හදන හැටි ඉගෙනගන්න, සීතල “පුංචි එංගලන්තයේ” සවසක් ගත කරන්න.',
      highlights: ['තේ කර්මාන්තශාලාව සහ රස බැලීම', 'තේ දළු නෙළන්නන් සමඟ ඇවිදීම', 'ග්‍රෙගරි වැව', 'හෝර්ටන් තැන්න (විකල්ප)'],
    },
    itinerary: [
      { en: 'Tea country', si: 'තේ රට', enText: 'Drive up through Ramboda Falls, tea factory tour and tasting, evening at Gregory Lake.', siText: 'රම්බොඩ ඇල්ල හරහා නැගීම, තේ කර්මාන්තශාලාව, ග්‍රෙගරි වැවේ සවස.' },
      { en: 'Plains or town', si: 'තැන්න හෝ නගරය', enText: 'Early Horton Plains walk to World’s End, or a slow morning in town.', siText: 'උදෑසන හෝර්ටන් තැන්නේ ලෝකාන්තය දක්වා ඇවිදීම, නැතහොත් නගරයේ සන්සුන් උදෑසනක්.' },
    ],
    includes: { en: ['1 night in a colonial bungalow', 'Breakfast and dinner', 'Car with driver', 'Tea factory visit'], si: ['යටත් විජිත නිවසක එක් රාත්‍රියක්', 'උදේ සහ රාත්‍රී ආහාර', 'රියදුරු සහිත වාහනය', 'තේ කර්මාන්තශාලා චාරිකාව'] },
  },
  {
    slug: 'yala-safari',
    image: 'images/elephant-yala.webp',
    imageAlt: 'Wild elephant in the forest',
    kind: ['wildlife'],
    region: 'South Coast',
    days: 2,
    priceUsd: 260,
    bestMonths: 'Feb – Jul',
    map: { lat: 6.3729, lon: 81.5165 },
    en: {
      title: 'Yala Safari',
      place: 'Yala National Park, Hambantota District',
      summary: 'Two jeep safaris in the park with one of the world’s highest densities of leopards, plus elephants, crocodiles and birds.',
      highlights: ['Morning and afternoon jeep safaris', 'Leopards, elephants, sloth bears', 'Lagoon birdlife', 'Camp-style lodge'],
    },
    si: {
      title: 'යාල වනජීවී සෆාරිය',
      place: 'යාල ජාතික වනෝද්‍යානය, හම්බන්තොට',
      summary: 'කොටියන් වැඩිම ප්‍රමාණයක් ඉන්න වනෝද්‍යානවලින් එකක ජීප් සෆාරි දෙකක් — අලි, කිඹුලන් සහ කුරුල්ලන් සමඟ.',
      highlights: ['උදේ සහ සවස ජීප් සෆාරි', 'කොටි, අලි, වලසුන්', 'කලපු කුරුලු ජීවිතය', 'කඳවුරු ශෛලියේ නවාතැන'],
    },
    itinerary: [
      { en: 'Afternoon game drive', si: 'සවස සෆාරිය', enText: 'Arrive in Tissamaharama, afternoon safari until sunset.', siText: 'තිස්සමහාරාමයට පැමිණීම, හිරු බසින තුරු සවස සෆාරිය.' },
      { en: 'Dawn in the park', si: 'උදෑසන වනයේ', enText: 'Early-morning safari when leopards are most active, breakfast in the park.', siText: 'කොටියන් වැඩියෙන් සැරිසරන උදෑසන සෆාරිය, වනයේ උදේ ආහාරය.' },
    ],
    includes: { en: ['1 night lodge', 'All meals', 'Two jeep safaris with tracker', 'Park fees'], si: ['නවාතැනේ එක් රාත්‍රියක්', 'සියලු ආහාර', 'ජීප් සෆාරි දෙකක්', 'වනෝද්‍යාන ගාස්තු'] },
  },
  {
    slug: 'mirissa-whales',
    image: 'images/beach-south.webp',
    imageAlt: 'Golden beach at sunset on the south coast',
    kind: ['beach', 'wildlife'],
    region: 'South Coast',
    days: 2,
    priceUsd: 180,
    bestMonths: 'Nov – Apr',
    map: { lat: 5.9483, lon: 80.4716 },
    en: {
      title: 'Mirissa Beach & Whales',
      place: 'Mirissa, Matara District',
      summary: 'Golden beaches, Coconut Tree Hill at sunset and a morning boat trip to see blue whales and dolphins.',
      highlights: ['Blue whale watching', 'Coconut Tree Hill', 'Secret Beach', 'Seafood dinner on the sand'],
    },
    si: {
      title: 'මිරිස්ස වෙරළ සහ තල්මසුන්',
      place: 'මිරිස්ස, මාතර දිස්ත්‍රික්කය',
      summary: 'රන්වන් වෙරළ, පොල් ගස් කන්දේ හිරු බැසීම සහ නිල් තල්මසුන් සහ ඩොල්ෆින් බලන්න උදෑසන බෝට්ටු ගමනක්.',
      highlights: ['නිල් තල්මසුන් නැරඹීම', 'පොල් ගස් කන්ද', 'රහස් වෙරළ', 'වැල්ල මත මුහුදු ආහාර රාත්‍රී භෝජනය'],
    },
    itinerary: [
      { en: 'Beach day', si: 'වෙරළ දිනය', enText: 'Check in by the beach, Secret Beach swim, sunset at Coconut Tree Hill.', siText: 'වෙරළ අසල නවාතැන, රහස් වෙරළේ පිහිනීම, පොල් ගස් කන්දේ හිරු බැසීම.' },
      { en: 'Whales at sea', si: 'මුහුදේ තල්මසුන්', enText: 'Dawn whale-watching cruise, back for lunch and a lazy afternoon.', siText: 'උදෑසන තල්මසුන් නැරඹීමේ ගමන, දිවා ආහාරයට ආපසු.' },
    ],
    includes: { en: ['1 night beach hotel', 'Breakfast', 'Whale-watching cruise', 'Transfers'], si: ['වෙරළ හෝටලයේ එක් රාත්‍රියක්', 'උදේ ආහාරය', 'තල්මසුන් නැරඹීමේ ගමන', 'ප්‍රවාහනය'] },
  },
  {
    slug: 'galle-fort',
    image: 'images/galle-fort-aerial.webp',
    imageAlt: 'Aerial view of Galle Fort and the ocean',
    kind: ['culture', 'beach'],
    region: 'South Coast',
    days: 2,
    priceUsd: 170,
    bestMonths: 'Nov – Apr',
    map: { lat: 6.0269, lon: 80.217 },
    en: {
      title: 'Galle Fort & Unawatuna',
      place: 'Galle, Southern Province',
      summary: 'Wander the ramparts of the 17th-century Galle Fort, then swim and snorkel in the calm bay at Unawatuna.',
      highlights: ['Galle Fort ramparts at sunset', 'Lighthouse and old streets', 'Snorkelling at Unawatuna', 'Japanese Peace Pagoda'],
    },
    si: {
      title: 'ගාලු කොටුව සහ උණවටුන',
      place: 'ගාල්ල, දකුණු පළාත',
      summary: '17 වන සියවසේ ගාලු කොටුවේ ප්‍රාකාර දිගේ ඇවිදින්න, උණවටුන සන්සුන් බොක්කේ පිහිනන්න.',
      highlights: ['ගාලු කොටු ප්‍රාකාරයේ හිරු බැසීම', 'ප්‍රදීපාගාරය සහ පැරණි වීදි', 'උණවටුන snorkelling', 'ජපන් සාම චෛත්‍යය'],
    },
    itinerary: [
      { en: 'Inside the fort', si: 'කොටුව ඇතුළත', enText: 'Guided walk through the fort’s streets, museums and cafés, sunset on the ramparts.', siText: 'කොටුවේ වීදි, කෞතුකාගාර සහ කැෆේ හරහා ඇවිදීම, ප්‍රාකාරයේ හිරු බැසීම.' },
      { en: 'Bay and pagoda', si: 'බොක්ක සහ චෛත්‍යය', enText: 'Snorkelling in Unawatuna, then the Peace Pagoda viewpoint.', siText: 'උණවටුනේ snorkelling, ඉන්පසු සාම චෛත්‍ය දර්ශන ස්ථානය.' },
    ],
    includes: { en: ['1 night in Galle', 'Breakfast', 'Fort walking guide', 'Snorkel gear'], si: ['ගාල්ලේ එක් රාත්‍රියක්', 'උදේ ආහාරය', 'කොටුවේ මාර්ගෝපදේශකයා', 'Snorkel උපකරණ'] },
  },
  {
    slug: 'madu-river-bentota',
    image: 'images/kayak-madu.webp',
    imageAlt: 'Kayaking through mangroves',
    kind: ['nature', 'beach', 'adventure'],
    region: 'West Coast',
    days: 2,
    priceUsd: 140,
    bestMonths: 'Nov – Apr',
    map: { lat: 6.2847, lon: 80.0436 },
    en: {
      title: 'Madu River & Bentota',
      place: 'Balapitiya and Bentota',
      summary: 'Paddle through the mangrove channels of the Madu River, visit a cinnamon island and finish on the long Bentota beach.',
      highlights: ['Mangrove kayaking', 'Cinnamon island visit', 'Turtle hatchery', 'Bentota beach'],
    },
    si: {
      title: 'මාදු ගඟ සහ බෙන්තොට',
      place: 'බලපිටිය සහ බෙන්තොට',
      summary: 'මාදු ගඟේ කඩොලාන අතරින් kayak ගමනක්, කුරුඳු දූපතක් සහ බෙන්තොට දිගු වෙරළ.',
      highlights: ['කඩොලාන kayak ගමන', 'කුරුඳු දූපත', 'කැස්බෑ තවාන', 'බෙන්තොට වෙරළ'],
    },
    itinerary: [
      { en: 'River day', si: 'ගං දිනය', enText: 'Morning kayak in the mangroves, cinnamon island and a riverside lunch.', siText: 'කඩොලාන අතර උදේ kayak ගමන, කුරුඳු දූපත සහ ගං ඉවුරේ දිවා ආහාරය.' },
      { en: 'Beach and turtles', si: 'වෙරළ සහ කැස්බෑවන්', enText: 'Turtle hatchery visit and a free afternoon on Bentota beach.', siText: 'කැස්බෑ තවාන සහ බෙන්තොට වෙරළේ නිදහස් සවස.' },
    ],
    includes: { en: ['1 night beach hotel', 'Breakfast', 'Kayak and guide', 'Hatchery entrance'], si: ['වෙරළ හෝටලයේ එක් රාත්‍රියක්', 'උදේ ආහාරය', 'Kayak සහ මාර්ගෝපදේශකයා', 'තවාන් ප්‍රවේශය'] },
  },
  {
    slug: 'colombo-city',
    image: 'images/colombo-night.webp',
    imageAlt: 'Colombo skyline lit up at night',
    kind: ['culture'],
    region: 'West Coast',
    days: 1,
    priceUsd: 70,
    bestMonths: 'All year',
    map: { lat: 6.9271, lon: 79.8612 },
    en: {
      title: 'Colombo City Highlights',
      place: 'Colombo, Western Province',
      summary: 'A day in the capital: Gangaramaya Temple, the Pettah bazaar, the Lotus Tower and sunset on Galle Face Green.',
      highlights: ['Gangaramaya Temple', 'Pettah market by tuk-tuk', 'Lotus Tower view', 'Street food on Galle Face Green'],
    },
    si: {
      title: 'කොළඹ නගර චාරිකාව',
      place: 'කොළඹ, බස්නාහිර පළාත',
      summary: 'අගනුවර දවසක්: ගංගාරාමය, පිටකොටුව වෙළඳපොළ, නෙළුම් කුළුණ සහ ගාලු මුවදොර හිරු බැසීම.',
      highlights: ['ගංගාරාම විහාරය', 'ත්‍රීරෝද රථයෙන් පිටකොටුව', 'නෙළුම් කුළුණේ දර්ශනය', 'ගාලු මුවදොර වීදි ආහාර'],
    },
    itinerary: [
      { en: 'City in a day', si: 'දිනකින් නගරය', enText: 'Temple in the morning, tuk-tuk through Pettah, Lotus Tower in the afternoon, Galle Face at sunset.', siText: 'උදේ විහාරය, ත්‍රීරෝද රථයෙන් පිටකොටුව, සවස නෙළුම් කුළුණ, හිරු බසින විට ගාලු මුවදොර.' },
    ],
    includes: { en: ['Guide and tuk-tuk', 'Lotus Tower ticket', 'Street-food tasting'], si: ['මාර්ගෝපදේශකයා සහ ත්‍රීරෝද රථය', 'නෙළුම් කුළුණ ප්‍රවේශ පත්‍රය', 'වීදි ආහාර රස බැලීම'] },
  },
];

export const kinds: Record<Kind, { en: string; si: string }> = {
  culture: { en: 'Culture', si: 'සංස්කෘතිය' },
  nature: { en: 'Nature', si: 'සොබාදහම' },
  beach: { en: 'Beach', si: 'වෙරළ' },
  wildlife: { en: 'Wildlife', si: 'වනජීවී' },
  adventure: { en: 'Adventure', si: 'ත්‍රාසජනක' },
};
export const regions = { 'Cultural Triangle': 'සංස්කෘතික ත්‍රිකෝණය', 'Hill Country': 'කඳුකරය', 'South Coast': 'දකුණු වෙරළ', 'West Coast': 'බටහිර වෙරළ' } as const;
