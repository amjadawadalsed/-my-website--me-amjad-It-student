/* ===== js/i18n.js ===== */
// ترجمات اللعبة: العربية، الإنجليزية، الفرنسية، الإسبانية
// لإضافة نص جديد: ضع المفتاح نفسه في اللغات الأربع، ثم استخدم t('المفتاح')
const LANG_ORDER = ['ar', 'en', 'fr', 'es'];

const I18N = {
  ar: {
    name: 'العربية', dir: 'rtl',
    play: 'ابدأ', shop: 'المتجر', levels: 'المستويات', back: 'رجوع',
    subtitle: "مغامرة مشمش",
    tagline: 'اجمع الجبن وتجنّب القنابل',
    score: 'النقاط', coins: 'العملات', select: 'اختيار', selected: 'مختار',
    need: 'ينقصك', win: 'أحسنت!', lose: 'حاول مرة أخرى',
    retry: 'إعادة', next: 'التالي', menu: 'القائمة', earned: 'عملات مكتسبة',
    cat0: 'مشمش', cat1: 'سموكي', cat2: 'شادو', cat3: 'سنو', cat4: 'الملك',
    paused: 'متوقفة مؤقتاً', resume: 'استمرار',
    story1: "في زاوية صغيرة من هذه المدينة الكبيرة... بدأت حكاية غير عادية.",
    story2: "اسمي مشمش! أنا قط شوارع صغير، لكن لدي أحلام كبيرة...",
    story3: "وفجأة لمعت جبنة ذهبية... وأنا أحب الجبن أكثر من أي شيء!",
    story4: "لكن الحصول عليها ليس سهلاً... فالخطر يتربص في كل مكان!",
    story5: "وفجأة انفتحت بوابة إلى عوالم مدهشة... فلنبدأ المغامرة!",
    skip: "تخطي",
    tap: "المس للمتابعة",
    story: "القصة",
    drag: 'اسحب إصبعك لتحريك القط',
    dailyBtn: 'المهام', dailyReward: 'المكافأة اليومية', dailyMissions: 'المهام اليومية', claim: 'استلم', claimed: 'تم الاستلام', day: 'يوم',
    m_cheese: 'اجمع {n} جبنة', m_mice: 'امسك {n} فئران', m_score: 'اجمع {n} نقطة في مستوى واحد', m_plays: 'أكمل {n} مستويات', m_clean: 'أنهِ مستوى بلا قنابل', m_combo: 'حقق كومبو {n}',
    lv0: 'الليل', lv1: 'الصحراء', lv2: 'البحر', lv3: 'الثلج', lv4: 'الفضاء',
    dailyDeal: 'عرض اليوم', bundleAll: 'حزمة كل القطط',
    tier0: 'كلاسيكي', tier1: 'مميز', tier2: 'نادر', tier3: 'أسطوري', tier4: 'ملكي',
    perk0: 'القطة الأساسية', perk1: 'بريق فضي', perk_aura: 'هالة متوهجة', perk_coins: '+{n}% عملات',
    catBonus: 'مكافأة القط', tapCat: 'المس القط',
    offersBtn: 'العروض', offersTitle: 'عروض ومجموعات خاصة', limitedTime: 'ينتهي خلال',
    bundleStarter: 'مجموعة الانطلاق', bundleElite: 'مجموعة الملوك', saveCoins: 'وفّر {n}',
    allOwned: 'تم امتلاك جميع القطط!', close: 'إغلاق',
    loginStreak: 'سلسلة الدخول', comeBackTomorrow: 'عد غداً لمواصلة السلسلة!',
    settings: 'الإعدادات', audioSettings: 'إعدادات الصوت', masterAudio: 'جميع الأصوات',
    musicLabel: 'الموسيقى', sfxLabel: 'المؤثرات الصوتية', on: 'مفعّل', off: 'صامت',
    achievements: 'الإنجازات', equip: 'تجهيز', equipped: 'مُجهّز', rewardSkin: 'مظهر', rewardBadge: 'شارة',
    ach_cheese_hoarder: 'اجمع {n} جبنة إجمالاً', ach_mouse_master: 'امسك {n} فأراً إجمالاً',
    ach_combo_legend: 'حقق كومبو {n} في جولة', ach_untouchable: 'أنهِ {n} جولات بلا قنابل',
    ach_world_conqueror: 'اجمع {n} نجمة في العوالم',
    skin_neon: 'مظهر النيون', skin_flame: 'مظهر اللهب', skin_cosmic: 'المظهر الكوني',
    badge_cheese: 'شارة الجبن الذهبي', badge_shield: 'شارة الدرع', badge_crown: 'شارة التاج الملكي',
    tutTitle: 'دليل المغامرة', tutGreat: 'أحسنت!', tutTapTry: 'المس العناصر للتجربة',
    tutDragTitle: 'حرّك قطك بالسحب', tutDragDesc: 'اسحب إصبعك يميناً ويساراً هنا لتجربة التحريك السريع.',
    tutCatchTitle: 'التقط الجبن والفئران', tutCatchDesc: 'الجبنة تمنح +1، والفأر السريع يمنح +5 وقفزة عالية!',
    tutBombTitle: 'احذر من القنابل!', tutBombDesc: 'لديك 3 قلوب؛ لمس القنبلة ينقص قلباً ويصفّر الكومبو.',
    tutWinTitle: 'ضاعف نقاطك بالنجوم', tutWinDesc: 'اجمع كومبو 8+ (x2) و16+ (x3) لتحقق 3 نجوم وتفتح كل العوالم!',
    leaderboard: 'لوحة المتصدرين', allWorlds: 'الكل', bestScore: 'أفضل نتيجة', newRecord: 'رقم قياسي جديد!',
    rank: 'الترتيب', player: 'اللاعب', editName: 'الاسم', enterName: 'اسم اللاعب',
    saveLabel: 'حفظ', noScores: 'العب جولة لتسجيل أول نتيجة في الصدارة!', clearScores: 'مسح', confirmClear: 'تأكيد المسح؟', newTag: 'جديد',
    challengesTab: 'التحديات', dailyChallenges: 'التحديات اليومية المؤقتة', endsIn: 'ينتهي خلال', reroll: 'تبديل',
    chalChest: 'صندوق التحديات الكبرى', chalChestDesc: 'أكمل التحديات الـ 3 قبل انتهاء الوقت',
    chalTier0: 'عادي', chalTier1: 'صعب', chalTier2: 'خارق',
    c_cheese: 'تحدي الجبن: اجمع {n} جبنة', c_mice: 'صائد الفئران: امسك {n} فئران',
    c_score: 'اندفاع النقاط: سجّل {n} في جولة', c_combo: 'موجة الكومبو: حقق كومبو {n}',
    c_clean: 'القط الحذر: أنهِ {n} جولات بلا قنابل', c_plays: 'ماراثون القط: أكمل {n} جولات',
    streakMult: 'مضاعف السلسلة', nextBonus: 'غداً', maxMult: 'الحد الأقصى!',
    worldMapTitle: 'خريطة العوالم الخمسة', worldsUnlocked: 'العوالم المفتوحة', totalStarsLabel: 'النجوم',
    unlockReq: 'أكمل عالم {w} بنجمة واحدة لفتحه', worldDone: 'مكتمل', worldReady: 'متاح للعب', worldLocked: 'مقفل',
    skinsBtn: 'المظاهر', skinStore: 'متجر مظاهر مشمش',
    skin_classic: 'مشمش الأصلي', skin_golden: 'الجبن الذهبي', skin_emerald: 'النعناع الأخضر',
    skin_berry: 'توت وردي', skin_frost: 'الجليد السماوي', skin_royal: 'الغروب الملكي',
    pu_shield: 'درع الحماية', pu_magnet: 'مغناطيس الجبن', pu_boost: 'نقاط مضاعفة x2', pu_blocked: 'تم صد القنبلة!',
    rankBtn: 'الصدارة', mazeBtn: 'المتاهة',
    tipReward: 'مكافأتك اليومية بانتظارك في المهام! 🎁',
    tips: [
      'ادخل المتاهة وأنقذ القطط المحبوسة بالمفاتيح! 🔑',
      'اجمع كومبو 8+ لمضاعفة النقاط x2 و16+ لـ x3! 🔥',
      'درع الحماية يصد القنابل ويحفظ الكومبو! 🛡️',
      'جرب مظاهر مشمش الجديدة في المتجر! ✨',
    ],
    rushWave: '⚡ موجة الحماس! +1 إضافي',
    mazeBest: 'أفضل نتيجة',
    mazeNeedCats: 'أنقذ كل القطط أولاً! 😺',
    mazeNeedCheese: 'اجمع {n} جبنة إضافية لفتح الباب! 🧀',
    mazeLockedHint: 'المخرج مغلق! أكمل المهام أولاً 🔒',
    mazeExitOpen: '🚪 فُتح المخرج! انطلق إلى العلم!',
    mazeTimeUp: 'انتهى الوقت!',
    mazeSwipeHint: 'اسحب أو استخدم الأسهم للتحرك في الممرات',
    mazeShield: 'درع المتاهة 🛡️', mazeTurbo: 'اندفاع خاطف ⚡',
    mazeNeedKey: 'تحتاج مفتاحاً! 🔑',
    mazeRescued: 'تم إنقاذ قطة! +100 💖',
    chooseLang: 'اختر لغتك',
    modeClassic: 'الكلاسيكي', modeEndless: 'لا نهائي', modeMaze: 'المتاهة',
    endlessDesc: 'صعوبة متصاعدة بلا توقف!\nتسقط قلوب نادرة (قلب/دقيقة، بحد أقصى 3 ♥)',
    endlessTime: 'مدة الصمود', waveLabel: 'موجة', heartGain: '+1 قلب ♥',
    doubleCoinsAd: 'x2 عملات (إعلان)', freeCoinsAd: '+100 مجاناً',
  },
  en: {
    name: 'English', dir: 'ltr',
    play: 'Start', shop: 'Shop', levels: 'Levels', back: 'Back',
    subtitle: "Mishmish's Adventure",
    tagline: 'Catch the cheese, dodge the bombs',
    score: 'Score', coins: 'Coins', select: 'Select', selected: 'Selected',
    need: 'Need', win: 'Well done!', lose: 'Try again',
    retry: 'Retry', next: 'Next', menu: 'Menu', earned: 'coins earned',
    cat0: 'Mishmish', cat1: 'Smokey', cat2: 'Shadow', cat3: 'Snow', cat4: 'King',
    paused: 'Paused', resume: 'Resume',
    story1: "In a tiny corner of this big city... an extraordinary story began.",
    story2: "My name is Mishmish! I'm a little street cat, but I have big dreams...",
    story3: "Suddenly a golden cheese gleamed... and I love cheese more than anything!",
    story4: "But getting it won't be easy... danger lurks everywhere!",
    story5: "Then a portal opened to amazing worlds... let the adventure begin!",
    skip: "Skip",
    tap: "Tap to continue",
    story: "Story",
    drag: 'Drag to move the cat',
    dailyBtn: 'Missions', dailyReward: 'Daily Reward', dailyMissions: 'Daily Missions', claim: 'Claim', claimed: 'Claimed', day: 'Day',
    m_cheese: 'Collect {n} cheese', m_mice: 'Catch {n} mice', m_score: 'Score {n} in one level', m_plays: 'Finish {n} levels', m_clean: 'Finish a level without bombs', m_combo: 'Reach a {n} combo',
    lv0: 'Night', lv1: 'Desert', lv2: 'Sea', lv3: 'Snow', lv4: 'Space',
    dailyDeal: 'Daily Deal', bundleAll: 'All Cats Bundle',
    tier0: 'Classic', tier1: 'Special', tier2: 'Rare', tier3: 'Epic', tier4: 'Royal',
    perk0: 'Starter hero', perk1: 'Silver shimmer', perk_aura: 'Glowing aura', perk_coins: '+{n}% coins',
    catBonus: 'Cat bonus', tapCat: 'Tap cat',
    offersBtn: 'Offers', offersTitle: 'Deals & Bundles', limitedTime: 'Ends in',
    bundleStarter: 'Starter Duo', bundleElite: 'Royal Elite Pack', saveCoins: 'Save {n}',
    allOwned: 'All cats unlocked!', close: 'Close',
    loginStreak: 'Login Streak', comeBackTomorrow: 'Come back tomorrow to keep your streak!',
    settings: 'Settings', audioSettings: 'Audio Settings', masterAudio: 'All Audio',
    musicLabel: 'Music', sfxLabel: 'Sound Effects', on: 'ON', off: 'OFF',
    achievements: 'Achievements', equip: 'Equip', equipped: 'Equipped', rewardSkin: 'Skin', rewardBadge: 'Badge',
    ach_cheese_hoarder: 'Collect {n} total cheese', ach_mouse_master: 'Catch {n} total mice',
    ach_combo_legend: 'Reach a {n} combo', ach_untouchable: 'Finish {n} clean levels',
    ach_world_conqueror: 'Earn {n} world stars',
    skin_neon: 'Neon Skin', skin_flame: 'Blaze Skin', skin_cosmic: 'Cosmic Skin',
    badge_cheese: 'Golden Cheese Badge', badge_shield: 'Guardian Badge', badge_crown: 'Royal Crown Badge',
    tutTitle: 'How to Play', tutGreat: 'Awesome!', tutTapTry: 'Tap the items to try',
    tutDragTitle: 'Drag to Move', tutDragDesc: 'Slide your finger left and right here to practice moving your cat.',
    tutCatchTitle: 'Catch Cheese & Mice', tutCatchDesc: 'Cheese gives +1 point, and speedy mice grant +5 & a big hop!',
    tutBombTitle: 'Dodge the Bombs!', tutBombDesc: 'You have 3 hearts. Hitting a bomb costs 1 heart and resets your combo.',
    tutWinTitle: 'Combo & 3 Stars', tutWinDesc: 'Build 8+ (x2) and 16+ (x3) combos to earn 3 stars and unlock worlds!',
    leaderboard: 'Leaderboard', allWorlds: 'All', bestScore: 'Best', newRecord: 'New Best!',
    rank: 'Rank', player: 'Player', editName: 'Name', enterName: 'Player Name',
    saveLabel: 'Save', noScores: 'Play a round to claim the #1 spot!', clearScores: 'Reset', confirmClear: 'Confirm reset?', newTag: 'NEW',
    challengesTab: 'Challenges', dailyChallenges: 'Timed Daily Challenges', endsIn: 'Resets in', reroll: 'Shuffle',
    chalChest: 'Grand Challenge Chest', chalChestDesc: 'Finish all 3 challenges before time runs out',
    chalTier0: 'Normal', chalTier1: 'Hard', chalTier2: 'Epic',
    c_cheese: 'Cheese Rush: Collect {n} cheese', c_mice: 'Mouse Blitz: Catch {n} mice',
    c_score: 'Score Surge: Score {n} in 1 round', c_combo: 'Combo Streak: Reach {n} combo',
    c_clean: 'No-Bomb Run: Finish {n} clean rounds', c_plays: 'Cat Marathon: Finish {n} rounds',
    streakMult: 'Streak Bonus', nextBonus: 'Tomorrow', maxMult: 'MAX!',
    worldMapTitle: 'Five Worlds Map', worldsUnlocked: 'Worlds Open', totalStarsLabel: 'Stars',
    unlockReq: 'Earn 1 star in {w} to unlock', worldDone: 'Completed', worldReady: 'Unlocked', worldLocked: 'Locked',
    skinsBtn: 'Skins', skinStore: "Mishmish's Skin Store",
    skin_classic: 'Classic Mishmish', skin_golden: 'Golden Cheese', skin_emerald: 'Emerald Mint',
    skin_berry: 'Berry Fizz', skin_frost: 'Arctic Frost', skin_royal: 'Royal Sunset',
    pu_shield: 'Invincibility Shield', pu_magnet: 'Cheese Magnet', pu_boost: 'Double Score x2', pu_blocked: 'Shield Block!',
    rankBtn: 'Ranking', mazeBtn: 'Maze',
    tipReward: 'Your daily reward is waiting in Missions! 🎁',
    tips: [
      'Enter the Maze and rescue caged cats with golden keys! 🔑',
      'Build 8+ combo for x2 points and 16+ for x3! 🔥',
      'The Shield blocks bombs and saves your combo! 🛡️',
      'Try new skins for Mishmish in the Skin Store! ✨',
    ],
    rushWave: '⚡ Fever Rush! +1 Bonus',
    mazeBest: 'Best Score',
    mazeNeedCats: 'Rescue all cats first! 😺',
    mazeNeedCheese: 'Need {n} more cheese to open exit! 🧀',
    mazeLockedHint: 'Exit locked! Complete tasks first 🔒',
    mazeExitOpen: '🚪 Exit Unlocked! Rush to the flag!',
    mazeTimeUp: 'Time Up!',
    mazeSwipeHint: 'Swipe or use Arrow keys to navigate',
    mazeShield: 'Maze Shield 🛡️', mazeTurbo: 'Turbo Dash ⚡',
    mazeNeedKey: 'Need a Key! 🔑',
    mazeRescued: 'Cat Rescued! +100 💖',
    chooseLang: 'Choose Language',
    modeClassic: 'Classic', modeEndless: 'Endless', modeMaze: 'Maze',
    endlessDesc: 'Non-stop escalating difficulty!\nRare heart drops (~1/min, max 3 ♥)',
    endlessTime: 'Survived', waveLabel: 'Wave', heartGain: '+1 Heart ♥',
    doubleCoinsAd: '2x Coins (Ad)', freeCoinsAd: '+100 Free',
  },
  fr: {
    name: 'Français', dir: 'ltr',
    play: 'Jouer', shop: 'Boutique', levels: 'Niveaux', back: 'Retour',
    subtitle: "L'aventure de Mishmish",
    tagline: 'Attrape le fromage, évite les bombes',
    score: 'Score', coins: 'Pièces', select: 'Choisir', selected: 'Choisi',
    need: 'Il manque', win: 'Bravo !', lose: 'Réessaie',
    retry: 'Rejouer', next: 'Suivant', menu: 'Menu', earned: 'pièces gagnées',
    cat0: 'Mishmish', cat1: 'Fumée', cat2: 'Ombre', cat3: 'Neige', cat4: 'Roi',
    paused: 'Pause', resume: 'Reprendre',
    story1: "Dans un petit coin de cette grande ville... une histoire extraordinaire a commencé.",
    story2: "Je m'appelle Mishmish ! Je suis un petit chat des rues, mais j'ai de grands rêves...",
    story3: "Soudain, un fromage doré a brillé... et j'adore le fromage plus que tout !",
    story4: "Mais l'obtenir ne sera pas facile... le danger rôde partout !",
    story5: "Alors un portail s'est ouvert sur des mondes incroyables... que l'aventure commence !",
    skip: "Passer",
    tap: "Touche pour continuer",
    story: "Histoire",
    drag: 'Glisse pour déplacer le chat',
    dailyBtn: 'Missions', dailyReward: 'Récompense du jour', dailyMissions: 'Missions du jour', claim: 'Récupérer', claimed: 'Récupéré', day: 'Jour',
    m_cheese: 'Ramasse {n} fromages', m_mice: 'Attrape {n} souris', m_score: 'Marque {n} points en un niveau', m_plays: 'Termine {n} niveaux', m_clean: 'Termine un niveau sans bombe', m_combo: 'Atteins un combo de {n}',
    lv0: 'Nuit', lv1: 'Désert', lv2: 'Mer', lv3: 'Neige', lv4: 'Espace',
    dailyDeal: 'Offre du jour', bundleAll: 'Pack tous les chats',
    tier0: 'Classique', tier1: 'Spécial', tier2: 'Rare', tier3: 'Épique', tier4: 'Royal',
    perk0: 'Héros de départ', perk1: 'Reflet argenté', perk_aura: 'Aura brillante', perk_coins: '+{n}% pièces',
    catBonus: 'Bonus chat', tapCat: 'Touche le chat',
    offersBtn: 'Offres', offersTitle: 'Offres & Packs', limitedTime: 'Expire dans',
    bundleStarter: 'Pack Départ', bundleElite: 'Pack Élite Royal', saveCoins: 'Économise {n}',
    allOwned: 'Tous les chats débloqués !', close: 'Fermer',
    loginStreak: 'Série de connexion', comeBackTomorrow: 'Reviens demain pour continuer ta série !',
    settings: 'Paramètres', audioSettings: 'Réglages audio', masterAudio: 'Tout l’audio',
    musicLabel: 'Musique', sfxLabel: 'Effets sonores', on: 'OUI', off: 'NON',
    achievements: 'Succès', equip: 'Équiper', equipped: 'Équipé', rewardSkin: 'Style', rewardBadge: 'Badge',
    ach_cheese_hoarder: 'Ramasse {n} fromages au total', ach_mouse_master: 'Attrape {n} souris au total',
    ach_combo_legend: 'Atteins un combo de {n}', ach_untouchable: 'Termine {n} niveaux sans bombe',
    ach_world_conqueror: 'Obtiens {n} étoiles',
    skin_neon: 'Style Néon', skin_flame: 'Style Flamme', skin_cosmic: 'Style Cosmique',
    badge_cheese: 'Badge Fromage d’Or', badge_shield: 'Badge Bouclier', badge_crown: 'Badge Couronne',
    tutTitle: 'Comment jouer', tutGreat: 'Bravo !', tutTapTry: 'Touche les objets pour tester',
    tutDragTitle: 'Glisse pour bouger', tutDragDesc: 'Glisse ton doigt à gauche et à droite ici pour déplacer ton chat.',
    tutCatchTitle: 'Attrape fromage et souris', tutCatchDesc: 'Le fromage vaut +1 et la souris rapide donne +5 et un grand saut !',
    tutBombTitle: 'Évite les bombes !', tutBombDesc: 'Tu as 3 cœurs. Toucher une bombe retire 1 cœur et annule le combo.',
    tutWinTitle: 'Combos et 3 étoiles', tutWinDesc: 'Atteins 8+ (x2) et 16+ (x3) pour gagner 3 étoiles et débloquer les mondes !',
    leaderboard: 'Classement', allWorlds: 'Tous', bestScore: 'Record', newRecord: 'Nouveau record !',
    rank: 'Rang', player: 'Joueur', editName: 'Nom', enterName: 'Nom du joueur',
    saveLabel: 'Valider', noScores: 'Joue une partie pour entrer au classement !', clearScores: 'Effacer', confirmClear: 'Confirmer ?', newTag: 'NOUV.',
    challengesTab: 'Défis', dailyChallenges: 'Défis du Jour Chrono', endsIn: 'Expire dans', reroll: 'Changer',
    chalChest: 'Coffre Grand Défi', chalChestDesc: 'Réussis les 3 défis avant la fin du chrono',
    chalTier0: 'Normal', chalTier1: 'Difficile', chalTier2: 'Épique',
    c_cheese: 'Ruée Fromage : Ramasse {n} fromages', c_mice: 'Chasse Éclair : Attrape {n} souris',
    c_score: 'Score Éclair : Marque {n} en 1 partie', c_combo: 'Série Combo : Atteins {n}',
    c_clean: 'Sans Bombe : Termine {n} parties propres', c_plays: 'Marathon : Termine {n} parties',
    streakMult: 'Bonus Série', nextBonus: 'Demain', maxMult: 'MAX !',
    worldMapTitle: 'Carte des 5 Mondes', worldsUnlocked: 'Mondes', totalStarsLabel: 'Étoiles',
    unlockReq: 'Gagne 1 étoile dans {w} pour débloquer', worldDone: 'Terminé', worldReady: 'Ouvert', worldLocked: 'Verrouillé',
    skinsBtn: 'Styles', skinStore: 'Boutique de Styles',
    skin_classic: 'Mishmish Classique', skin_golden: 'Fromage d’Or', skin_emerald: 'Menthe Émeraude',
    skin_berry: 'Baie Rose', skin_frost: 'Givre Arctique', skin_royal: 'Crépuscule Royal',
    pu_shield: 'Bouclier Invincible', pu_magnet: 'Aimant à Fromage', pu_boost: 'Score Double x2', pu_blocked: 'Bombe bloquée !',
    rankBtn: 'Classement', mazeBtn: 'Labyrinthe',
    tipReward: 'Ta récompense du jour t’attend dans Missions ! 🎁',
    tips: [
      'Entre dans le Labyrinthe et libère les chats avec les clés ! 🔑',
      'Fais un combo 8+ pour x2 et 16+ pour x3 ! 🔥',
      'Le bouclier bloque les bombes et sauve ton combo ! 🛡️',
      'Essaie les nouveaux styles de Mishmish en boutique ! ✨',
    ],
    rushWave: '⚡ Vague Fièvre ! +1 Bonus',
    mazeBest: 'Record',
    mazeNeedCats: 'Libère tous les chats d’abord ! 😺',
    mazeNeedCheese: 'Encore {n} fromages pour ouvrir ! 🧀',
    mazeLockedHint: 'Sortie fermée ! Finis les objectifs 🔒',
    mazeExitOpen: '🚪 Sortie ouverte ! Fonce au drapeau !',
    mazeTimeUp: 'Temps écoulé !',
    mazeSwipeHint: 'Glisse ou utilise les flèches pour avancer',
    mazeShield: 'Bouclier 🛡️', mazeTurbo: 'Turbo ⚡',
    mazeNeedKey: 'Il faut une clé ! 🔑',
    mazeRescued: 'Chat sauvé ! +100 💖',
    chooseLang: 'Choisis ta langue',
    modeClassic: 'Classique', modeEndless: 'Infini', modeMaze: 'Labyrinthe',
    endlessDesc: 'Difficulté croissante sans fin !\nCœurs rares (~1/min, max 3 ♥)',
    endlessTime: 'Temps', waveLabel: 'Vague', heartGain: '+1 Cœur ♥',
    doubleCoinsAd: 'x2 Pièces (Pub)', freeCoinsAd: '+100 Gratuit',
  },
  es: {
    name: 'Español', dir: 'ltr',
    play: 'Jugar', shop: 'Tienda', levels: 'Niveles', back: 'Volver',
    subtitle: "La aventura de Mishmish",
    tagline: 'Atrapa el queso, esquiva las bombas',
    score: 'Puntos', coins: 'Monedas', select: 'Elegir', selected: 'Elegido',
    need: 'Faltan', win: '¡Bien hecho!', lose: 'Inténtalo otra vez',
    retry: 'Repetir', next: 'Siguiente', menu: 'Menú', earned: 'monedas ganadas',
    cat0: 'Mishmish', cat1: 'Humo', cat2: 'Sombra', cat3: 'Nieve', cat4: 'Rey',
    paused: 'Pausa', resume: 'Continuar',
    story1: "En un pequeño rincón de esta gran ciudad... comenzó una historia extraordinaria.",
    story2: "¡Me llamo Mishmish! Soy un gatito callejero, pero tengo grandes sueños...",
    story3: "De pronto brilló un queso dorado... ¡y me encanta el queso más que nada!",
    story4: "Pero conseguirlo no será fácil... ¡el peligro acecha por todas partes!",
    story5: "Entonces se abrió un portal a mundos asombrosos... ¡que empiece la aventura!",
    skip: "Omitir",
    tap: "Toca para continuar",
    story: "Historia",
    drag: 'Desliza para mover al gato',
    dailyBtn: 'Misiones', dailyReward: 'Recompensa diaria', dailyMissions: 'Misiones diarias', claim: 'Reclamar', claimed: 'Reclamado', day: 'Día',
    m_cheese: 'Recoge {n} quesos', m_mice: 'Atrapa {n} ratones', m_score: 'Consigue {n} puntos en un nivel', m_plays: 'Completa {n} niveles', m_clean: 'Termina un nivel sin bombas', m_combo: 'Logra un combo de {n}',
    lv0: 'Noche', lv1: 'Desierto', lv2: 'Mar', lv3: 'Nieve', lv4: 'Espacio',
    dailyDeal: 'Oferta del día', bundleAll: 'Pack todos los gatos',
    tier0: 'Clásico', tier1: 'Especial', tier2: 'Raro', tier3: 'Épico', tier4: 'Real',
    perk0: 'Héroe inicial', perk1: 'Brillo plateado', perk_aura: 'Aura brillante', perk_coins: '+{n}% monedas',
    catBonus: 'Bono de gato', tapCat: 'Toca al gato',
    offersBtn: 'Ofertas', offersTitle: 'Ofertas y Packs', limitedTime: 'Termina en',
    bundleStarter: 'Pack Inicio', bundleElite: 'Pack Élite Real', saveCoins: 'Ahorra {n}',
    allOwned: '¡Todos los gatos desbloqueados!', close: 'Cerrar',
    loginStreak: 'Racha diaria', comeBackTomorrow: '¡Vuelve mañana para mantener tu racha!',
    settings: 'Ajustes', audioSettings: 'Ajustes de audio', masterAudio: 'Todo el audio',
    musicLabel: 'Música', sfxLabel: 'Efectos de sonido', on: 'SÍ', off: 'NO',
    achievements: 'Logros', equip: 'Equipar', equipped: 'Equipado', rewardSkin: 'Aspecto', rewardBadge: 'Insignia',
    ach_cheese_hoarder: 'Recoge {n} quesos en total', ach_mouse_master: 'Atrapa {n} ratones en total',
    ach_combo_legend: 'Logra un combo de {n}', ach_untouchable: 'Termina {n} niveles sin bombas',
    ach_world_conqueror: 'Consigue {n} estrellas',
    skin_neon: 'Aspecto Neón', skin_flame: 'Aspecto Llama', skin_cosmic: 'Aspecto Cósmico',
    badge_cheese: 'Insignia Queso', badge_shield: 'Insignia Escudo', badge_crown: 'Insignia Corona',
    tutTitle: 'Cómo jugar', tutGreat: '¡Genial!', tutTapTry: 'Toca los objetos para probar',
    tutDragTitle: 'Desliza para moverte', tutDragDesc: 'Desliza tu dedo a izquierda y derecha aquí para mover al gato.',
    tutCatchTitle: 'Atrapa queso y ratones', tutCatchDesc: '¡El queso da +1 punto y el ratón veloz da +5 y un gran salto!',
    tutBombTitle: '¡Esquiva las bombas!', tutBombDesc: 'Tienes 3 corazones. Tocar una bomba quita 1 corazón y reinicia el combo.',
    tutWinTitle: 'Combos y 3 estrellas', tutWinDesc: '¡Logra combos de 8+ (x2) y 16+ (x3) para conseguir 3 estrellas!',
    leaderboard: 'Clasificación', allWorlds: 'Todos', bestScore: 'Récord', newRecord: '¡Nuevo récord!',
    rank: 'Puesto', player: 'Jugador', editName: 'Nombre', enterName: 'Nombre',
    saveLabel: 'Guardar', noScores: '¡Juega una ronda para entrar al podio!', clearScores: 'Borrar', confirmClear: '¿Confirmar?', newTag: 'NUEVO',
    challengesTab: 'Desafíos', dailyChallenges: 'Desafíos Diarios', endsIn: 'Termina en', reroll: 'Cambiar',
    chalChest: 'Cofre de Desafíos', chalChestDesc: 'Completa los 3 desafíos antes de que acabe el tiempo',
    chalTier0: 'Normal', chalTier1: 'Difícil', chalTier2: 'Épico',
    c_cheese: 'Fiebre del Queso: Recoge {n}', c_mice: 'Caza Veloz: Atrapa {n} ratones',
    c_score: 'Gran Racha: Logra {n} pts en 1 ronda', c_combo: 'Combo Maestro: Llega a {n}',
    c_clean: 'Sin Bombas: Completa {n} rondas limpias', c_plays: 'Maratón: Completa {n} rondas',
    streakMult: 'Bono Racha', nextBonus: 'Mañana', maxMult: '¡MÁX!',
    worldMapTitle: 'Mapa de los 5 Mundos', worldsUnlocked: 'Mundos', totalStarsLabel: 'Estrellas',
    unlockReq: 'Consigue 1 estrella en {w} para desbloquear', worldDone: 'Completado', worldReady: 'Abierto', worldLocked: 'Bloqueado',
    skinsBtn: 'Aspectos', skinStore: 'Tienda de Aspectos',
    skin_classic: 'Mishmish Clásico', skin_golden: 'Queso Dorado', skin_emerald: 'Menta Esmeralda',
    skin_berry: 'Fresa Rosa', skin_frost: 'Escarcha Ártica', skin_royal: 'Ocaso Real',
    pu_shield: 'Escudo Invencible', pu_magnet: 'Imán de Queso', pu_boost: 'Puntos Dobles x2', pu_blocked: '¡Escudo Activo!',
    rankBtn: 'Podio', mazeBtn: 'Laberinto',
    tipReward: '¡Tu recompensa diaria te espera en Misiones! 🎁',
    tips: [
      '¡Entra al Laberinto y rescata gatitos con llaves! 🔑',
      '¡Combo 8+ da x2 puntos y 16+ da x3! 🔥',
      '¡El escudo bloquea bombas y salva tu combo! 🛡️',
      '¡Prueba nuevos aspectos de Mishmish en la tienda! ✨',
    ],
    rushWave: '⚡ ¡Fiebre Final! +1 Extra',
    mazeBest: 'Récord',
    mazeNeedCats: '¡Rescata a todos los gatos primero! 😺',
    mazeNeedCheese: '¡Faltan {n} quesos para abrir! 🧀',
    mazeLockedHint: '¡Salida cerrada! Completa las tareas 🔒',
    mazeExitOpen: '🚪 ¡Salida abierta! ¡Ve a la meta!',
    mazeTimeUp: '¡Tiempo agotado!',
    mazeSwipeHint: 'Desliza o usa las flechas para moverte',
    mazeShield: 'Escudo 🛡️', mazeTurbo: 'Turbo ⚡',
    mazeNeedKey: '¡Necesitas una llave! 🔑',
    mazeRescued: '¡Gato rescatado! +100 💖',
    chooseLang: 'Elige tu idioma',
    modeClassic: 'Clásico', modeEndless: 'Infinito', modeMaze: 'Laberinto',
    endlessDesc: '¡Dificultad creciente sin fin!\nCorazones raros (~1/min, máx. 3 ♥)',
    endlessTime: 'Tiempo', waveLabel: 'Ola', heartGain: '+1 Corazón ♥',
    doubleCoinsAd: 'x2 Monedas (Ad)', freeCoinsAd: '+100 Gratis',
  },
};

;
/* ===== js/audio.js ===== */
// نظام الصوت الهجين: يدعم ملفات الصوت الحقيقية (عند إضافتها في AUDIO_MANIFEST) مع محرك Web Audio احترافي متعدد الطبقات
// قائمة الملفات الصوتية الحقيقية داخل public/assets/audio/ (مع محرك Web Audio احتياطي فوري)
const AUDIO_MANIFEST = {
  bgm_menu: 'bgm_menu.mp3',
  bgm_game: 'bgm_game.mp3',
  bgm_maze: 'bgm_menu.mp3',
  sfx_meow: 'sfx_meow.mp3',
  sfx_meow_happy: 'sfx_meow.mp3',
  sfx_meow_scared: 'sfx_meow_scared.mp3',
  sfx_purr: 'sfx_purr.mp3',
};

const Sound = (() => {
  let ctx = null, master = null, compressor = null, musicGain = null, sfxGain = null;
  let music = true, sfx = true, sdkMuted = false;
  let musicVol = 1, sfxVol = 1;
  let timer = null, step = 0, tempo = 0.19, lastLevel = -1, lastTrackKey = '';
  let activeBgmEl = null, activeBgmKey = '';
  const audioBuffers = new Map();
  const decodedFiles = new Map();

  // سلالم موسيقية متدرجة حسب العالم (-1 للقائمة، 0..4 للعوالم)
  const WORLD_ROOTS = [261.63, 293.66, 246.94, 329.63, 220.0];
  const SCALE = [0, 2, 4, 7, 9, 12, 14, 16];
  const MELODY_MENU = [0, 2, 4, 2, 5, 4, 2, 1, 0, 2, 4, 5, 4, 2, 1, 0];
  const MELODY_GAME = [0, 4, 2, 5, 4, 2, 3, 4, 5, 7, 5, 4, 3, 2, 4, 2];
  const CHORD_ROOTS = [0, 0, 3, 4];

  const hz = (base, semi) => base * Math.pow(2, semi / 12);
  const clamp01 = (v) => Math.max(0, Math.min(1, Number.isFinite(v) ? v : 1));
  const syncSave = (patch) => {
    if (typeof save === 'object' && save) Object.assign(save, patch);
    if (typeof persist === 'function') persist();
  };

  function assetBase() {
    return (typeof window !== 'undefined' && window.__GAME_BASE__) ? window.__GAME_BASE__ : '';
  }

  function applyGains() {
    const mOut = (!sdkMuted && music) ? musicVol : 0;
    const sOut = (!sdkMuted && sfx) ? sfxVol : 0;
    if (musicGain) musicGain.gain.value = mOut;
    if (sfxGain) sfxGain.gain.value = sOut;
    if (activeBgmEl) activeBgmEl.volume = clamp01(mOut * 0.55);
  }

  function preloadManifest() {
    if (!ctx || typeof fetch !== 'function') return;
    Object.keys(AUDIO_MANIFEST).forEach((key) => {
      if (!key.startsWith('sfx_') || audioBuffers.has(key)) return;
      const rel = AUDIO_MANIFEST[key];
      if (!rel) return;
      if (decodedFiles.has(rel)) {
        const cached = decodedFiles.get(rel);
        if (cached && typeof cached.then === 'function') {
          audioBuffers.set(key, 'loading');
          cached.then((decoded) => {
            if (decoded) audioBuffers.set(key, decoded);
            else audioBuffers.delete(key);
          });
        } else if (cached) {
          audioBuffers.set(key, cached);
        }
        return;
      }
      audioBuffers.set(key, 'loading');
      const p = fetch(assetBase() + 'assets/audio/' + rel)
        .then((r) => (r.ok ? r.arrayBuffer() : null))
        .then((buf) => (buf ? ctx.decodeAudioData(buf) : null))
        .then((decoded) => {
          decodedFiles.set(rel, decoded || null);
          if (decoded) audioBuffers.set(key, decoded);
          else audioBuffers.delete(key);
          return decoded || null;
        })
        .catch(() => {
          decodedFiles.delete(rel);
          audioBuffers.delete(key);
          return null;
        });
      decodedFiles.set(rel, p);
    });
  }

  // يجب استدعاؤها بعد أول لمسة/ضغطة مفتاح (شرط المتصفحات الحديثة)
  function init() {
    if (ctx) {
      if (ctx.state === 'suspended') ctx.resume().catch(() => {});
      applyGains();
      if (activeBgmEl && activeBgmEl.paused && music && musicVol > 0 && !sdkMuted) {
        activeBgmEl.play().catch(() => {});
      }
      return;
    }
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return;
    ctx = new AC();
    master = ctx.createGain();
    master.gain.value = 0.58;
    if (typeof ctx.createDynamicsCompressor === 'function') {
      compressor = ctx.createDynamicsCompressor();
      compressor.threshold.value = -16;
      compressor.knee.value = 18;
      compressor.ratio.value = 4;
      compressor.connect(master);
    }
    master.connect(ctx.destination);
    musicGain = ctx.createGain();
    sfxGain = ctx.createGain();
    musicGain.connect(compressor || master);
    sfxGain.connect(compressor || master);
    applyGains();
    preloadManifest();
    if (activeBgmEl) {
      if (activeBgmEl.paused && music && musicVol > 0 && !sdkMuted) activeBgmEl.play().catch(() => {});
    } else if (music && musicVol > 0 && !timer) {
      startMusic(lastLevel, lastTrackKey || null);
    }
  }

  function tone(freq, dur, type = 'sine', vol = 0.2, slideTo = 0, delay = 0, bus = null, attack = 0.008) {
    if (!ctx || vol <= 0.001) return;
    const t0 = ctx.currentTime + delay;
    const o = ctx.createOscillator();
    const g = ctx.createGain();
    o.type = type;
    o.frequency.setValueAtTime(Math.max(25, freq), t0);
    if (slideTo) o.frequency.exponentialRampToValueAtTime(Math.max(25, slideTo), t0 + dur);
    g.gain.setValueAtTime(0.0001, t0);
    g.gain.linearRampToValueAtTime(vol, t0 + Math.min(attack, dur * 0.35));
    g.gain.exponentialRampToValueAtTime(0.0008, t0 + dur);
    o.connect(g);
    g.connect(bus || master);
    o.start(t0);
    o.stop(t0 + dur + 0.03);
  }

  function noise(dur, vol, cutoff = 900, highpass = 0, delay = 0, bus = null) {
    if (!ctx || vol <= 0.001) return;
    const n = Math.max(1, Math.floor(ctx.sampleRate * dur));
    const buf = ctx.createBuffer(1, n, ctx.sampleRate);
    const data = buf.getChannelData(0);
    for (let i = 0; i < n; i++) data[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / n, 1.4);
    const src = ctx.createBufferSource();
    src.buffer = buf;
    const f = ctx.createBiquadFilter();
    f.type = highpass > 0 ? 'bandpass' : 'lowpass';
    f.frequency.value = highpass > 0 ? highpass : cutoff;
    const g = ctx.createGain();
    g.gain.value = vol;
    src.connect(f); f.connect(g); g.connect(bus || sfxGain || master);
    src.start(ctx.currentTime + delay);
  }

  function playBuffer(key, bus, delay = 0, gain = 0.92) {
    const b = audioBuffers.get(key);
    if (!ctx || !b || typeof b === 'string') return false;
    const src = ctx.createBufferSource();
    src.buffer = b;
    const g = ctx.createGain();
    g.gain.value = gain;
    src.connect(g);
    g.connect(bus || sfxGain || master);
    src.start(ctx.currentTime + Math.max(0, delay));
    return true;
  }

  // صوت مواء قط حقيقي من الملف الصوتي، مع تركيب احتياطي عبر مرشح حنجرة (Formant Filter)
  function catMeow(mood = 'happy', delay = 0, bus = null) {
    if (!ctx) return;
    const realKey = mood === 'scared' ? 'sfx_meow_scared' : (mood === 'happy' ? 'sfx_meow' : '');
    if (realKey && playBuffer(realKey, bus, delay, mood === 'scared' ? 0.95 : 0.88)) return;
    const t0 = ctx.currentTime + delay;
    const dur = mood === 'scared' ? 0.24 : mood === 'chirp' ? 0.14 : 0.30;
    const o1 = ctx.createOscillator();
    const o2 = ctx.createOscillator();
    const lfo = ctx.createOscillator();
    const lfoG = ctx.createGain();
    const filt = ctx.createBiquadFilter();
    const g = ctx.createGain();

    o1.type = 'sawtooth';
    o2.type = 'triangle';
    if (mood === 'scared') {
      o1.frequency.setValueAtTime(980, t0);
      o1.frequency.exponentialRampToValueAtTime(640, t0 + 0.09);
      o1.frequency.exponentialRampToValueAtTime(340, t0 + dur);
      o2.frequency.setValueAtTime(1960, t0);
      o2.frequency.exponentialRampToValueAtTime(680, t0 + dur);
    } else if (mood === 'chirp') {
      o1.frequency.setValueAtTime(620, t0);
      o1.frequency.exponentialRampToValueAtTime(980, t0 + dur);
      o2.frequency.setValueAtTime(1240, t0);
      o2.frequency.exponentialRampToValueAtTime(1960, t0 + dur);
    } else {
      o1.frequency.setValueAtTime(510, t0);
      o1.frequency.exponentialRampToValueAtTime(790, t0 + dur * 0.38);
      o1.frequency.exponentialRampToValueAtTime(450, t0 + dur);
      o2.frequency.setValueAtTime(1020, t0);
      o2.frequency.exponentialRampToValueAtTime(1580, t0 + dur * 0.38);
      o2.frequency.exponentialRampToValueAtTime(900, t0 + dur);
    }

    // اهتزاز صوتي لطيف ليعطي نبرة حية
    lfo.frequency.value = mood === 'scared' ? 28 : 14;
    lfoG.gain.value = mood === 'scared' ? 22 : 11;
    lfo.connect(lfoG); lfoG.connect(o1.frequency);

    filt.type = 'bandpass';
    filt.Q.value = mood === 'scared' ? 2.4 : 3.2;
    filt.frequency.setValueAtTime(mood === 'scared' ? 1450 : 920, t0);
    if (mood === 'happy') {
      filt.frequency.exponentialRampToValueAtTime(1420, t0 + dur * 0.4);
      filt.frequency.exponentialRampToValueAtTime(840, t0 + dur);
    } else if (mood === 'scared') {
      filt.frequency.exponentialRampToValueAtTime(680, t0 + dur);
    } else {
      filt.frequency.exponentialRampToValueAtTime(1600, t0 + dur);
    }

    const peak = mood === 'chirp' ? 0.22 : 0.28;
    g.gain.setValueAtTime(0.0001, t0);
    g.gain.linearRampToValueAtTime(peak, t0 + 0.025);
    g.gain.setValueAtTime(peak * 0.9, t0 + dur * 0.45);
    g.gain.exponentialRampToValueAtTime(0.0008, t0 + dur);

    const o2G = ctx.createGain();
    o2G.gain.value = 0.35;
    o1.connect(filt);
    o2.connect(o2G); o2G.connect(filt);
    filt.connect(g);
    g.connect(bus || sfxGain || master);

    o1.start(t0); o2.start(t0); lfo.start(t0);
    o1.stop(t0 + dur + 0.03); o2.stop(t0 + dur + 0.03); lfo.stop(t0 + dur + 0.03);
  }

  function purr(delay = 0, bus = null) {
    if (!ctx) return;
    if (playBuffer('sfx_purr', bus, delay, 0.9)) return;
    const t0 = ctx.currentTime + delay;
    const dur = 0.36;
    const o = ctx.createOscillator();
    const lfo = ctx.createOscillator();
    const lfoG = ctx.createGain();
    const g = ctx.createGain();
    o.type = 'triangle';
    o.frequency.setValueAtTime(72, t0);
    lfo.type = 'sine';
    lfo.frequency.value = 25;
    lfoG.gain.value = 0.08;
    lfo.connect(lfoG); lfoG.connect(g.gain);
    g.gain.setValueAtTime(0.0001, t0);
    g.gain.linearRampToValueAtTime(0.14, t0 + 0.04);
    g.gain.exponentialRampToValueAtTime(0.0008, t0 + dur);
    o.connect(g); g.connect(bus || sfxGain || master);
    o.start(t0); lfo.start(t0);
    o.stop(t0 + dur + 0.03); lfo.stop(t0 + dur + 0.03);
  }

  function play(name) {
    if (sdkMuted || !sfx || sfxVol <= 0) return;
    if (!ctx) init();
    if (!ctx) return;
    const dest = sfxGain || master;
    if (playBuffer('sfx_' + name, dest)) return;

    switch (name) {
      case 'meow':
      case 'meow_happy':
        catMeow('happy', 0, dest);
        break;
      case 'chirp':
        catMeow('chirp', 0, dest);
        break;
      case 'meow_scared':
        catMeow('scared', 0, dest);
        break;
      case 'purr':
        purr(0, dest);
        tone(660, 0.14, 'sine', 0.1, 880, 0.02, dest);
        break;
      case 'cheese':
        tone(740, 0.075, 'triangle', 0.16, 920, 0, dest);
        tone(1108, 0.11, 'sine', 0.18, 1380, 0.05, dest);
        tone(1760, 0.08, 'sine', 0.08, 0, 0.075, dest);
        break;
      case 'mouse':
        [523, 659, 784, 1047, 1319].forEach((f, i) => tone(f, 0.11, 'triangle', 0.14, f * 1.08, i * 0.042, dest));
        catMeow('chirp', 0.08, dest);
        break;
      case 'bomb':
        noise(0.48, 0.55, 680, 0, 0, dest);
        tone(165, 0.42, 'sawtooth', 0.24, 38, 0, dest, 0.004);
        tone(95, 0.36, 'sine', 0.28, 32, 0.02, dest, 0.004);
        catMeow('scared', 0.05, dest);
        break;
      case 'click':
        tone(560, 0.045, 'sine', 0.14, 720, 0, dest, 0.003);
        tone(1120, 0.03, 'triangle', 0.05, 0, 0.005, dest, 0.002);
        break;
      case 'buy':
        [880, 1175, 1319, 1760].forEach((f, i) => tone(f, 0.14, 'triangle', 0.15, 0, i * 0.055, dest));
        catMeow('chirp', 0.14, dest);
        break;
      case 'win':
        [523, 659, 784, 1047, 1319].forEach((f, i) => {
          tone(f, 0.24, 'triangle', 0.16, 0, i * 0.095, dest);
          tone(f * 0.5, 0.24, 'sine', 0.09, 0, i * 0.095, dest);
        });
        catMeow('happy', 0.28, dest);
        break;
      case 'lose':
        [440, 392, 349, 277].forEach((f, i) => tone(f, 0.26, 'sawtooth', 0.1, f * 0.92, i * 0.13, dest));
        break;
      case 'powerup':
        [587, 740, 880, 1175, 1480].forEach((f, i) => tone(f, 0.12, 'triangle', 0.15, f * 1.08, i * 0.045, dest));
        break;
      case 'shield':
        tone(860, 0.15, 'sine', 0.2, 1280, 0, dest);
        tone(1280, 0.18, 'triangle', 0.13, 960, 0.045, dest);
        purr(0.04, dest);
        break;
      case 'key':
        [880, 1175, 1568].forEach((f, i) => tone(f, 0.12, 'sine', 0.16, 0, i * 0.05, dest));
        break;
      case 'unlock':
        [523, 659, 784, 1047, 1319, 1568].forEach((f, i) => tone(f, 0.16, 'triangle', 0.15, f * 1.03, i * 0.05, dest));
        catMeow('happy', 0.12, dest);
        break;
      case 'portal':
        [659, 880, 1175, 1760].forEach((f, i) => tone(f, 0.2, 'sine', 0.17, f * 1.12, i * 0.065, dest));
        break;
      case 'tick':
        tone(780, 0.035, 'triangle', 0.08, 0, 0, dest, 0.002);
        break;
      case 'step':
        noise(0.03, 0.05, 500, 0, 0, dest);
        break;
    }
  }

  function tick() {
    if (sdkMuted || !music || musicVol <= 0 || !ctx) return;
    const dest = musicGain || master;
    const inGame = lastLevel >= 0;
    const root = WORLD_ROOTS[inGame ? (lastLevel % WORLD_ROOTS.length) : 0];
    const pat = inGame ? MELODY_GAME : MELODY_MENU;
    const idx = step % 16;
    const deg = pat[idx];
    const semi = SCALE[deg % SCALE.length];

    // اللحن الرئيسي
    tone(hz(root, semi), tempo * (inGame ? 0.85 : 1.05), inGame ? 'triangle' : 'sine', inGame ? 0.065 : 0.055, 0, 0, dest, 0.012);

    // نغمة انسجام لطيفة كل نبضتين
    if (idx % 2 === 0) {
      tone(hz(root, semi + 4), tempo * 1.2, 'sine', 0.032, 0, 0, dest, 0.02);
    }

    // باص وإيقاع خفيف أثناء اللعب
    if (idx % 4 === 0) {
      const chordSemi = SCALE[CHORD_ROOTS[Math.floor(idx / 4)]];
      tone(hz(root * 0.5, chordSemi), tempo * 3.4, 'sine', 0.095, 0, 0, dest, 0.015);
      if (inGame) tone(110, 0.09, 'sine', 0.09, 45, 0, dest, 0.003);
    } else if (inGame && idx % 2 === 1) {
      noise(0.028, 0.024, 5000, 4200, 0, dest);
    }
    step++;
  }

  // level = -1 لموسيقى القائمة (أهدأ)، وكلما زاد المستوى زادت السرعة
  function startMusic(level, trackOverride = null) {
    if (level !== undefined) lastLevel = level;
    const fileKey = trackOverride || (lastLevel < 0 ? 'bgm_menu' : 'bgm_game');
    lastTrackKey = fileKey;

    if (!sdkMuted && music && musicVol > 0 && activeBgmEl && activeBgmKey === fileKey) {
      applyGains();
      if (activeBgmEl.paused) activeBgmEl.play().catch(() => {});
      return;
    }

    stopMusic();
    if (sdkMuted || !music || musicVol <= 0) return;

    if (AUDIO_MANIFEST[fileKey] && typeof Audio !== 'undefined') {
      try {
        activeBgmKey = fileKey;
        const el = new Audio(assetBase() + 'assets/audio/' + AUDIO_MANIFEST[fileKey]);
        el.loop = true;
        el.preload = 'auto';
        el.addEventListener('error', () => {
          if (activeBgmEl === el) {
            activeBgmEl = null;
            activeBgmKey = '';
            if (ctx && !timer && music && musicVol > 0 && !sdkMuted) {
              tempo = lastLevel < 0 ? 0.26 : Math.max(0.145, 0.215 - lastLevel * 0.015);
              step = 0;
              timer = setInterval(tick, tempo * 1000);
            }
          }
        }, { once: true });
        activeBgmEl = el;
        applyGains();
        el.play().catch(() => {});
        return;
      } catch (e) { activeBgmEl = null; activeBgmKey = ''; }
    }

    if (!ctx) return;
    tempo = lastLevel < 0 ? 0.26 : Math.max(0.145, 0.215 - lastLevel * 0.015);
    step = 0;
    timer = setInterval(tick, tempo * 1000);
  }

  function stopMusic() {
    if (timer) { clearInterval(timer); timer = null; }
    if (activeBgmEl) {
      try { activeBgmEl.pause(); activeBgmEl.currentTime = 0; } catch (e) {}
      activeBgmEl = null; activeBgmKey = '';
    }
  }

  function setMusic(v) {
    music = !!v;
    if (music && musicVol <= 0) {
      musicVol = 1;
      syncSave({ music, musicVol });
    } else {
      syncSave({ music });
    }
    applyGains();
    if (!music) stopMusic();
    return music;
  }

  function setSfx(v) {
    sfx = !!v;
    if (sfx && sfxVol <= 0) {
      sfxVol = 1;
      syncSave({ sfx, sfxVol });
    } else {
      syncSave({ sfx });
    }
    applyGains();
    return sfx;
  }

  function setMusicVolume(v) {
    musicVol = Math.round(clamp01(v) * 100) / 100;
    music = musicVol > 0;
    syncSave({ musicVol, music });
    applyGains();
    if (!music) stopMusic();
    else if (ctx && !timer && !activeBgmEl) startMusic(lastLevel);
    return musicVol;
  }

  function setSfxVolume(v) {
    sfxVol = Math.round(clamp01(v) * 100) / 100;
    sfx = sfxVol > 0;
    syncSave({ sfxVol, sfx });
    applyGains();
    return sfxVol;
  }

  // كتم مؤقت لمنصات الويب (مثل إعلانات أو إعدادات CrazyGames) دون المساس بحفظ اللاعب
  function suspendAudio() {
    if (ctx && ctx.state === 'running') ctx.suspend().catch(() => {});
    if (activeBgmEl && !activeBgmEl.paused) try { activeBgmEl.pause(); } catch (e) {}
  }

  function resumeAudio() {
    if (sdkMuted) return;
    if (ctx && ctx.state === 'suspended') ctx.resume().catch(() => {});
    if (activeBgmEl && music && musicVol > 0 && activeBgmEl.paused) try { activeBgmEl.play().catch(() => {}); } catch (e) {}
  }

  function setSdkMute(muted) {
    const was = sdkMuted;
    sdkMuted = !!muted;
    try {
      applyGains();
      if (sdkMuted) {
        suspendAudio();
      } else {
        resumeAudio();
        // إذا كُتم الصوت قبل بدء الموسيقى أو أثناءها: أعد تشغيلها عند رفع الكتم
        if (was && music && musicVol > 0 && ctx && !timer && (!activeBgmEl || activeBgmEl.paused)) {
          startMusic(lastLevel, lastTrackKey || null);
        }
      }
    } catch (e) {}
  }

  // تبديل عالمي للموسيقى والمؤثرات معاً
  function setAll(enabled, level) {
    const on = !!enabled;
    if (on) {
      init();
      setMusic(true);
      setSfx(true);
      startMusic(level !== undefined ? level : lastLevel);
      play('click');
    } else {
      setMusic(false);
      setSfx(false);
    }
    return on;
  }

  function toggleMusic(level) {
    init();
    setMusic(!music);
    if (music) startMusic(level !== undefined ? level : lastLevel);
    return music;
  }

  function toggleSfx(playSample = true) {
    init();
    setSfx(!sfx);
    if (sfx && playSample) play('click');
    return sfx;
  }

  function toggleAll(level) {
    const isMutedNow = !music && !sfx;
    return setAll(isMutedNow, level);
  }

  function syncFromSave() {
    if (typeof save !== 'object' || !save) return;
    musicVol = clamp01(save.musicVol !== undefined ? save.musicVol : 1);
    sfxVol = clamp01(save.sfxVol !== undefined ? save.sfxVol : 1);
    music = save.music !== false && musicVol > 0;
    sfx = save.sfx !== false && sfxVol > 0;
    applyGains();
  }

  return {
    init, play, startMusic, stopMusic, syncFromSave,
    setMusic, setSfx, setMusicVolume, setSfxVolume, setSdkMute,
    getMusicVolume() { return music ? musicVol : 0; },
    getSfxVolume() { return sfx ? sfxVol : 0; },
    isMusicEnabled() { return music && musicVol > 0; },
    isSfxEnabled() { return sfx && sfxVol > 0; },
    isMuted() { return !this.isMusicEnabled() && !this.isSfxEnabled(); },
    isAllEnabled() { return this.isMusicEnabled() || this.isSfxEnabled(); },
    getState() {
      return {
        music: this.isMusicEnabled(),
        sfx: this.isSfxEnabled(),
        musicVol: this.getMusicVolume(),
        sfxVol: this.getSfxVolume(),
        muted: this.isMuted(),
        allEnabled: this.isAllEnabled(),
      };
    },
    toggleMusic, toggleSfx, setAll, toggleAll,
    suspend: suspendAudio,
    resume: resumeAudio,
  };
})();

;
/* ===== js/crazy.js ===== */
// ===== تكامل CrazyGames SDK v3 الكامل: إعلانات ما قبل اللعب، إعلانات المكافآت، ومستمعو حالة البوابة =====
const CG = (() => {
  let sdk = null;
  let initPromise = null;
  let sdkReady = false;
  let env = 'disabled';
  let hasAdblock = false;
  let loadingStarted = false;
  let loadingStopped = false;
  let gameplayActive = false;
  let adPlaying = false;
  let prerollShown = false;
  let lastMidgameAt = 0;
  let portalMuted = false;

  const MIDGAME_COOLDOWN_MS = 90000;
  const stateListeners = new Set();
  const pauseHandlers = new Set();

  function getSdk() {
    if (sdk) return sdk;
    if (typeof window !== 'undefined' && window.CrazyGames && window.CrazyGames.SDK) {
      sdk = window.CrazyGames.SDK;
    }
    return sdk;
  }

  function getState() {
    return { sdkReady, env, hasAdblock, loadingStarted, loadingStopped, gameplayActive, adPlaying, prerollShown, portalMuted };
  }

  function emitState() {
    const snapshot = getState();
    stateListeners.forEach((fn) => {
      try { fn(snapshot); } catch (e) {}
    });
  }

  function addStateListener(fn) {
    if (typeof fn === 'function') stateListeners.add(fn);
    return () => stateListeners.delete(fn);
  }

  function registerPauseHandler(fn) {
    if (typeof fn === 'function') pauseHandlers.add(fn);
    return () => pauseHandlers.delete(fn);
  }

  function syncMute() {
    if (typeof Sound !== 'undefined' && Sound.setSdkMute) {
      Sound.setSdkMute(portalMuted || adPlaying);
    }
  }

  function notifyPauseForAd() {
    pauseHandlers.forEach((fn) => {
      try { fn(); } catch (e) {}
    });
  }

  function waitForSdk(timeoutMs = 6000) {
    const existing = getSdk();
    if (existing) return Promise.resolve(existing);
    if (!document.querySelector('script[src*="crazygames"]')) return Promise.resolve(null);
    if (typeof window === 'undefined' || typeof document === 'undefined') return Promise.resolve(null);

    return new Promise((resolve) => {
      let done = false;
      const finish = (val) => {
        if (done) return;
        done = true;
        resolve(val);
      };

      const start = Date.now();
      const poll = () => {
        const s = getSdk();
        if (s) return finish(s);
        if (Date.now() - start >= timeoutMs) return finish(null);
        setTimeout(poll, 120);
      };

      const tag = document.querySelector('script[src*="crazygames"]');
      if (tag) {
        tag.addEventListener('load', () => finish(getSdk()), { once: true });
        tag.addEventListener('error', () => finish(null), { once: true });
      }
      poll();
    });
  }

  // ===== حفظ سحابي عبر وحدة Data في CrazyGames (يعمل للضيف واللاعب المسجّل) =====
  function progressOf(o) {
    if (!o || typeof o !== 'object') return -1;
    const sum = (a) => Array.isArray(a) ? a.reduce((x, y) => x + (Number(y) || 0), 0) : 0;
    const m = o.maze || {}, ach = o.achievements || {}, sk = o.shopSkins || {};
    return (Array.isArray(o.owned) ? o.owned.length : 0) * 1000 + sum(o.stars) * 200 + sum(m.stars) * 200 +
      (Number(m.unlocked) || 0) * 300 + (Array.isArray(ach.claimed) ? ach.claimed.length : 0) * 100 +
      (Array.isArray(sk.owned) ? sk.owned.length : 0) * 500 + sum(o.bestScores) * 0.01 + (o.storySeen ? 1 : 0);
  }

  function cloudData() {
    const s = getSdk();
    return (sdkReady && s && s.data && typeof s.data.getItem === 'function' && typeof s.data.setItem === 'function') ? s.data : null;
  }

  function cloudSave() {
    const d = cloudData();
    if (!d || typeof save === 'undefined') return;
    try { d.setItem(SAVE_KEY, JSON.stringify(save)); } catch (e) {}
  }

  function syncCloudSave() {
    const d = cloudData();
    if (!d || typeof save === 'undefined' || typeof SAVE_KEY === 'undefined') return;
    try {
      const raw = d.getItem(SAVE_KEY);
      let cloud = null;
      if (raw) { try { cloud = JSON.parse(raw); } catch (e) { cloud = null; } }
      if (cloud && typeof cloud === 'object' && progressOf(cloud) > progressOf(save)) {
        const base = JSON.parse(JSON.stringify(DEFAULT_SAVE));
        Object.keys(save).forEach((k) => { delete save[k]; });
        Object.assign(save, base, cloud);
        try { localStorage.setItem(SAVE_KEY, JSON.stringify(save)); } catch (e) {}
        if (typeof Sound !== 'undefined' && Sound.syncFromSave) Sound.syncFromSave();
        try {
          if (typeof phaserGame !== 'undefined' && phaserGame.scene) {
            const sc = phaserGame.scene.getScenes(true)[0];
            if (sc && sc.scene.key === 'Menu') sc.scene.restart();
          }
        } catch (e) {}
      } else {
        d.setItem(SAVE_KEY, JSON.stringify(save));
      }
    } catch (e) {}
  }

  async function init() {
    if (sdkReady) return true;
    if (initPromise) return initPromise;

    initPromise = (async () => {
      const s = await waitForSdk();
      if (!s || typeof s.init !== 'function') {
        emitState();
        return false;
      }
      try {
        await s.init();
        sdkReady = true;
        env = s.environment || 'crazygames';

        if (s.game && s.game.settings && s.game.settings.muteAudio !== undefined) {
          portalMuted = !!s.game.settings.muteAudio;
          syncMute();
        }
        if (s.game && typeof s.game.addSettingsChangeListener === 'function') {
          s.game.addSettingsChangeListener((newSettings) => {
            if (newSettings && newSettings.muteAudio !== undefined) {
              portalMuted = !!newSettings.muteAudio;
              syncMute();
              emitState();
            }
          });
        }
        syncCloudSave();
        if (s.user && typeof s.user.addAuthListener === 'function') {
          try {
            s.user.addAuthListener(() => { syncCloudSave(); emitState(); });
          } catch (e) {}
        }
        if (s.ad && typeof s.ad.hasAdblock === 'function') {
          s.ad.hasAdblock().then((blocked) => {
            hasAdblock = !!blocked;
            emitState();
          }).catch(() => {});
        }

        // إعادة بث أحداث التحميل واللعب التي سبقت اكتمال التهيئة بالترتيب الصحيح
        if (s.game) {
          if (loadingStarted && s.game.loadingStart) {
            try { s.game.loadingStart(); } catch (e) {}
          }
          if (loadingStopped && s.game.loadingStop) {
            try { s.game.loadingStop(); } catch (e) {}
          }
          if (gameplayActive && !adPlaying && s.game.gameplayStart) {
            try { s.game.gameplayStart(); } catch (e) {}
          }
        }
        emitState();
        return true;
      } catch (e) {
        sdkReady = false;
        env = 'disabled';
        emitState();
        return false;
      }
    })();

    return initPromise;
  }

  function isPortalActive() {
    return sdkReady && env !== 'disabled';
  }

  function canShowRewarded() {
    const s = getSdk();
    return !!(isPortalActive() && !hasAdblock && !adPlaying && s && s.ad && typeof s.ad.requestAd === 'function');
  }

  function loadingStart() {
    if (loadingStarted) return;
    loadingStarted = true;
    if (!sdkReady) { init(); emitState(); return; }
    const s = getSdk();
    try { if (s && s.game && s.game.loadingStart) s.game.loadingStart(); } catch (e) {}
    emitState();
  }

  function loadingStop() {
    if (loadingStopped) return;
    loadingStopped = true;
    if (!sdkReady) { emitState(); return; }
    const s = getSdk();
    try { if (s && s.game && s.game.loadingStop) s.game.loadingStop(); } catch (e) {}
    emitState();
  }

  function gameplayStart() {
    if (adPlaying) return;
    if (gameplayActive) return;
    gameplayActive = true;
    if (!sdkReady) { emitState(); return; }
    const s = getSdk();
    try { if (s && s.game && s.game.gameplayStart) s.game.gameplayStart(); } catch (e) {}
    emitState();
  }

  function gameplayStop() {
    if (!gameplayActive) return;
    gameplayActive = false;
    if (!sdkReady) { emitState(); return; }
    const s = getSdk();
    try { if (s && s.game && s.game.gameplayStop) s.game.gameplayStop(); } catch (e) {}
    emitState();
  }

  function happytime() {
    if (!sdkReady) return;
    const s = getSdk();
    try { if (s && s.game && s.game.happytime) s.game.happytime(); } catch (e) {}
  }

  function requestAd(type = 'midgame', callbacks = {}) {
    const done = (ok, err) => {
      adPlaying = false;
      syncMute();
      emitState();
      if (ok) {
        if (typeof callbacks.onReward === 'function' && type === 'rewarded') callbacks.onReward();
        if (typeof callbacks.adFinished === 'function') callbacks.adFinished();
      } else {
        if (typeof callbacks.adError === 'function') callbacks.adError(err || new Error('Ad unavailable'));
      }
      if (typeof callbacks.onDone === 'function') callbacks.onDone(ok, err);
    };

    const s = getSdk();
    if (adPlaying) {
      if (typeof callbacks.onDone === 'function') callbacks.onDone(false, new Error('Ad in progress'));
      return false;
    }
    if (!isPortalActive() || !s || !s.ad || typeof s.ad.requestAd !== 'function') {
      if (type !== 'rewarded' && typeof callbacks.adFinished === 'function') callbacks.adFinished();
      else if (type === 'rewarded' && typeof callbacks.adError === 'function') callbacks.adError(new Error('SDK unavailable'));
      if (typeof callbacks.onDone === 'function') callbacks.onDone(type !== 'rewarded');
      return false;
    }

    adPlaying = true;
    gameplayStop();
    notifyPauseForAd();
    syncMute();
    emitState();

    try {
      s.ad.requestAd(type, {
        adStarted: () => {
          adPlaying = true;
          syncMute();
          if (typeof callbacks.adStarted === 'function') callbacks.adStarted();
          emitState();
        },
        adFinished: () => done(true),
        adError: (err) => done(false, err),
      });
      return true;
    } catch (e) {
      done(false, e);
      return false;
    }
  }

  // إعلان بداية اللعب (Pre-roll) يُعرض مرة واحدة عند أول دخول للعب داخل بوابة CrazyGames فقط
  function requestPreroll(onProceed) {
    const proceed = () => { if (typeof onProceed === 'function') onProceed(); };
    if (prerollShown || !isPortalActive() || hasAdblock) {
      prerollShown = true;
      proceed();
      return false;
    }
    prerollShown = true;
    lastMidgameAt = Date.now();
    return requestAd('midgame', {
      onDone: () => proceed(),
    });
  }

  // إعلان بين الجولات (Midgame) مع حماية فاصل زمني حتى لا ينزعج اللاعب
  function requestMidgame(onProceed, force = false) {
    const proceed = () => { if (typeof onProceed === 'function') onProceed(); };
    const now = Date.now();
    if (!isPortalActive() || hasAdblock || (!force && now - lastMidgameAt < MIDGAME_COOLDOWN_MS)) {
      proceed();
      return false;
    }
    lastMidgameAt = now;
    return requestAd('midgame', {
      onDone: () => proceed(),
    });
  }

  // إعلان بمكافأة (Rewarded Video): تُمنح الجائزة داخل adFinished فقط
  function requestRewarded({ onStarted, onReward, onError, onDone } = {}) {
    if (!canShowRewarded()) {
      if (typeof onError === 'function') onError(new Error('Rewarded ad unavailable'));
      if (typeof onDone === 'function') onDone(false);
      return false;
    }
    return requestAd('rewarded', {
      adStarted: onStarted,
      onReward,
      adError: onError,
      onDone,
    });
  }

  return {
    init,
    cloudSave,
    getState,
    isPortalActive,
    isAdPlaying: () => adPlaying,
    canShowRewarded,
    addStateListener,
    registerPauseHandler,
    loadingStart,
    loadingStop,
    gameplayStart,
    gameplayStop,
    happytime,
    requestAd,
    requestPreroll,
    requestMidgame,
    requestRewarded,
  };
})();

;
/* ===== js/data.js ===== */
// ===== البيانات المشتركة: الأبعاد، المستويات، القطط، الحفظ =====
const W = 720, H = 1280;       // دقة اللعبة الداخلية (تتمدد لتناسب أي شاشة)
const GROUND_Y = 1150;         // مكان وقوف القط (داخل الأرضية البنفسجية في الخلفية)

// خلفية "الليل" صورة حقيقية. أما الباقي فتدرجات مؤقتة إلى أن نرسم لها خلفيات
const THEMES = {
  night:  { sky: ['#1b1838', '#352a6b'], hill: '#2a2250', ground: '#6a4fd8', fx: 'stars' },
  desert: { sky: ['#ff9a5a', '#ffd9a0'], hill: '#e8955a', ground: '#b5632f', fx: 'sun' },
  sea:    { sky: ['#0a3d62', '#1e90b8'], hill: '#0d6a8f', ground: '#c8b27a', fx: 'bubbles' },
  snow:   { sky: ['#5d7fa8', '#cfe3f5'], hill: '#dfeaf5', ground: '#eef5fb', fx: 'snow' },
  space:  { sky: ['#05051a', '#1a0b3d'], hill: '#2b1b5a', ground: '#3a2c7a', fx: 'warp' },
};

// goals = حدود النجوم الثلاث (تتضاعف النقاط مع الكومبو، وتصعّب العوالم المتقدمة تدريجياً)
const LEVELS = [
  { theme: 'night',  time: 40, spawn: 0.92, bomb: 0.22, fall: [125, 210], goals: [14, 24, 36] },
  { theme: 'desert', time: 45, spawn: 0.86, bomb: 0.27, fall: [145, 240], goals: [19, 32, 46] },
  { theme: 'sea',    time: 45, spawn: 0.80, bomb: 0.30, fall: [160, 270], goals: [22, 38, 55] },
  { theme: 'snow',   time: 50, spawn: 0.74, bomb: 0.33, fall: [175, 295], goals: [27, 44, 62] },
  { theme: 'space',  time: 55, spawn: 0.68, bomb: 0.36, fall: [195, 330], goals: [30, 49, 68] },
];

// القطط: الأسعار بالعملات (العملات المكتسبة = نقاط الجولة)، والقطط الأغلى تمنح هالة بصرية ومكافأة عملات إضافية
const CATS = [
  { key: 'cat',    price: 0,    speed: 280, coinBonus: 0,    aura: null,     tierColor: 0xffc83d },   // Mishmish (الاسم في i18n: cat0). المفتاح 'cat' والفهرس 0 ثابتان للتوافق مع الحفظ
  { key: 'smokey', price: 500,  speed: 280, coinBonus: 0,    aura: 0xb8c6db, tierColor: 0xb8c6db },
  { key: 'shadow', price: 1200, speed: 280, coinBonus: 0.10, aura: 0xa66cff, tierColor: 0xa66cff },
  { key: 'snow',   price: 3000, speed: 280, coinBonus: 0.15, aura: 0x7be8ff, tierColor: 0x7be8ff },
  { key: 'king',   price: 9000, speed: 280, coinBonus: 0.25, aura: 0xffd24a, tierColor: 0xffc83d },   // السرعة نفسها حتى لا يتغير توازن اللعب
];

// أوضاع القط (كل وضعية صورة: assets/cats/<key>_<pose>.png)
const POSES = ['idle', 'happy', 'love', 'run', 'jump', 'cheer', 'scared', 'dizzy'];
// إطارات المشي المتعددة: تُضاف هنا فور توفر صور الأرجل المتحركة (مثال: { cat: ['walk1', 'walk2', 'walk3', 'walk4'] })
const CAT_WALK_FRAMES = {
  cat:    ['walk1', 'walk2', 'walk3', 'walk4'],
  smokey: ['walk1', 'walk2', 'walk3', 'walk4'],
  shadow: ['walk1', 'walk2', 'walk3', 'walk4'],
  snow:   ['walk1', 'walk2', 'walk3', 'walk4'],
  king:   ['walk1', 'walk2', 'walk3', 'walk4'],
};
function catMoveFrame(catKey, phase = 0, scene = null) {
  const frames = CAT_WALK_FRAMES[catKey];
  if (Array.isArray(frames) && frames.length) {
    const idx = Math.abs(Math.floor(phase)) % frames.length;
    const key = catKey + '_' + frames[idx];
    if (!scene || !scene.textures || scene.textures.exists(key)) return key;
  }
  return catKey + '_run';
}

// ===== عشوائية بذرية: نفس البذرة = نفس تسلسل السقوط عند كل اللاعبين (أساس التحدي اليومي) =====
function mulberry32(a) { return function () { a |= 0; a = (a + 0x6D2B79F5) | 0; let t = Math.imul(a ^ (a >>> 15), 1 | a);
  t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; }; }
function seedFromString(s) { let h = 2166136261; for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); } return h >>> 0; }
const dailySeed = () => seedFromString(new Date().toISOString().slice(0, 10));   // لاحقاً: تاريخ الخادم
// جدول السقوط يُبنى كاملاً من البذرة ويعتمد على زمن اللعبة فقط، فلا يتأثر بسرعة الجهاز
function buildSchedule(seed, L) {
  const r = mulberry32(seed), rr = (a, b) => a + r() * (b - a), ri = (a, b) => Math.floor(rr(a, b + 1)), ev = [];
  for (let t = 0.8; t < L.time; t += L.spawn * (1 - 0.34 * t / L.time)) {
    const isBomb = r() < L.bomb;
    const x = ri(70, 650);
    const sp = ri(L.fall[0] * 2, L.fall[1] * 2);
    ev.push({ t, type: isBomb ? 'bomb' : 'cheese', x, sp });
    // موجات أكثر إثارة في النصف الثاني من الجولة
    if (t > L.time * 0.58 && !isBomb && r() < 0.24) {
      const twinX = x > W / 2 ? Math.max(70, x - ri(150, 240)) : Math.min(W - 70, x + ri(150, 240));
      ev.push({ t: t + 0.14, type: r() < L.bomb + 0.12 ? 'bomb' : 'cheese', x: twinX, sp: Math.round(sp * 1.1) });
    }
  }
  for (let t = rr(5.5, 8.5); t < L.time; t += rr(6.5, 10.5)) ev.push({ t, type: 'mouse', x: ri(70, 650), sp: ri(360, 485) });
  return ev.sort((a, b) => a.t - b.t);
}

// ===== الحفظ واللغة =====
const SAVE_KEY = 'catHunterSave_v2';
const DEFAULT_SAVE = { coins: 0, owned: [0], cat: 0, stars: [0, 0, 0, 0, 0], lang: 'en', langChosen: false, music: true, sfx: true, musicVol: 1, sfxVol: 1, storySeen: false, tutorialSeen: false,
  playerName: '', leaderboard: [], bestScores: [0, 0, 0, 0, 0],
  endlessBest: 0, endlessBestTime: 0,
  daily: { last: '', streak: 0 }, missions: { day: '', list: [] },
  challenges: { windowId: '', expiresAt: 0, rerolls: 1, chestClaimed: false, chestReward: 60, list: [] },
  shopSkins: { owned: [], equipped: '' },
  maze: { unlocked: 0, stars: [], bestScores: [], bestTimes: [] },
  achievements: { stats: {}, claimed: [], badge: '', skin: '' } };   // الحقول الجديدة بقيم افتراضية فتبقى الحفظات القديمة صالحة
function loadSave() {
  const base = JSON.parse(JSON.stringify(DEFAULT_SAVE));   // نسخة مستقلة حتى لا تتلوث القيم الافتراضية
  try {
    const raw = JSON.parse(localStorage.getItem(SAVE_KEY));
    if (!raw) return base;
    if (raw.storySeen && raw.langChosen === undefined) raw.langChosen = true;
    return Object.assign(base, raw);
  } catch (e) { return base; }
}
let save = loadSave();
function persist() {
  try { localStorage.setItem(SAVE_KEY, JSON.stringify(save)); } catch (e) {}
  try { if (typeof CG !== 'undefined' && CG.cloudSave) CG.cloudSave(); } catch (e) {}
}
const t = (k) => (I18N[save.lang] && I18N[save.lang][k]) || I18N.en[k] || k;

// ===== المكافأة اليومية والمهام (القيم أولية بانتظار موافقة المالك على التوازن) =====
const DAILY_REWARDS = [10, 15, 20, 30, 40, 60, 100];           // دورة 7 أيام؛ تُصفَّر السلسلة إذا فاتك يوم
// mode: add = تراكمي عبر المستويات، max = أفضل نتيجة في مستوى واحد
const MISSION_POOL = [
  { id: 'cheese', target: 40, reward: 15, mode: 'add' },
  { id: 'mice',   target: 3,  reward: 20, mode: 'add' },
  { id: 'score',  target: 25, reward: 20, mode: 'max' },
  { id: 'plays',  target: 3,  reward: 10, mode: 'add' },
  { id: 'clean',  target: 1,  reward: 25, mode: 'add' },
  { id: 'combo',  target: 10, reward: 20, mode: 'max' },
];

;
/* ===== js/ui.js ===== */
// ===== أدوات الواجهة: نصوص، أزرار ثلاثية الأبعاد، أيقونات متجهية، انتقالات، وقوائم الإعدادات والخريطة =====
const FONT = '"Segoe UI", Tahoma, "Noto Sans Arabic", Arial, sans-serif';

function buzz(ms) { try { if (navigator.vibrate) navigator.vibrate(ms); } catch (e) {} }

// نص بحدود غامقة (يقرأ على أي خلفية، مع إصلاح اتجاه LTR عند التبديل من العربية)
function txt(scene, x, y, str, size, color, o = {}) {
  const noStroke = o.stroke === false;
  const rtl = save.lang === 'ar';
  const tx = scene.add.text(x, y, str, {
    fontFamily: FONT, fontSize: size + 'px', fontStyle: 'bold',
    color: color || '#fff7e6',
    stroke: o.strokeColor || '#2a1a4a',
    strokeThickness: noStroke ? 0 : (o.strokeW !== undefined ? o.strokeW : Math.round(size * 0.14)),
    align: 'center', rtl,
    wordWrap: o.wrap ? { width: o.wrap } : undefined,
  }).setOrigin(o.ox !== undefined ? o.ox : 0.5, o.oy !== undefined ? o.oy : 0.5);
  if (!rtl && tx.context && tx.context.direction !== 'ltr') {
    if (tx.canvas) tx.canvas.dir = 'ltr';
    tx.context.direction = 'ltr';
    if (typeof tx.updateText === 'function') tx.updateText();
  }
  return tx;
}

// انتقال بين المشاهد بتلاشي ناعم
function go(scene, key, data) {
  if (scene._leaving) return;
  scene._leaving = true;
  const cam = scene.cameras.main;
  cam.fadeOut(200, 27, 24, 56);
  cam.once('camerafadeoutcomplete', () => scene.scene.start(key, data));
}
function enter(scene) {
  scene._leaving = false;
  scene.cameras.main.fadeIn(280, 27, 24, 56);
  if (typeof CG !== 'undefined' && scene && scene.scene) {
    const k = scene.scene.key;
    if (k !== 'Game' && k !== 'Maze') CG.gameplayStop();
  }
}

// توليد أيقونات القدرات المؤقتة بالرسم المتجهي في أي مشهد
function ensurePowerupTextures(scene) {
  if (!scene || !scene.textures || typeof scene.textures.exists !== 'function' || typeof scene.textures.createCanvas !== 'function') return;
  const drawOrb = (key, ringCol, bgCol, drawIcon) => {
    if (scene.textures.exists(key)) return;
    const tex = scene.textures.createCanvas(key, 96, 96), c = tex.getContext();
    const rg = c.createRadialGradient(48, 48, 8, 48, 48, 46);
    rg.addColorStop(0, bgCol); rg.addColorStop(0.75, ringCol); rg.addColorStop(1, 'rgba(255,255,255,0)');
    c.fillStyle = rg; c.fillRect(0, 0, 96, 96);
    c.beginPath(); c.arc(48, 48, 33, 0, Math.PI * 2);
    c.fillStyle = '#151038'; c.fill();
    c.lineWidth = 5; c.strokeStyle = ringCol; c.stroke();
    c.beginPath(); c.arc(38, 34, 14, Math.PI * 1.1, Math.PI * 1.8);
    c.strokeStyle = 'rgba(255,255,255,0.45)'; c.lineWidth = 4; c.lineCap = 'round'; c.stroke();
    drawIcon(c);
    tex.refresh();
  };

  drawOrb('pu_shield', '#38bdf8', 'rgba(56,189,248,0.65)', (c) => {
    c.beginPath();
    c.moveTo(48, 26); c.lineTo(66, 34); c.lineTo(64, 52);
    c.quadraticCurveTo(60, 66, 48, 72);
    c.quadraticCurveTo(36, 66, 32, 52);
    c.lineTo(30, 34); c.closePath();
    c.fillStyle = '#67e8f9'; c.fill();
    c.lineWidth = 3; c.strokeStyle = '#ffffff'; c.stroke();
  });

  drawOrb('pu_magnet', '#ff66c4', 'rgba(255,102,196,0.65)', (c) => {
    c.lineWidth = 10; c.lineCap = 'butt';
    c.beginPath(); c.arc(48, 46, 16, 0, Math.PI, false);
    c.strokeStyle = '#ff4d6d'; c.stroke();
    c.fillStyle = '#ff4d6d'; c.fillRect(27, 32, 10, 15); c.fillRect(59, 32, 10, 15);
    c.fillStyle = '#e2e8f0'; c.fillRect(27, 26, 10, 8); c.fillRect(59, 26, 10, 8);
  });

  drawOrb('pu_boost', '#ffc83d', 'rgba(255,200,61,0.7)', (c) => {
    c.beginPath();
    c.moveTo(52, 24); c.lineTo(34, 51); c.lineTo(47, 51);
    c.lineTo(42, 72); c.lineTo(63, 45); c.lineTo(50, 45);
    c.closePath();
    c.fillStyle = '#ffe885'; c.fill();
    c.lineWidth = 2.5; c.strokeStyle = '#ffffff'; c.stroke();
  });
}

// توليد أيقونات أزرار مرسومة يدوياً بظلال ولمعان وحدود داكنة متناسقة مع ui_coin و ui_trophy
function ensureUiIcons(scene) {
  if (!scene || !scene.textures || typeof scene.textures.exists !== 'function' || typeof scene.textures.createCanvas !== 'function') return;

  const paint = (key, fn) => {
    if (scene.textures.exists(key)) return;
    const tex = scene.textures.createCanvas(key, 96, 96), c = tex.getContext();
    c.clearRect(0, 0, 96, 96);
    c.lineJoin = 'round'; c.lineCap = 'round';
    fn(c);
    tex.refresh();
  };

  const INK = '#241004';
  const goldGrad = (c, y1 = 16, y2 = 80) => {
    const g = c.createLinearGradient(0, y1, 0, y2);
    g.addColorStop(0, '#FFF6A8');
    g.addColorStop(0.45, '#FFD629');
    g.addColorStop(1, '#E67A00');
    return g;
  };
  const strokeFill = (c, fill, lw = 6, strokeCol = INK) => {
    c.fillStyle = fill; c.fill();
    c.lineWidth = lw; c.strokeStyle = strokeCol; c.stroke();
  };

  // ▶ زر البدء (مثلث دائري لامع)
  paint('ui_play', (c) => {
    c.beginPath();
    c.moveTo(28, 20); c.quadraticCurveTo(24, 18, 24, 24);
    c.lineTo(24, 72); c.quadraticCurveTo(24, 78, 30, 75);
    c.lineTo(74, 51); c.quadraticCurveTo(79, 48, 74, 45);
    c.closePath();
    const g = c.createLinearGradient(24, 18, 74, 78);
    g.addColorStop(0, '#FFF8BA'); g.addColorStop(0.5, '#FFD028'); g.addColorStop(1, '#F27D00');
    strokeFill(c, g, 6.5);
    c.beginPath(); c.moveTo(31, 28); c.lineTo(54, 41);
    c.lineWidth = 5; c.strokeStyle = 'rgba(255,255,255,0.7)'; c.stroke();
  });

  // 🛒 المتجر (كشك/حقيبة بألوان ذهبية وحمراء)
  paint('ui_shop', (c) => {
    c.beginPath(); c.roundRect(18, 36, 60, 44, 10);
    strokeFill(c, '#FFF2CC', 5.5);
    // مظلة مخططة
    for (let i = 0; i < 4; i++) {
      c.beginPath();
      c.roundRect(14 + i * 17, 16, 17, 24, 6);
      strokeFill(c, i % 2 === 0 ? '#FF473A' : '#FFF8E6', 4.5);
    }
    // شارة جبن صغيرة في الواجهة
    c.beginPath(); c.arc(48, 59, 11, 0, Math.PI * 2);
    strokeFill(c, goldGrad(c, 48, 70), 4);
  });

  // 🗺️ خريطة العوالم (لفافة ورقية بمسار منقّط وعلامة X)
  paint('ui_map', (c) => {
    c.beginPath();
    c.moveTo(14, 26); c.lineTo(36, 18); c.lineTo(60, 26); c.lineTo(82, 18);
    c.lineTo(82, 70); c.lineTo(60, 78); c.lineTo(36, 70); c.lineTo(14, 78);
    c.closePath();
    const g = c.createLinearGradient(14, 18, 82, 78);
    g.addColorStop(0, '#FFF5D1'); g.addColorStop(1, '#E6BA70');
    strokeFill(c, g, 5.5);
    c.lineWidth = 3; c.strokeStyle = 'rgba(138,84,22,0.35)';
    c.beginPath(); c.moveTo(36, 19); c.lineTo(36, 69); c.moveTo(60, 27); c.lineTo(60, 77); c.stroke();
    // مسار منقط
    c.setLineDash([4, 6]); c.lineWidth = 4; c.strokeStyle = '#C95A12';
    c.beginPath(); c.moveTo(24, 58); c.quadraticCurveTo(44, 34, 66, 48); c.stroke();
    c.setLineDash([]);
    // X أحمر
    c.lineWidth = 5; c.strokeStyle = '#E53935';
    c.beginPath(); c.moveTo(60, 38); c.lineTo(72, 50); c.moveTo(72, 38); c.lineTo(60, 50); c.stroke();
  });

  // 🌀 المتاهة (دوامة بوابة زمردية داخل إطار)
  paint('ui_maze', (c) => {
    c.beginPath(); c.arc(48, 48, 34, 0, Math.PI * 2);
    const rg = c.createRadialGradient(48, 48, 4, 48, 48, 34);
    rg.addColorStop(0, '#B8FFF0'); rg.addColorStop(0.5, '#2EE59D'); rg.addColorStop(1, '#0F766E');
    strokeFill(c, rg, 5.5);
    c.lineWidth = 5; c.strokeStyle = '#FFFFFF';
    c.beginPath();
    for (let t = 0; t <= 16; t++) {
      const a = t * 0.55;
      const r = 2 + t * 1.45;
      const px = 48 + Math.cos(a) * r, py = 48 + Math.sin(a) * r;
      if (t === 0) c.moveTo(px, py); else c.lineTo(px, py);
    }
    c.stroke();
  });

  // ⚙️ الإعدادات (ترس كرتوني سميك)
  paint('ui_settings', (c) => {
    c.beginPath();
    for (let i = 0; i < 16; i++) {
      const a = (i * Math.PI) / 8;
      const r = i % 2 === 0 ? 35 : 25;
      const px = 48 + Math.cos(a) * r, py = 48 + Math.sin(a) * r;
      if (i === 0) c.moveTo(px, py); else c.lineTo(px, py);
    }
    c.closePath();
    const g = c.createLinearGradient(0, 14, 0, 82);
    g.addColorStop(0, '#F1F6FF'); g.addColorStop(0.55, '#B6C9E8'); g.addColorStop(1, '#6E85B3');
    strokeFill(c, g, 5.5);
    c.beginPath(); c.arc(48, 48, 12, 0, Math.PI * 2);
    strokeFill(c, goldGrad(c, 36, 60), 4.5);
  });

  // 🎵 الموسيقى (نوتة موسيقية مزدوجة)
  const drawNotes = (c, on) => {
    const fill = on ? goldGrad(c, 16, 80) : '#9BA3B8';
    c.beginPath();
    c.moveTo(35, 62); c.lineTo(35, 22); c.lineTo(72, 16); c.lineTo(72, 56);
    c.lineTo(62, 56); c.lineTo(62, 29); c.lineTo(45, 32); c.lineTo(45, 62);
    c.closePath();
    strokeFill(c, fill, 5);
    c.beginPath(); c.ellipse(31, 67, 13, 10, -0.3, 0, Math.PI * 2); strokeFill(c, fill, 5);
    c.beginPath(); c.ellipse(62, 60, 13, 10, -0.3, 0, Math.PI * 2); strokeFill(c, fill, 5);
    if (!on) {
      c.lineWidth = 8; c.strokeStyle = '#241004'; c.beginPath(); c.moveTo(20, 76); c.lineTo(76, 20); c.stroke();
      c.lineWidth = 4.5; c.strokeStyle = '#FF4D4D'; c.beginPath(); c.moveTo(20, 76); c.lineTo(76, 20); c.stroke();
    }
  };
  paint('ui_music', (c) => drawNotes(c, true));
  paint('ui_music_off', (c) => drawNotes(c, false));

  // 🔊 المؤثرات الصوتية (مكبر صوت بموجات)
  const drawSfx = (c, on) => {
    const g = c.createLinearGradient(16, 24, 54, 72);
    g.addColorStop(0, on ? '#E8F7FF' : '#B8C0D4'); g.addColorStop(1, on ? '#4DA8FF' : '#6A7288');
    c.beginPath();
    c.moveTo(16, 38); c.lineTo(30, 38); c.lineTo(50, 20);
    c.lineTo(50, 76); c.lineTo(30, 58); c.lineTo(16, 58);
    c.closePath();
    strokeFill(c, g, 5.5);
    if (on) {
      c.lineWidth = 6; c.strokeStyle = '#FFD629';
      c.beginPath(); c.arc(52, 48, 14, -0.7, 0.7); c.stroke();
      c.beginPath(); c.arc(52, 48, 25, -0.75, 0.75); c.stroke();
    } else {
      c.lineWidth = 8; c.strokeStyle = '#241004'; c.beginPath(); c.moveTo(60, 34); c.lineTo(80, 62); c.moveTo(80, 34); c.lineTo(60, 62); c.stroke();
      c.lineWidth = 4.5; c.strokeStyle = '#FF4D4D'; c.beginPath(); c.moveTo(60, 34); c.lineTo(80, 62); c.moveTo(80, 34); c.lineTo(60, 62); c.stroke();
    }
  };
  paint('ui_sfx', (c) => drawSfx(c, true));
  paint('ui_sfx_off', (c) => drawSfx(c, false));

  // ❓ زر المساعدة
  paint('ui_help', (c) => {
    c.beginPath(); c.arc(48, 48, 34, 0, Math.PI * 2);
    const g = c.createLinearGradient(0, 14, 0, 82);
    g.addColorStop(0, '#7BE8FF'); g.addColorStop(1, '#1E70EB');
    strokeFill(c, g, 5.5);
    c.fillStyle = '#FFFFFF'; c.strokeStyle = INK; c.lineWidth = 4;
    c.font = 'bold 48px "Segoe UI", Arial, sans-serif';
    c.textAlign = 'center'; c.textBaseline = 'middle';
    c.strokeText('?', 48, 50); c.fillText('?', 48, 50);
  });

  // 📖 القصة (كتاب مفتوح دافئ بعلامة صفراء)
  paint('ui_story', (c) => {
    c.beginPath();
    c.moveTo(48, 28); c.quadraticCurveTo(30, 20, 14, 24); c.lineTo(14, 72); c.quadraticCurveTo(30, 68, 48, 76);
    c.quadraticCurveTo(66, 68, 82, 72); c.lineTo(82, 24); c.quadraticCurveTo(66, 20, 48, 28);
    c.closePath();
    strokeFill(c, '#FFF5D6', 5.5);
    c.lineWidth = 4; c.strokeStyle = '#C98932';
    c.beginPath(); c.moveTo(48, 28); c.lineTo(48, 76); c.stroke();
    // شريط علامة أحمر
    c.beginPath(); c.moveTo(58, 24); c.lineTo(68, 24); c.lineTo(68, 54); c.lineTo(63, 47); c.lineTo(58, 54); c.closePath();
    strokeFill(c, '#FF473A', 3);
  });

  // 🌐 اللغة (كرة أرضية زرقاء لامعة)
  paint('ui_lang', (c) => {
    c.beginPath(); c.arc(48, 48, 33, 0, Math.PI * 2);
    const g = c.createRadialGradient(38, 34, 4, 48, 48, 34);
    g.addColorStop(0, '#8CF0FF'); g.addColorStop(0.55, '#2998FF'); g.addColorStop(1, '#1049B8');
    strokeFill(c, g, 5.5);
    c.lineWidth = 3.5; c.strokeStyle = 'rgba(255,255,255,0.8)';
    c.beginPath(); c.ellipse(48, 48, 16, 32, 0, 0, Math.PI * 2); c.stroke();
    c.beginPath(); c.moveTo(16, 48); c.lineTo(80, 48); c.moveTo(22, 32); c.lineTo(74, 32); c.moveTo(22, 64); c.lineTo(74, 64); c.stroke();
  });

  // ♾️ الوضع اللانهائي (رمز اللانهاية ثلاثي الأبعاد)
  paint('ui_endless', (c) => {
    c.lineCap = 'round';
    c.lineWidth = 17; c.strokeStyle = INK;
    c.beginPath();
    c.moveTo(48, 48); c.bezierCurveTo(64, 24, 82, 24, 82, 48); c.bezierCurveTo(82, 72, 64, 72, 48, 48);
    c.bezierCurveTo(32, 24, 14, 24, 14, 48); c.bezierCurveTo(14, 72, 32, 72, 48, 48);
    c.stroke();
    const g = c.createLinearGradient(14, 24, 82, 72);
    g.addColorStop(0, '#7BE8FF'); g.addColorStop(0.5, '#FFE27A'); g.addColorStop(1, '#FF8A3D');
    c.lineWidth = 10; c.strokeStyle = g;
    c.stroke();
  });

  // 🐱 الوضع الكلاسيكي (شعار تاج/رأس قط ذهبي)
  paint('ui_classic', (c) => {
    c.beginPath();
    c.moveTo(24, 36); c.lineTo(22, 16); c.lineTo(39, 28);
    c.lineTo(57, 28); c.lineTo(74, 16); c.lineTo(72, 36);
    c.quadraticCurveTo(80, 56, 68, 70);
    c.quadraticCurveTo(48, 82, 28, 70);
    c.quadraticCurveTo(16, 56, 24, 36);
    c.closePath();
    strokeFill(c, goldGrad(c, 16, 80), 5.5);
    c.fillStyle = INK;
    c.beginPath(); c.arc(38, 49, 4.5, 0, Math.PI * 2); c.arc(58, 49, 4.5, 0, Math.PI * 2); c.fill();
    c.beginPath(); c.arc(48, 57, 4, 0, Math.PI * 2); c.fillStyle = '#FF5A79'; c.fill();
  });

  // ⏸ إيقاف مؤقت
  paint('ui_pause', (c) => {
    for (const bx of [26, 54]) {
      c.beginPath(); c.roundRect(bx, 20, 16, 56, 7);
      strokeFill(c, '#FFF8E6', 5);
    }
  });

  // ✕ إغلاق
  paint('ui_close', (c) => {
    c.lineWidth = 18; c.strokeStyle = INK;
    c.beginPath(); c.moveTo(26, 26); c.lineTo(70, 70); c.moveTo(70, 26); c.lineTo(26, 70); c.stroke();
    c.lineWidth = 10; c.strokeStyle = '#FF6A6A';
    c.beginPath(); c.moveTo(26, 26); c.lineTo(70, 70); c.moveTo(70, 26); c.lineTo(26, 70); c.stroke();
  });

  // ◀ ▶ أسهم التنقل
  const drawArrow = (c, dir) => {
    c.beginPath();
    if (dir < 0) { c.moveTo(62, 20); c.lineTo(28, 48); c.lineTo(62, 76); }
    else { c.moveTo(34, 20); c.lineTo(68, 48); c.lineTo(34, 76); }
    c.lineWidth = 18; c.strokeStyle = INK; c.stroke();
    c.lineWidth = 10; c.strokeStyle = '#FFF8E6'; c.stroke();
  };
  paint('ui_arrow_left', (c) => drawArrow(c, -1));
  paint('ui_arrow_right', (c) => drawArrow(c, 1));

  // 🔥 العروض
  paint('ui_fire', (c) => {
    c.beginPath();
    c.moveTo(50, 14);
    c.quadraticCurveTo(78, 42, 70, 66);
    c.quadraticCurveTo(64, 82, 48, 82);
    c.quadraticCurveTo(28, 82, 24, 62);
    c.quadraticCurveTo(22, 42, 36, 30);
    c.quadraticCurveTo(38, 42, 44, 42);
    c.quadraticCurveTo(42, 26, 50, 14);
    const g = c.createLinearGradient(0, 14, 0, 82);
    g.addColorStop(0, '#FFF176'); g.addColorStop(0.5, '#FF8F00'); g.addColorStop(1, '#E53935');
    strokeFill(c, g, 5);
  });

  // 🎨 لوحة الألوان (متجر المظاهر)
  paint('ui_palette', (c) => {
    c.beginPath();
    c.ellipse(48, 50, 34, 28, -0.2, 0, Math.PI * 2);
    strokeFill(c, '#FCE3B4', 5.5);
    c.beginPath(); c.arc(62, 58, 7, 0, Math.PI * 2); strokeFill(c, '#1E164A', 3.5);
    const dots = [[32, 40, '#FF4D6D'], [48, 32, '#FFC83D'], [64, 38, '#4CC9F0'], [30, 58, '#58C46B']];
    dots.forEach(([dx, dy, col]) => { c.beginPath(); c.arc(dx, dy, 6.5, 0, Math.PI * 2); strokeFill(c, col, 2.5); });
  });

  // ⚡ صاعقة التحديات
  paint('ui_bolt', (c) => {
    c.beginPath();
    c.moveTo(54, 14); c.lineTo(24, 52); c.lineTo(45, 52);
    c.lineTo(39, 82); c.lineTo(72, 42); c.lineTo(50, 42);
    c.closePath();
    const g = c.createLinearGradient(24, 14, 72, 82);
    g.addColorStop(0, '#B8FFFF'); g.addColorStop(0.5, '#FFE866'); g.addColorStop(1, '#FF9500');
    strokeFill(c, g, 5.5);
  });

  // 🎲 نرد التبديل
  paint('ui_dice', (c) => {
    c.beginPath(); c.roundRect(18, 18, 60, 60, 14);
    strokeFill(c, '#FFFDF5', 5.5);
    [[34, 34], [62, 34], [48, 48], [34, 62], [62, 62]].forEach(([px, py], i) => {
      c.beginPath(); c.arc(px, py, 5.5, 0, Math.PI * 2);
      c.fillStyle = i === 2 ? '#E53935' : '#241004'; c.fill();
    });
  });

  // ✏️ تعديل الاسم
  paint('ui_edit', (c) => {
    c.save(); c.translate(48, 48); c.rotate(-0.78);
    c.beginPath(); c.roundRect(-26, -10, 44, 20, 4); strokeFill(c, '#FFD629', 4.5);
    c.beginPath(); c.moveTo(18, -10); c.lineTo(34, 0); c.lineTo(18, 10); c.closePath(); strokeFill(c, '#FCE3B4', 4.5);
    c.beginPath(); c.moveTo(27, -4); c.lineTo(34, 0); c.lineTo(27, 4); c.closePath(); c.fillStyle = INK; c.fill();
    c.beginPath(); c.roundRect(-34, -10, 10, 20, 4); strokeFill(c, '#FF6B8B', 4.5);
    c.restore();
  });

  // 🗑 مسح النتائج
  paint('ui_trash', (c) => {
    c.beginPath(); c.roundRect(26, 32, 44, 46, 8); strokeFill(c, '#E2E8F0', 5);
    c.beginPath(); c.roundRect(20, 22, 56, 12, 6); strokeFill(c, '#CBD5E1', 5);
    c.beginPath(); c.roundRect(38, 14, 20, 10, 5); strokeFill(c, '#94A3B8', 4.5);
    c.lineWidth = 4; c.strokeStyle = '#64748B';
    c.beginPath(); c.moveTo(39, 42); c.lineTo(39, 68); c.moveTo(48, 42); c.lineTo(48, 68); c.moveTo(57, 42); c.lineTo(57, 68); c.stroke();
  });

  // ⏩ تخطي
  paint('ui_skip', (c) => {
    for (const ox of [20, 46]) {
      c.beginPath(); c.moveTo(ox, 24); c.lineTo(ox + 28, 48); c.lineTo(ox, 72); c.closePath();
      strokeFill(c, '#FFF8E6', 5);
    }
  });

  // ✓ صح
  paint('ui_check', (c) => {
    c.beginPath(); c.moveTo(22, 50); c.lineTo(40, 68); c.lineTo(74, 28);
    c.lineWidth = 18; c.strokeStyle = INK; c.stroke();
    c.lineWidth = 10; c.strokeStyle = '#7FF594'; c.stroke();
  });

  // شعارات الأعلام المستديرة النظيفة (تعمل بنفس الشكل على جميع الأجهزة والأنظمة)
  const drawFlag = (key, fn) => paint(key, (c) => {
    c.save();
    c.beginPath(); c.arc(48, 48, 34, 0, Math.PI * 2); c.clip();
    fn(c);
    c.restore();
    c.beginPath(); c.arc(48, 48, 34, 0, Math.PI * 2);
    c.lineWidth = 5; c.strokeStyle = '#FFFFFF'; c.stroke();
    c.beginPath(); c.arc(48, 48, 36.5, 0, Math.PI * 2);
    c.lineWidth = 3; c.strokeStyle = INK; c.stroke();
  });
  drawFlag('flag_ar', (c) => {
    c.fillStyle = '#007A3D'; c.fillRect(10, 10, 76, 76);
    c.fillStyle = '#FFFFFF'; c.fillRect(28, 43, 40, 5); c.fillRect(34, 34, 28, 5);
  });
  drawFlag('flag_en', (c) => {
    c.fillStyle = '#012169'; c.fillRect(10, 10, 76, 76);
    c.strokeStyle = '#FFFFFF'; c.lineWidth = 12;
    c.beginPath(); c.moveTo(12, 12); c.lineTo(84, 84); c.moveTo(84, 12); c.lineTo(12, 84); c.stroke();
    c.strokeStyle = '#C8102E'; c.lineWidth = 6;
    c.beginPath(); c.moveTo(12, 12); c.lineTo(84, 84); c.moveTo(84, 12); c.lineTo(12, 84); c.stroke();
    c.fillStyle = '#FFFFFF'; c.fillRect(10, 39, 76, 18); c.fillRect(39, 10, 18, 76);
    c.fillStyle = '#C8102E'; c.fillRect(10, 43, 76, 10); c.fillRect(43, 10, 10, 76);
  });
  drawFlag('flag_fr', (c) => {
    c.fillStyle = '#0055A4'; c.fillRect(10, 10, 26, 76);
    c.fillStyle = '#FFFFFF'; c.fillRect(36, 10, 24, 76);
    c.fillStyle = '#EF4135'; c.fillRect(60, 10, 26, 76);
  });
  drawFlag('flag_es', (c) => {
    c.fillStyle = '#AA151B'; c.fillRect(10, 10, 76, 20); c.fillRect(10, 66, 76, 20);
    c.fillStyle = '#F1BF00'; c.fillRect(10, 30, 76, 36);
  });
}

// زر ثلاثي الأبعاد كرتوني: إطار غامق، بروز سفلي، لمعان علوي، وأيقونة مدمجة تلقائياً
function makeButton(scene, x, y, w, h, label, o, cb) {
  o = o || {};
  const c = scene.add.container(x, y);
  const g = scene.add.graphics();
  const col = o.color !== undefined ? o.color : 0xffc83d;
  const shade = o.shade !== undefined ? o.shade : 0xb57a10;
  const borderCol = o.borderColor !== undefined ? o.borderColor : 0x1a0e36;
  const r = o.shape === 'pill' ? h * 0.46 : Math.min(h * 0.34, 28);
  const lip = Math.max(6, Math.round(h * 0.1));

  // طبقة البروز السفلية + الإطار الداكن
  g.fillStyle(shade, 1).fillRoundedRect(-w / 2, -h / 2 + lip, w, h, r);
  g.lineStyle(3.5, borderCol, 0.92).strokeRoundedRect(-w / 2, -h / 2 + lip, w, h, r);

  // الوجه الرئيسي للزر + لمعان علوي + إطار غامق
  g.fillStyle(col, 1).fillRoundedRect(-w / 2, -h / 2, w, h, r);
  g.fillStyle(0xffffff, 0.30).fillRoundedRect(-w / 2 + 8, -h / 2 + 5, w - 16, Math.max(10, h * 0.28), Math.max(6, r * 0.5));
  g.lineStyle(2, 0xffffff, 0.25).strokeRoundedRect(-w / 2 + 3, -h / 2 + 3, w - 6, h - 6, Math.max(4, r - 3));
  g.lineStyle(3.5, borderCol, 0.95).strokeRoundedRect(-w / 2, -h / 2, w, h, r);

  const labelStr = label !== undefined && label !== null ? String(label) : '';
  c.label = txt(scene, 0, -1, labelStr, o.size || 46, o.textColor || '#3b2a00', { stroke: false });
  c.add([g, c.label]);

  const hasIcon = o.icon && scene.textures && typeof scene.textures.exists === 'function' && scene.textures.exists(o.icon);
  if (hasIcon) {
    const ic = scene.add.image(0, -1, o.icon);
    const nat = Math.max(ic.width || 96, ic.height || 96);
    const targetSz = o.iconSize || Math.round(h * 0.56);
    const sc = o.iconScale !== undefined ? o.iconScale : (targetSz / nat);
    ic.setScale(sc);
    if (o.iconTint !== undefined) ic.setTint(o.iconTint);
    c.icon = ic;
    c.add(ic);

    if (!labelStr) {
      ic.setPosition(0, -1);
      c.label.setVisible(false);
    } else {
      const iconW = nat * sc;
      const gap = o.iconGap !== undefined ? o.iconGap : 10;
      const lblW = Math.min(c.label.width || 0, Math.max(20, w - iconW - gap - 22));
      const totalW = iconW + gap + lblW;
      const rtl = save.lang === 'ar';
      const iconRight = o.iconSide ? (o.iconSide === 'right') : rtl;
      if (iconRight) {
        ic.x = totalW / 2 - iconW / 2;
        c.label.x = -totalW / 2 + lblW / 2;
      } else {
        ic.x = -totalW / 2 + iconW / 2;
        c.label.x = totalW / 2 - lblW / 2;
      }
    }
  }

  c.setSize(w, h + lip).setInteractive({ useHandCursor: true });
  c.on('pointerdown', () => scene.tweens.add({ targets: c, scaleX: 0.93, scaleY: 0.93, duration: 70 }));
  c.on('pointerout', () => scene.tweens.add({ targets: c, scaleX: 1, scaleY: 1, duration: 90 }));
  c.on('pointerup', () => {
    scene.tweens.add({ targets: c, scaleX: 1, scaleY: 1, duration: 140, ease: 'Back.Out' });
    Sound.play('click'); buzz(10);
    scene.time.delayedCall(90, cb);
  });
  return c;
}

function coinBadge(scene) {
  const c = scene.add.container(W - 30, 62);
  const g = scene.add.graphics()
    .fillStyle(0x100c2b, 0.72).fillRoundedRect(-200, -34, 200, 68, 34)
    .lineStyle(3, 0xffc83d, 0.85).strokeRoundedRect(-200, -34, 200, 68, 34);
  if (scene.textures.exists('ui_coin')) c.add([g, scene.add.image(-168, 0, 'ui_coin').setScale(0.36), txt(scene, -88, 0, String(save.coins), 36, '#ffc83d', { stroke: false })]);
  else c.add([g, txt(scene, -100, 0, String(save.coins), 36, '#ffc83d', { stroke: false })]);
  return c;
}

// ===== قائمة إعدادات الصوت داخل اللعبة (التحكم العام + الموسيقى + المؤثرات + مستوى الصوت) =====
function openSettingsModal(scene, opts = {}) {
  if (scene._settingsModal) return;
  const sKey = scene.scene && scene.scene.key;
  const isInGame = sKey === 'Game' || sKey === 'Maze';
  const wasPaused = !!scene.paused;
  if (isInGame && !scene.over) {
    scene.paused = true;
    if (sKey === 'Maze' && scene.tweens && scene.tweens.pauseAll) scene.tweens.pauseAll();
  }

  const level = opts.musicLevel !== undefined ? opts.musicLevel : (isInGame && scene.lvl !== undefined ? scene.lvl : -1);
  const M = (scene._settingsModal = scene.add.container(0, 0).setDepth(100));

  const dim = scene.add.rectangle(0, 0, W, H, 0x08061a, 0.82).setOrigin(0).setInteractive();
  M.add(dim);

  const pg = scene.add.graphics();
  pg.fillStyle(0x1d1850, 0.98).fillRoundedRect(46, 220, W - 92, 820, 38);
  pg.lineStyle(5, 0xffc83d, 1).strokeRoundedRect(46, 220, W - 92, 820, 38);
  M.add(pg);

  const hasGear = scene.textures.exists('ui_settings');
  if (hasGear) M.add(scene.add.image(W / 2 - 175, 286, 'ui_settings').setScale(44 / 96));
  M.add(txt(scene, W / 2 + (hasGear ? 20 : 0), 286, t('audioSettings'), 44, '#ffc83d', { strokeColor: '#4a2400' }));

  const dyn = scene.add.container(0, 0);
  M.add(dyn);

  const drawVolRow = (cx, y, vol, activeColor, onChange) => {
    const step = 0.25;
    const dec = makeButton(scene, cx - 160, y, 64, 52, '−',
      { size: 32, color: 0x8a7bd8, shade: 0x4b3c99, textColor: '#ffffff' },
      () => onChange(Math.max(0, Math.round((vol - step) * 100) / 100)));
    const inc = makeButton(scene, cx + 160, y, 64, 52, '+',
      { size: 32, color: 0x8a7bd8, shade: 0x4b3c99, textColor: '#ffffff' },
      () => onChange(Math.min(1, Math.round((vol + step) * 100) / 100)));
    dyn.add([dec, inc]);

    const barG = scene.add.graphics();
    dyn.add(barG);
    const bars = 4;
    for (let i = 0; i < bars; i++) {
      const targetVol = (i + 1) * step;
      const filled = vol >= targetVol - 0.01;
      const bx = cx - 102 + i * 52;
      barG.fillStyle(filled ? activeColor : 0x2b2560, 1).fillRoundedRect(bx, y - 15, 44, 30, 8);
      barG.lineStyle(2, 0xffffff, filled ? 0.55 : 0.2).strokeRoundedRect(bx, y - 15, 44, 30, 8);
      const hit = scene.add.rectangle(bx + 22, y, 46, 36, 0x000000, 0).setInteractive({ useHandCursor: true });
      hit.on('pointerup', () => onChange(targetVol));
      dyn.add(hit);
    }
    dyn.add(txt(scene, cx, y + 32, Math.round(vol * 100) + '%', 20, '#cfcaff', { stroke: false }));
  };

  const renderBody = () => {
    dyn.removeAll(true);
    const st = Sound.getState ? Sound.getState() : {
      allEnabled: Sound.isAllEnabled(),
      music: Sound.isMusicEnabled(),
      sfx: Sound.isSfxEnabled(),
      musicVol: Sound.getMusicVolume(),
      sfxVol: Sound.getSfxVolume(),
    };
    const allOn = st.allEnabled, musOn = st.music, sfxOn = st.sfx;

    // 1) زر التحكم العام بالصوت
    const rg = scene.add.graphics();
    rg.fillStyle(0x282166, 0.95).fillRoundedRect(78, 345, W - 156, 118, 26);
    rg.lineStyle(3, allOn ? 0x58c46b : 0xe5484d, 0.9).strokeRoundedRect(78, 345, W - 156, 118, 26);
    dyn.add(rg);
    const sfxKey = allOn ? 'ui_sfx' : 'ui_sfx_off';
    if (scene.textures.exists(sfxKey)) dyn.add(scene.add.image(122, 404, sfxKey).setScale(46 / 96));
    dyn.add(txt(scene, 272, 404, t('masterAudio'), 32, '#ffffff', { stroke: false }));
    dyn.add(makeButton(scene, 525, 404, 178, 72, allOn ? t('on') : t('off'),
      allOn
        ? { size: 30, color: 0x58c46b, shade: 0x2d7a3d, textColor: '#ffffff' }
        : { size: 30, color: 0xe5484d, shade: 0x8f1f24, textColor: '#ffffff' },
      () => { Sound.toggleAll(level); renderBody(); }));

    // 2) الموسيقى التصويرية
    const mg = scene.add.graphics();
    mg.fillStyle(0x231d59, 0.92).fillRoundedRect(78, 492, W - 156, 198, 26);
    mg.lineStyle(2.5, musOn ? 0xffc83d : 0x4b3c99, 1).strokeRoundedRect(78, 492, W - 156, 198, 26);
    dyn.add(mg);
    const musKey = musOn ? 'ui_music' : 'ui_music_off';
    if (scene.textures.exists(musKey)) dyn.add(scene.add.image(122, 548, musKey).setScale(44 / 96));
    dyn.add(txt(scene, 272, 548, t('musicLabel'), 32, musOn ? '#fff7e6' : '#a8a2d2', { stroke: false }));
    dyn.add(makeButton(scene, 525, 548, 178, 68, musOn ? t('on') : t('off'),
      musOn
        ? { size: 28, color: 0xffc83d, shade: 0xb57a10, textColor: '#3b2a00' }
        : { size: 28, color: 0x6d6a80, shade: 0x3f3d50, textColor: '#dddddd' },
      () => { Sound.toggleMusic(level); renderBody(); }));
    drawVolRow(W / 2, 626, st.musicVol, 0xffc83d, (v) => {
      Sound.init();
      Sound.setMusicVolume(v);
      if (v > 0) Sound.startMusic(level);
      renderBody();
    });

    // 3) المؤثرات الصوتية
    const sg = scene.add.graphics();
    sg.fillStyle(0x231d59, 0.92).fillRoundedRect(78, 718, W - 156, 198, 26);
    sg.lineStyle(2.5, sfxOn ? 0x58c46b : 0x4b3c99, 1).strokeRoundedRect(78, 718, W - 156, 198, 26);
    dyn.add(sg);
    const sfxRowKey = sfxOn ? 'ui_sfx' : 'ui_sfx_off';
    if (scene.textures.exists(sfxRowKey)) dyn.add(scene.add.image(122, 774, sfxRowKey).setScale(44 / 96));
    dyn.add(txt(scene, 272, 774, t('sfxLabel'), 30, sfxOn ? '#fff7e6' : '#a8a2d2', { stroke: false }));
    dyn.add(makeButton(scene, 525, 774, 178, 68, sfxOn ? t('on') : t('off'),
      sfxOn
        ? { size: 28, color: 0x58c46b, shade: 0x2d7a3d, textColor: '#ffffff' }
        : { size: 28, color: 0x6d6a80, shade: 0x3f3d50, textColor: '#dddddd' },
      () => { Sound.toggleSfx(true); renderBody(); }));
    drawVolRow(W / 2, 852, st.sfxVol, 0x58c46b, (v) => {
      Sound.init();
      Sound.setSfxVolume(v);
      if (v > 0) Sound.play('cheese');
      renderBody();
    });
  };

  renderBody();

  const closeModal = () => {
    if (scene.input && scene.input.keyboard) scene.input.keyboard.off('keydown-ESC', onEsc);
    if (!scene._settingsModal) return;
    scene._settingsModal.destroy(true);
    scene._settingsModal = null;
    if (isInGame && !wasPaused && !scene.over) {
      scene.paused = false;
      if (sKey === 'Maze' && scene.tweens && scene.tweens.resumeAll) scene.tweens.resumeAll();
    }
    if (typeof opts.onClose === 'function') opts.onClose();
  };

  const onEsc = () => closeModal();
  if (scene.input && scene.input.keyboard) {
    scene.input.keyboard.once('keydown-ESC', onEsc);
    if (scene.events) scene.events.once('shutdown', () => scene.input.keyboard.off('keydown-ESC', onEsc));
  }

  M.add(makeButton(scene, W - 96, 266, 56, 52, '',
    { icon: 'ui_close', iconSize: 28, color: 0x6d6a80, shade: 0x3f3d50, textColor: '#ffffff' }, closeModal));
  M.add(makeButton(scene, W / 2, 976, 300, 82, t('close'),
    { size: 38, color: 0x8a7bd8, shade: 0x4b3c99, textColor: '#ffffff' }, closeModal));
}

// ===== دليل اللعب التفاعلي للمستخدم الجديد عند أول تشغيل =====
function openTutorialOverlay(scene, opts = {}) {
  if (scene._tutorialModal) return;
  let step = 0;
  const totalSteps = 4;
  const M = (scene._tutorialModal = scene.add.container(0, 0).setDepth(110));

  const dim = scene.add.rectangle(0, 0, W, H, 0x070518, 0.86).setOrigin(0).setInteractive();
  M.add(dim);

  const pg = scene.add.graphics();
  pg.fillStyle(0x1d1850, 0.98).fillRoundedRect(38, 175, W - 76, 890, 38);
  pg.lineStyle(5, 0xffc83d, 1).strokeRoundedRect(38, 175, W - 76, 890, 38);
  M.add(pg);

  if (scene.textures.exists('ui_classic')) M.add(scene.add.image(W / 2 - 205, 238, 'ui_classic').setScale(44 / 96));
  M.add(txt(scene, W / 2 - 42, 238, t('tutTitle'), 40, '#ffc83d', { strokeColor: '#4a2400' }));

  const finishTut = () => {
    if (!scene._tutorialModal) return;
    save.tutorialSeen = true;
    persist();
    scene._tutorialModal.destroy(true);
    scene._tutorialModal = null;
    if (typeof opts.onFinish === 'function') opts.onFinish();
  };

  M.add(makeButton(scene, W - 128, 236, 134, 54, t('skip'),
    { icon: 'ui_skip', iconSize: 22, size: 24, color: 0x6d6a80, shade: 0x3f3d50, textColor: '#ffffff' }, finishTut));

  const dyn = scene.add.container(0, 0);
  M.add(dyn);

  const renderStep = () => {
    dyn.removeAll(true);

    const dg = scene.add.graphics();
    for (let i = 0; i < totalSteps; i++) {
      dg.fillStyle(i === step ? 0xffc83d : 0x4b3c99, 1).fillCircle(W / 2 + (i - 1.5) * 34, 304, i === step ? 10 : 7);
    }
    dyn.add(dg);

    const titleKeys = ['tutDragTitle', 'tutCatchTitle', 'tutBombTitle', 'tutWinTitle'];
    const descKeys = ['tutDragDesc', 'tutCatchDesc', 'tutBombDesc', 'tutWinDesc'];

    dyn.add(txt(scene, W / 2, 368, t(titleKeys[step]), 40, '#fff7e6', { strokeColor: '#2a1a4a', wrap: 580 }));
    dyn.add(txt(scene, W / 2, 444, t(descKeys[step]), 26, '#dcd6ff', { stroke: false, wrap: 570 }));

    const box = scene.add.graphics();
    box.fillStyle(0x130f38, 0.92).fillRoundedRect(74, 505, W - 148, 340, 28);
    box.lineStyle(3, 0x6a4fd8, 0.9).strokeRoundedRect(74, 505, W - 148, 340, 28);
    dyn.add(box);

    if (step === 0) {
      const ground = scene.add.graphics();
      ground.fillStyle(0x352a6b, 1).fillRoundedRect(94, 760, W - 188, 54, 18);
      ground.fillStyle(0x6a4fd8, 1).fillRect(104, 760, W - 208, 6);
      dyn.add(ground);

      const catKey = (CATS[save.cat] || CATS[0]).key;
      const sh = scene.add.image(W / 2, 772, 'shadow').setScale(0.75);
      const demoCat = scene.add.image(W / 2, 766, catKey + '_idle').setOrigin(0.5, 1).setScale(185 / 401);
      const finger = txt(scene, W / 2, 610, '◀   ●   ▶', 36, '#ffc83d', { strokeColor: '#130f38', strokeW: 6 });
      const okTxt = txt(scene, W / 2, 548, '', 32, '#58c46b', { strokeColor: '#130f38', strokeW: 6 }).setAlpha(0);
      scene.tweens.add({ targets: finger, x: W / 2 + 90, duration: 900, yoyo: true, repeat: -1, ease: 'Sine.InOut' });

      const zone = scene.add.rectangle(W / 2, 675, W - 156, 320, 0x000000, 0.001).setInteractive({ useHandCursor: true });
      let movedDist = 0, celebrated = false, lastX = W / 2;
      const moveCat = (px) => {
        const nx = Phaser.Math.Clamp(px, 148, W - 148);
        const dx = nx - demoCat.x;
        if (Math.abs(dx) > 2) {
          demoCat.setFlipX(dx < 0);
          demoCat.setTexture(catKey + '_run');
          movedDist += Math.abs(nx - lastX);
          lastX = nx;
        }
        demoCat.x = nx;
        sh.x = nx;
        if (!celebrated && movedDist > 90) {
          celebrated = true;
          Sound.play('cheese');
          okTxt.setText('✓ ' + t('tutGreat')).setAlpha(1);
          finger.setAlpha(0.25);
          demoCat.setTexture(catKey + '_happy');
        }
      };
      zone.on('pointerdown', (p) => moveCat(p.x));
      zone.on('pointermove', (p) => { if (p.isDown) moveCat(p.x); });
      zone.on('pointerup', () => { if (celebrated) demoCat.setTexture(catKey + '_idle'); });
      dyn.add([zone, sh, demoCat, finger, okTxt]);
    } else if (step === 1) {
      dyn.add(txt(scene, W / 2, 542, t('tutTapTry'), 24, '#ffe9a8', { stroke: false }));
      const mkDemo = (cx, tex, sc, ptsLabel, soundName, tint) => {
        const card = scene.add.graphics();
        card.fillStyle(0x231d59, 1).fillRoundedRect(cx - 115, 578, 230, 232, 24);
        card.lineStyle(3, tint, 0.9).strokeRoundedRect(cx - 115, 578, 230, 232, 24);
        const img = scene.add.image(cx, 668, tex).setScale(sc).setInteractive({ useHandCursor: true });
        scene.tweens.add({ targets: img, y: 654, duration: 800, yoyo: true, repeat: -1, ease: 'Sine.InOut' });
        const lbl = txt(scene, cx, 772, ptsLabel, 34, '#ffc83d', { strokeColor: '#130f38', strokeW: 6 });
        img.on('pointerdown', () => {
          Sound.init(); Sound.play(soundName); buzz(15);
          scene.tweens.add({ targets: img, scale: sc * 1.24, duration: 100, yoyo: true });
          const pop = txt(scene, cx, 610, ptsLabel, 44, '#ffffff', { strokeColor: '#4a2400' }).setDepth(115);
          scene.tweens.add({ targets: pop, y: 530, alpha: 0, duration: 650, onComplete: () => pop.destroy() });
        });
        dyn.add([card, img, lbl]);
      };
      mkDemo(W / 2 - 135, 'cheese', 0.62, '+1', 'cheese', 0xffc83d);
      mkDemo(W / 2 + 135, 'mouse', 0.56, '+5  (+3)', 'mouse', 0xff8fb1);
    } else if (step === 2) {
      const bomb = scene.add.image(W / 2 - 125, 675, 'bomb').setScale(0.75);
      scene.tweens.add({ targets: bomb, angle: { from: -10, to: 10 }, duration: 420, yoyo: true, repeat: -1 });
      dyn.add(bomb);
      dyn.add(txt(scene, W / 2 - 125, 785, '-1 ♥', 36, '#ff6a6a', { strokeColor: '#130f38', strokeW: 6 }));

      const hasHeart = scene.textures.exists('ui_heart');
      const hasHeartOff = scene.textures.exists('ui_heart_off');
      for (let i = 0; i < 3; i++) {
        const hx = W / 2 + 55 + i * 70;
        const h = scene.add.image(hx, 675, (i === 2 && hasHeartOff) ? 'ui_heart_off' : (hasHeart ? 'ui_heart' : 'heart'))
          .setScale(hasHeart ? 0.48 : 0.9);
        if (i === 2 && !hasHeartOff) h.setAlpha(0.35);
        dyn.add(h);
      }
      dyn.add(txt(scene, W / 2 + 125, 785, '♥  ♥  ✕', 30, '#ffd0d0', { stroke: false }));
    } else {
      const rows = [
        ['8+', 'x2', 0xff9a3d],
        ['16+', 'x3', 0xffc83d],
      ];
      rows.forEach(([a, b, col], idx) => {
        const ry = 582 + idx * 78;
        const rg = scene.add.graphics();
        rg.fillStyle(0x251f60, 1).fillRoundedRect(120, ry - 26, W - 240, 54, 18);
        rg.lineStyle(2, col, 1).strokeRoundedRect(120, ry - 26, W - 240, 54, 18);
        dyn.add([rg]);
        if (scene.textures.exists('ui_fire')) dyn.add(scene.add.image(168, ry, 'ui_fire').setScale(34 / 96));
        dyn.add([txt(scene, 255, ry, a, 30, '#ffffff', { stroke: false }), txt(scene, 490, ry, b, 34, '#ffc83d', { stroke: false })]);
      });

      const hasStar = scene.textures.exists('ui_star');
      for (let k = 0; k < 3; k++) {
        const sx = W / 2 + (k - 1) * 90;
        const st = scene.add.image(sx, 760, hasStar ? 'ui_star' : 'star').setScale(hasStar ? 0.62 : 1.2);
        if (!hasStar) st.setTint(0xffc83d);
        scene.tweens.add({ targets: st, scale: (hasStar ? 0.62 : 1.2) * 1.15, duration: 550, delay: k * 140, yoyo: true, repeat: -1 });
        dyn.add(st);
      }
    }

    if (step > 0) {
      dyn.add(makeButton(scene, W / 2 - 145, 962, 180, 82, t('back'),
        { icon: 'ui_arrow_left', iconSize: 28, iconSide: 'left', size: 28, color: 0x8a7bd8, shade: 0x4b3c99, textColor: '#ffffff' },
        () => { step--; renderStep(); }));
    }
    const isLast = step === totalSteps - 1;
    dyn.add(makeButton(scene, step > 0 ? W / 2 + 95 : W / 2, 962, step > 0 ? 280 : 380, 86,
      isLast ? t('play') : t('next'),
      isLast
        ? { icon: 'ui_play', iconSize: 38, size: 38, color: 0x58c46b, shade: 0x2d7a3d, textColor: '#ffffff' }
        : { icon: 'ui_arrow_right', iconSize: 30, iconSide: 'right', size: 34 },
      () => {
        if (isLast) finishTut();
        else { step++; renderStep(); }
      }));
  };

  renderStep();
}

// ===== خريطة العوالم التفاعلية: تتبع التقدم عبر العوالم الخمسة وفتحها عند إكمال المستويات =====
const WorldMap = {
  isUnlocked(i) {
    return i === 0 || (Array.isArray(save.stars) && (save.stars[i - 1] || 0) > 0);
  },
  progress() {
    let unlockedCount = 0, completedCount = 0, totalStars = 0, currentWorld = 0;
    LEVELS.forEach((_, i) => {
      const s = (Array.isArray(save.stars) && save.stars[i]) || 0;
      totalStars += s;
      if (s > 0) completedCount++;
      if (this.isUnlocked(i)) { unlockedCount++; currentWorld = i; }
    });
    return {
      unlockedCount,
      completedCount,
      totalWorlds: LEVELS.length,
      totalStars,
      maxStars: LEVELS.length * 3,
      currentWorld,
    };
  },
};

function openWorldMapModal(scene, opts = {}) {
  if (scene._worldMapModal) return;
  const prog = WorldMap.progress();
  let selected = opts.selected !== undefined ? opts.selected : prog.currentWorld;
  const M = (scene._worldMapModal = scene.add.container(0, 0).setDepth(105));

  M.add(scene.add.rectangle(0, 0, W, H, 0x070518, 0.86).setOrigin(0).setInteractive());

  const pg = scene.add.graphics();
  pg.fillStyle(0x1d1850, 0.98).fillRoundedRect(30, 88, W - 60, 1104, 38);
  pg.lineStyle(5, 0xffc83d, 1).strokeRoundedRect(30, 88, W - 60, 1104, 38);
  M.add(pg);

  const hasMapIcon = scene.textures.exists('ui_map');
  if (hasMapIcon) M.add(scene.add.image(W / 2 - 200, 142, 'ui_map').setScale(44 / 96));
  M.add(txt(scene, W / 2 + (hasMapIcon ? 18 : 0), 142, t('worldMapTitle'), 40, '#ffc83d', { strokeColor: '#4a2400' }));

  // شريط التقدم العام عبر العوالم الخمسة والنجوم
  const sb = scene.add.graphics();
  sb.fillStyle(0x282166, 0.95).fillRoundedRect(60, 184, W - 120, 86, 24);
  sb.lineStyle(2, 0x6a4fd8, 1).strokeRoundedRect(60, 184, W - 120, 86, 24);
  const pct = prog.totalStars / prog.maxStars;
  sb.fillStyle(0x110d30, 0.85).fillRoundedRect(88, 236, W - 176, 18, 9);
  if (pct > 0) sb.fillStyle(0x58c46b, 1).fillRoundedRect(88, 236, Math.max(18, (W - 176) * pct), 18, 9);
  M.add(sb);
  if (scene.textures.exists('ui_lang')) M.add(scene.add.image(96, 212, 'ui_lang').setScale(30 / 96));
  M.add(txt(scene, 224, 212, t('worldsUnlocked') + ': ' + prog.unlockedCount + '/' + prog.totalWorlds, 23, '#ffffff', { stroke: false }));
  if (scene.textures.exists('ui_star')) M.add(scene.add.image(426, 212, 'ui_star').setScale(28 / 128));
  M.add(txt(scene, 535, 212, t('totalStarsLabel') + ': ' + prog.totalStars + '/' + prog.maxStars, 23, '#ffc83d', { stroke: false }));

  const dyn = scene.add.container(0, 0);
  M.add(dyn);

  const nodes = [[190, 880], [530, 755], [190, 625], [530, 495], [360, 365]];
  const icons = { night: '1', desert: '2', sea: '3', snow: '4', space: '5' };
  const closeModal = () => {
    if (!scene._worldMapModal) return;
    scene._worldMapModal.destroy(true);
    scene._worldMapModal = null;
    if (typeof opts.onClose === 'function') opts.onClose();
  };

  const render = () => {
    dyn.removeAll(true);
    const mapBg = scene.add.graphics();
    mapBg.fillStyle(0x120e38, 0.96).fillRoundedRect(56, 286, W - 112, 650, 28);
    mapBg.lineStyle(3, 0x4b3c99, 1).strokeRoundedRect(56, 286, W - 112, 650, 28);
    dyn.add(mapBg);

    const path = scene.add.graphics();
    for (let i = 0; i < LEVELS.length - 1; i++) {
      const [x1, y1] = nodes[i], [x2, y2] = nodes[i + 1];
      const openNext = WorldMap.isUnlocked(i + 1);
      for (let k = 1; k < 10; k++) {
        const f = k / 10;
        const px = x1 + (x2 - x1) * f;
        const py = y1 + (y2 - y1) * f - Math.sin(f * Math.PI) * 22;
        path.fillStyle(openNext ? 0xffc83d : 0x5c5785, openNext ? 0.95 : 0.45).fillCircle(px, py, openNext ? 6 : 5);
      }
    }
    dyn.add(path);

    const hasIsl = (th) => scene.textures.exists('island_' + th);
    const hasStar = scene.textures.exists('ui_star') && scene.textures.exists('ui_star_off');
    const hasLock = scene.textures.exists('ui_lock');

    LEVELS.forEach((L, i) => {
      const [nx, ny] = nodes[i];
      const open = WorldMap.isUnlocked(i);
      const stars = (Array.isArray(save.stars) && save.stars[i]) || 0;
      const isSel = selected === i;
      const isCur = prog.currentWorld === i;
      const th = THEMES[L.theme];
      const nc = scene.add.container(nx, ny);

      if (isSel) {
        const halo = scene.add.circle(0, 0, 62, 0xffc83d, 0.16).setStrokeStyle(4, 0xffc83d);
        nc.add(halo);
      }
      if (isCur && !isSel) {
        const pulse = scene.add.circle(0, 0, 56, 0x7be8ff, 0).setStrokeStyle(3, 0x7be8ff, 0.8);
        nc.add(pulse);
        scene.tweens.add({ targets: pulse, scale: 1.25, alpha: 0, duration: 1100, repeat: -1 });
      }

      if (hasIsl(L.theme)) {
        nc.add(scene.add.image(0, 4, 'island_' + L.theme).setScale(128 / 320).setTint(open ? 0xffffff : 0x7a769c));
      } else {
        const cg = scene.add.graphics();
        cg.fillStyle(open ? Phaser.Display.Color.HexStringToColor(th.ground).color : 0x3f3d50, 1).fillCircle(0, 0, 44);
        cg.lineStyle(4, open ? 0xffc83d : 0x6d6a80, 1).strokeCircle(0, 0, 44);
        nc.add(cg);
        nc.add(txt(scene, 0, -2, icons[L.theme] || String(i + 1), 34, '#ffffff', { stroke: false }));
      }

      if (!open) {
        if (hasLock) nc.add(scene.add.image(34, -28, 'ui_lock').setScale(34 / 128));
        else nc.add(txt(scene, 34, -28, '×', 26, '#ffffff', { stroke: false }));
      } else if (stars > 0) {
        if (scene.textures.exists('ui_check')) nc.add(scene.add.image(38, -28, 'ui_check').setScale(26 / 96));
        else nc.add(txt(scene, 38, -28, '✓', 24, '#58c46b', { strokeColor: '#130f38', strokeW: 5 }));
      }

      if (isCur) {
        const ck = (CATS[save.cat] || CATS[0]).key;
        if (scene.textures.exists(ck + '_idle')) {
          nc.add(scene.add.image(-64, 24, ck + '_idle').setOrigin(0.5, 1).setScale(86 / 401));
        }
      }

      nc.add(txt(scene, 0, -56, (i + 1) + '. ' + t('lv' + i), 23, open ? '#fff7e6' : '#a8a2cc', { strokeColor: '#120e38', strokeW: 6 }));
      if (hasStar) {
        for (let k = 0; k < 3; k++) nc.add(scene.add.image((k - 1) * 28, 52, k < stars ? 'ui_star' : 'ui_star_off').setScale(28 / 128));
      } else {
        nc.add(txt(scene, 0, 50, '★'.repeat(stars) + '☆'.repeat(3 - stars), 24, open ? '#ffc83d' : '#6d6a80', { strokeColor: '#120e38', strokeW: 4 }));
      }

      nc.setSize(150, 120).setInteractive({ useHandCursor: true });
      nc.on('pointerup', () => {
        Sound.play('click');
        if (selected === i && open) {
          closeModal();
          go(scene, 'Game', { mode: 'classic', level: i });
        } else {
          selected = i;
          render();
        }
      });
      dyn.add(nc);
    });

    // بطاقة تفاصيل العالم المختار + زر الدخول المباشر
    const selOpen = WorldMap.isUnlocked(selected);
    const selStars = (Array.isArray(save.stars) && save.stars[selected]) || 0;
    const selBest = typeof Leaderboard !== 'undefined' ? Leaderboard.personalBest(selected) : 0;
    const selGoals = LEVELS[selected].goals;

    const dc = scene.add.graphics();
    dc.fillStyle(0x282166, 0.96).fillRoundedRect(56, 954, W - 112, 128, 26);
    dc.lineStyle(3, selOpen ? 0xffc83d : 0x6d6a80, 1).strokeRoundedRect(56, 954, W - 112, 128, 26);
    dyn.add(dc);

    const statusBadge = selStars >= 3 ? t('worldDone') : selOpen ? t('worldReady') : t('worldLocked');
    const statusCol = selStars >= 3 ? '#7ff594' : selOpen ? '#ffc83d' : '#ff8f8f';
    if (hasIsl(LEVELS[selected].theme)) {
      dyn.add(scene.add.image(96, 1018, 'island_' + LEVELS[selected].theme).setScale(66 / 320).setTint(selOpen ? 0xffffff : 0x7a769c));
    }
    dyn.add(txt(scene, 285, 988, t('lv' + selected) + '  •  ' + statusBadge, 26, statusCol, { stroke: false }));

    if (selOpen) {
      const infoLine = '★ ' + selStars + '/3   •   ' + t('bestScore') + ': ' + selBest + '   •   ' + selGoals.join('/');
      dyn.add(txt(scene, 285, 1034, infoLine, 21, '#dcd6ff', { stroke: false, wrap: 330 }));
      dyn.add(makeButton(scene, 558, 1018, 184, 78, t('play'),
        { icon: 'ui_play', iconSize: 30, size: 30, color: 0x58c46b, shade: 0x2d7a3d, textColor: '#ffffff' },
        () => { closeModal(); go(scene, 'Game', { mode: 'classic', level: selected }); }));
    } else {
      const reqStr = t('unlockReq').replace('{w}', t('lv' + (selected - 1)));
      dyn.add(txt(scene, 285, 1034, reqStr, 21, '#ffd0d0', { stroke: false, wrap: 330 }));
      dyn.add(makeButton(scene, 558, 1018, 184, 78, '',
        { icon: 'ui_lock', iconSize: 38, color: 0x6d6a80, shade: 0x3f3d50, textColor: '#dddddd' },
        () => { Sound.play('lose'); buzz(20); }));
    }
  };

  render();

  M.add(makeButton(scene, W / 2, 1134, 280, 76, t('close'),
    { size: 34, color: 0x8a7bd8, shade: 0x4b3c99, textColor: '#ffffff' }, closeModal));
}

// جسيمات تعطي الخلفية حياة (فراشات ضوء، ثلج، فقاعات...)
function addAmbient(scene, fx) {
  if (fx === 'stars') {
    for (let i = 0; i < 26; i++) {
      const s = scene.add.image(Phaser.Math.Between(20, W - 20), Phaser.Math.Between(20, 780), 'star')
        .setScale(Phaser.Math.FloatBetween(0.1, 0.3)).setAlpha(0.2).setTint(0xfff3b0);
      scene.tweens.add({ targets: s, alpha: { from: 0.15, to: 1 }, scale: s.scale * 1.5,
        duration: Phaser.Math.Between(900, 2200), yoyo: true, repeat: -1, delay: Phaser.Math.Between(0, 2000) });
    }
  }
  const P = {
    stars:   { x: { min: 0, max: W }, y: { min: 700, max: 1100 }, lifespan: 5000, speedY: { min: -30, max: -10 }, speedX: { min: -20, max: 20 }, scale: { start: 0.16, end: 0 }, tint: 0xffe27a, frequency: 260 },
    snow:    { x: { min: 0, max: W }, y: -20, lifespan: 9000, speedY: { min: 90, max: 190 }, speedX: { min: -30, max: 30 }, scale: { min: 0.08, max: 0.2 }, tint: 0xffffff, frequency: 110 },
    bubbles: { x: { min: 0, max: W }, y: H, lifespan: 12000, speedY: { min: -130, max: -60 }, speedX: { min: -20, max: 20 }, scale: { min: 0.08, max: 0.24 }, tint: 0xbfeaff, frequency: 220 },
    sun:     { x: -20, y: { min: 300, max: 1000 }, lifespan: 12000, speedX: { min: 40, max: 90 }, speedY: { min: -10, max: 10 }, scale: { min: 0.08, max: 0.18 }, tint: 0xfff3b0, frequency: 220 },
    warp:    { x: { min: 0, max: W }, y: -20, lifespan: 2600, speedY: { min: 500, max: 900 }, scale: { min: 0.05, max: 0.12 }, tint: 0xffffff, frequency: 45 },
  }[fx];
  if (P) scene.add.particles(0, 0, 'glow', Object.assign({ alpha: { start: 0.9, end: 0.1 }, blendMode: 'ADD' }, P));
}

;
/* ===== js/scenes.js ===== */
// ===== المشاهد: Boot / Lang / Menu / Levels / End / Pause =====

class BootScene extends Phaser.Scene {
  constructor() { super('Boot'); }

  preload() {
    if (typeof CG !== 'undefined') CG.loadingStart();
    if (typeof window !== 'undefined' && window.__GAME_BASE__) {
      this.load.setPath(window.__GAME_BASE__);
    }
    const bar = this.add.rectangle(W / 2, H / 2, 10, 24, 0xffc83d).setOrigin(0, 0.5);
    bar.x = W / 2 - 220;
    this.add.rectangle(W / 2, H / 2, 440, 24).setStrokeStyle(4, 0xffffff, 0.5);
    this.load.on('progress', (v) => (bar.width = 440 * v));

    CATS.forEach((c) => {
      POSES.forEach((p) => this.load.image(c.key + '_' + p, 'assets/cats/' + c.key + '_' + p + '.png'));
      const wf = typeof CAT_WALK_FRAMES !== 'undefined' && CAT_WALK_FRAMES[c.key];
      if (Array.isArray(wf)) {
        wf.forEach((f) => this.load.image(c.key + '_' + f, 'assets/cats/' + c.key + '_' + f + '.png'));
      }
    });
    this.load.image('cheese', 'assets/cheese.png');
    this.load.image('bomb', 'assets/bomb.png');
    this.load.image('mouse', 'assets/mouse.png');
    this.load.image('bg_night', 'assets/bg_night.jpg');
    // رسوم العوالم والخريطة والأيقونات
    ['desert', 'sea', 'snow', 'space', 'map'].forEach((k) => this.load.image('bg_' + k, 'assets/bg_' + k + '.jpg'));
    Object.keys(THEMES).forEach((k) => this.load.image('island_' + k, 'assets/islands/island_' + k + '.png'));
    ['coin', 'heart', 'heart_off', 'star', 'star_off', 'lock', 'gift', 'trophy'].forEach((k) => this.load.image('ui_' + k, 'assets/ui/ui_' + k + '.png'));
  }

  create() {
    // نصنع بعض الأشكال الصغيرة بالكود بدل ملفات إضافية
    const g = this.make.graphics({ x: 0, y: 0, add: false });

    // نجمة
    const pts = [];
    for (let i = 0; i < 10; i++) {
      const a = -Math.PI / 2 + (i * Math.PI) / 5, r = i % 2 ? 13 : 30;
      pts.push({ x: 32 + Math.cos(a) * r, y: 34 + Math.sin(a) * r });
    }
    g.fillStyle(0xffffff, 1).fillPoints(pts, true);
    g.generateTexture('star', 64, 64); g.clear();

    // قلب
    g.fillStyle(0xff4d6d, 1).fillCircle(20, 22, 15).fillCircle(44, 22, 15).fillTriangle(6, 28, 58, 28, 32, 58);
    g.fillStyle(0xffffff, 0.45).fillCircle(15, 16, 5);
    g.generateTexture('heart', 64, 64); g.clear();

    // ظل القط
    g.fillStyle(0x000000, 0.35).fillEllipse(64, 16, 128, 32);
    g.generateTexture('shadow', 128, 32); g.clear();
    g.destroy();

    // توهج ناعم (للجسيمات)
    const gl = this.textures.createCanvas('glow', 64, 64), c = gl.getContext();
    const rg = c.createRadialGradient(32, 32, 2, 32, 32, 32);
    rg.addColorStop(0, 'rgba(255,255,255,1)'); rg.addColorStop(1, 'rgba(255,255,255,0)');
    c.fillStyle = rg; c.fillRect(0, 0, 64, 64); gl.refresh();

    // أيقونات الأزرار المرسومة بالكود + أيقونات القدرات المؤقتة
    if (typeof ensurePowerupTextures === 'function') ensurePowerupTextures(this);
    if (typeof ensureUiIcons === 'function') ensureUiIcons(this);

    // خلفيات مؤقتة للعوالم التي لم نرسمها بعد (تدرج + تلال + أرضية)
    Object.keys(THEMES).forEach((k) => {
      if (k === 'night' || this.textures.exists('bg_' + k)) return;
      const th = THEMES[k], tex = this.textures.createCanvas('bg_' + k, W, H), x = tex.getContext();
      const sky = x.createLinearGradient(0, 0, 0, H);
      sky.addColorStop(0, th.sky[0]); sky.addColorStop(1, th.sky[1]);
      x.fillStyle = sky; x.fillRect(0, 0, W, H);
      x.fillStyle = th.hill; x.beginPath(); x.moveTo(0, H);
      for (let px = 0; px <= W; px += 12) x.lineTo(px, 960 + Math.sin(px * 0.01) * 50);
      x.lineTo(W, H); x.fill();
      x.fillStyle = th.ground; x.fillRect(0, 1062, W, H - 1062);
      x.fillStyle = 'rgba(255,255,255,0.25)'; x.fillRect(0, 1062, W, 8);
      tex.refresh();
    });

    if (typeof document !== 'undefined' && typeof document.getElementById === 'function') {
      const sp = document.getElementById('splash-loader');
      if (sp) {
        sp.style.opacity = '0';
        setTimeout(() => { if (sp.parentNode) sp.parentNode.removeChild(sp); }, 360);
      }
    }

    if (typeof CG !== 'undefined') CG.loadingStop();
    const nextScene = !save.langChosen ? 'Lang' : (save.storySeen ? 'Menu' : 'Story');
    this.scene.start(nextScene);
  }
}

class LangScene extends Phaser.Scene {
  constructor() { super('Lang'); }

  create() {
    enter(this);
    Sound.startMusic(-1);
    this.add.image(0, 0, 'bg_night').setOrigin(0);
    this.add.rectangle(0, 0, W, H, 0x100c2b, 0.56).setOrigin(0);
    addAmbient(this, 'stars');

    const aura = this.add.image(W / 2, 260, 'glow').setScale(4.2).setBlendMode('ADD').setTint(0xffc83d).setAlpha(0.42);
    this.tweens.add({ targets: aura, alpha: 0.25, scale: 4.8, duration: 1000, yoyo: true, repeat: -1 });
    const cat = this.add.image(W / 2, 395, 'cat_happy').setOrigin(0.5, 1).setScale(290 / 401);
    this.tweens.add({ targets: cat, y: 384, duration: 750, yoyo: true, repeat: -1, ease: 'Sine.InOut' });

    const hasGlobe = this.textures.exists('ui_lang');
    if (hasGlobe) this.add.image(W / 2 - 200, 455, 'ui_lang').setScale(52 / 96);
    txt(this, W / 2 + (hasGlobe ? 22 : 0), 455, t('chooseLang'), 52, '#ffc83d', { strokeColor: '#4a2400', strokeW: 12, wrap: 580 });
    txt(this, W / 2, 518, 'Choose Language  ·  Choisis ta langue', 24, '#dcd6ff', { stroke: false });

    const langs = [
      { code: 'ar', label: 'العربية' },
      { code: 'en', label: 'English' },
      { code: 'fr', label: 'Français' },
      { code: 'es', label: 'Español' },
    ];
    langs.forEach((item, idx) => {
      const y = 625 + idx * 124;
      const isCur = save.lang === item.code;
      makeButton(this, W / 2, y, 440, 96, item.label,
        isCur
          ? { icon: 'flag_' + item.code, iconSize: 46, iconGap: 18, size: 38, color: 0xffc83d, shade: 0xb57a10, textColor: '#3b2a00' }
          : { icon: 'flag_' + item.code, iconSize: 44, iconGap: 18, size: 36, color: 0x3b3280, shade: 0x201a52, textColor: '#ffffff' },
        () => {
          save.lang = item.code;
          save.langChosen = true;
          persist();
          go(this, save.storySeen ? 'Menu' : 'Story');
        });
    });
  }
}

class MenuScene extends Phaser.Scene {
  constructor() { super('Menu'); }

  create() {
    enter(this);
    Sound.startMusic(-1);
    this.add.image(0, 0, 'bg_night').setOrigin(0);
    this.add.rectangle(0, 0, W, H, 0x120d33, 0.28).setOrigin(0);
    addAmbient(this, 'stars');
    coinBadge(this);

    const a = txt(this, W / 2, 250, 'CAT', 190, '#ffc83d', { strokeColor: '#7a3d00', strokeW: 20 });
    const b = txt(this, W / 2, 430, 'HUNTER', 150, '#ffc83d', { strokeColor: '#7a3d00', strokeW: 18 });
    this.tweens.add({ targets: [a, b], scale: 1.05, duration: 900, yoyo: true, repeat: -1, ease: 'Sine.InOut' });
    txt(this, W / 2, 520, t('subtitle'), 46, '#ffe9a8', { strokeColor: '#4a2400', strokeW: 8, wrap: 640 });
    txt(this, W / 2, 595, t('tagline'), 34, '#fff7e6', { wrap: 620 });

    const activeCat = CATS[save.cat] || CATS[0];
    const eqSkin = (typeof ShopSkins !== 'undefined' && ShopSkins.activeSkinDef()) || (typeof Achievements !== 'undefined' ? Achievements.activeSkinDef() : null);
    const eqBadge = typeof Achievements !== 'undefined' ? Achievements.activeBadgeDef() : null;
    if (eqSkin || activeCat.aura) {
      const aura = this.add.image(W / 2 - 40, 790, 'glow').setScale(4.4).setBlendMode('ADD')
        .setTint(eqSkin ? eqSkin.aura : activeCat.aura).setAlpha(0.45);
      this.tweens.add({ targets: aura, alpha: 0.25, scale: 5.0, duration: 1100, yoyo: true, repeat: -1 });
    }
    const cat = this.add.image(W / 2 - 40, 940, activeCat.key + '_happy').setOrigin(0.5, 1).setScale(360 / 401)
      .setInteractive({ useHandCursor: true });
    if (eqSkin && eqSkin.tint) cat.setTint(eqSkin.tint);
    this.tweens.add({ targets: cat, y: 930, scaleY: cat.scaleY * 1.03, duration: 700, yoyo: true, repeat: -1, ease: 'Sine.InOut' });
    cat.on('pointerup', () => {
      Sound.play('meow'); buzz(12);
      const poses = ['jump', 'cheer', 'love', 'happy'];
      cat.setTexture(activeCat.key + '_' + poses[Math.floor(Math.random() * poses.length)]);
      this.tweens.add({ targets: cat, y: 890, duration: 160, yoyo: true, ease: 'Quad.Out',
        onComplete: () => cat.setTexture(activeCat.key + '_happy') });
    });

    const ch = this.add.image(W / 2 - 220, 745, 'cheese').setScale(0.46);
    this.tweens.add({ targets: ch, y: 720, angle: -14, duration: 1100, yoyo: true, repeat: -1, ease: 'Sine.InOut' });

    const tipPool = [];
    if (Daily.pending() || (typeof DailyChallenges !== 'undefined' && DailyChallenges.pending())) tipPool.push(t('tipReward'));
    if (Array.isArray(t('tips'))) tipPool.push(...t('tips'));
    if (tipPool.length) {
      let tipIdx = 0;
      const bubble = this.add.container(W / 2, 650);
      const bgB = this.add.graphics();
      bgB.fillStyle(0xffffff, 0.94).fillRoundedRect(-235, -34, 470, 68, 24);
      bgB.lineStyle(3, 0xffc83d, 1).strokeRoundedRect(-235, -34, 470, 68, 24);
      const tipTx = txt(this, 0, 0, tipPool[0], 21, '#2b1a5e', { stroke: false, wrap: 438 });
      bubble.add([bgB, tipTx]);
      this.time.addEvent({
        delay: 4000, loop: true,
        callback: () => {
          tipIdx = (tipIdx + 1) % tipPool.length;
          this.tweens.add({ targets: tipTx, alpha: 0, duration: 180, onComplete: () => {
            tipTx.setText(tipPool[tipIdx]);
            this.tweens.add({ targets: tipTx, alpha: 1, duration: 220 });
          } });
        },
      });
    }

    // زر اللعب الرئيسي بأيقونة مدمجة
    makeButton(this, W / 2, 1015, 420, 124, t('play'),
      { icon: 'ui_play', iconSize: 54, iconGap: 14, size: 54 }, () => go(this, 'Levels'));

    // زر المهام والإنجازات
    makeButton(this, 85, 62, 114, 78, '',
      { icon: 'ui_gift', iconSize: 54, color: 0xff8a3d, shade: 0xa8480e }, () => go(this, 'Missions'));
    if (Daily.pending() || (typeof DailyChallenges !== 'undefined' && DailyChallenges.pending()) || (typeof Achievements !== 'undefined' && Achievements.pending())) {
      const dot = this.add.circle(135, 30, 17, 0xe5484d).setStrokeStyle(4, 0xffffff);
      this.tweens.add({ targets: dot, scale: 1.25, duration: 500, yoyo: true, repeat: -1 });
    }

    if (eqBadge) {
      const bc = this.add.container(220, 62).setSize(124, 66).setInteractive({ useHandCursor: true });
      const bg = this.add.graphics();
      bg.fillStyle(0x1d1850, 0.88).fillRoundedRect(-62, -33, 124, 66, 28);
      bg.lineStyle(3, eqBadge.color || 0xffc83d, 1).strokeRoundedRect(-62, -33, 124, 66, 28);
      bc.add([bg]);
      if (this.textures.exists('ui_trophy')) bc.add(this.add.image(-28, 0, 'ui_trophy').setScale(40 / 128));
      bc.add(txt(this, 22, 0, eqBadge.icon, 34, '#ffffff', { stroke: false }));
      bc.on('pointerup', () => { Sound.play('click'); go(this, 'Missions', { tab: 'achievements' }); });
    }

    // زر لوحة المتصدرين
    makeButton(this, 415, 62, 100, 72, '',
      { icon: 'ui_trophy', iconSize: 48, color: 0xffc83d, shade: 0xb57a10 }, () => openLeaderboardModal(this, { onPlay: () => go(this, 'Levels') }));

    // الأزرار الجانبية: الدليل، المتاهة، الخريطة، المتجر
    makeButton(this, 70, 1015, 110, 124, '',
      { icon: 'ui_help', iconSize: 60, color: 0x8a7bd8, shade: 0x4b3c99, textColor: '#ffffff' }, () => openTutorialOverlay(this));
    makeButton(this, 634, 756, 146, 82, t('mazeBtn'),
      { icon: 'ui_maze', iconSize: 36, iconGap: 6, size: 22, color: 0x58c46b, shade: 0x2d7a3d, textColor: '#ffffff' }, () => go(this, 'Levels', { tab: 'maze' }));
    makeButton(this, 646, 875, 118, 92, '',
      { icon: 'ui_map', iconSize: 56, color: 0x2f7ae5, shade: 0x18478f, textColor: '#ffffff' }, () => openWorldMapModal(this));
    makeButton(this, 646, 1015, 118, 124, '',
      { icon: 'ui_shop', iconSize: 62, color: 0x8a7bd8, shade: 0x4b3c99 }, () => go(this, 'Shop'));

    if (!save.tutorialSeen && (!Array.isArray(save.stars) || save.stars[0] === 0)) {
      this.time.delayedCall(280, () => {
        if (this.scene.isActive('Menu') && !this._tutorialModal && !this._settingsModal) openTutorialOverlay(this);
      });
    }

    // الصف السفلي: القصة، اللغة، الصوت، والإعدادات
    makeButton(this, 86, 1175, 144, 88, t('story'),
      { icon: 'ui_story', iconSize: 36, iconGap: 6, size: 24, color: 0xff8a3d, shade: 0xa8480e, textColor: '#ffffff' }, () => go(this, 'Story'));
    makeButton(this, 268, 1175, 196, 88, I18N[save.lang].name,
      { icon: 'ui_lang', iconSize: 36, iconGap: 8, size: 28, color: 0x8a7bd8, shade: 0x4b3c99, textColor: '#ffffff' }, () => {
        save.lang = LANG_ORDER[(LANG_ORDER.indexOf(save.lang) + 1) % LANG_ORDER.length];
        persist(); this.scene.restart();
      });
    makeButton(this, 424, 1175, 92, 88, '',
      { icon: save.music ? 'ui_music' : 'ui_music_off', iconSize: 48, color: save.music ? 0xffc83d : 0x6d6a80, shade: save.music ? 0xb57a10 : 0x3f3d50 }, () => {
        Sound.toggleMusic(-1);
        this.scene.restart();
      });
    makeButton(this, 528, 1175, 92, 88, '',
      { icon: save.sfx ? 'ui_sfx' : 'ui_sfx_off', iconSize: 48, color: save.sfx ? 0xffc83d : 0x6d6a80, shade: save.sfx ? 0xb57a10 : 0x3f3d50 }, () => {
        Sound.toggleSfx();
        this.scene.restart();
      });
    makeButton(this, 634, 1175, 92, 88, '',
      { icon: 'ui_settings', iconSize: 48, color: 0x8a7bd8, shade: 0x4b3c99, textColor: '#ffffff' }, () => {
        openSettingsModal(this, { musicLevel: -1, onClose: () => this.scene.restart() });
      });
  }
}

// ===== شاشة اللعب الموحدة: الكلاسيكي / اللانهائي / المتاهة =====
const MAP_POS = [[200, 1010], [520, 845], [200, 680], [520, 515], [360, 355]];
const MAP_ICON = { night: '1', desert: '2', sea: '3', snow: '4', space: '5' };

class LevelsScene extends Phaser.Scene {
  constructor() { super('Levels'); }
  init(d) {
    this.tab = (d && d.tab) || 'classic';
    this.endlessThemeIdx = (d && d.level !== undefined) ? Math.max(0, Math.min(LEVELS.length - 1, Number(d.level) || 0)) : 0;
    this.mazeSelected = null;
  }
  isOpen(i) { return typeof WorldMap !== 'undefined' ? WorldMap.isUnlocked(i) : (i === 0 || save.stars[i - 1] > 0); }
  start(i) {
    if (!this.isOpen(i)) return false;
    Sound.play('click'); buzz(10);
    const launch = () => go(this, 'Game', { mode: 'classic', level: i });
    if (typeof CG !== 'undefined' && CG.requestPreroll) CG.requestPreroll(launch);
    else launch();
    return true;
  }

  create() {
    enter(this);
    const hasMap = this.textures.exists('bg_map');
    this.add.image(0, 0, hasMap ? 'bg_map' : 'bg_night').setOrigin(0);
    if (!hasMap) { this.add.rectangle(0, 0, W, H, 0x120d33, 0.45).setOrigin(0); addAmbient(this, 'stars'); }
    coinBadge(this);
    makeButton(this, 85, 62, 110, 74, '',
      { icon: 'ui_trophy', iconSize: 48, color: 0xffc83d, shade: 0xb57a10 }, () => openLeaderboardModal(this));
    if (typeof WorldMap !== 'undefined') {
      const wp = WorldMap.progress();
      makeButton(this, 265, 62, 212, 74, wp.unlockedCount + '/' + wp.totalWorlds + '  ★' + wp.totalStars + '/' + wp.maxStars,
        { icon: 'ui_map', iconSize: 36, iconGap: 8, size: 22, color: 0x2f7ae5, shade: 0x18478f, textColor: '#ffffff' }, () => openWorldMapModal(this));
    }

    this.tabsBar = this.add.container(0, 0).setDepth(20);
    this.content = this.add.container(0, 0).setDepth(10);
    this.renderTabs();
    this.renderContent();

    makeButton(this, W / 2, 1195, 300, 96, t('back'),
      { icon: 'ui_arrow_left', iconSize: 34, iconSide: 'left', size: 40, color: 0x8a7bd8, shade: 0x4b3c99, textColor: '#ffffff' }, () => go(this, 'Menu'));
  }

  renderTabs() {
    this.tabsBar.removeAll(true);
    const tabs = [
      { id: 'classic', icon: 'ui_classic', label: t('modeClassic') },
      { id: 'endless', icon: 'ui_endless', label: t('modeEndless') },
      { id: 'maze',    icon: 'ui_maze',    label: t('modeMaze') },
    ];
    tabs.forEach((tb, idx) => {
      const active = this.tab === tb.id;
      const bx = 132 + idx * 228;
      this.tabsBar.add(makeButton(this, bx, 152, 212, 68, tb.label,
        active
          ? { icon: tb.icon, iconSize: 32, iconGap: 6, size: 22, color: 0xffc83d, shade: 0xb57a10, textColor: '#3b2a00' }
          : { icon: tb.icon, iconSize: 30, iconGap: 6, size: 20, color: 0x2b2466, shade: 0x191442, textColor: '#e2dcff' },
        () => {
          if (this.tab === tb.id) return;
          this.tab = tb.id;
          this.renderTabs();
          this.renderContent();
        }));
    });
  }

  renderContent() {
    this.content.removeAll(true);
    if (this.tab === 'classic') this.renderClassicTab();
    else if (this.tab === 'endless') this.renderEndlessTab();
    else this.renderMazeTab();
  }

  renderClassicTab() {
    let cur = 0;
    LEVELS.forEach((L, i) => { if (this.isOpen(i)) cur = i; });

    const path = this.add.graphics();
    for (let i = 0; i < LEVELS.length - 1; i++) {
      const [x1, y1] = MAP_POS[i], [x2, y2] = MAP_POS[i + 1], ok = this.isOpen(i + 1);
      for (let k = 1; k < 10; k++) {
        const f = k / 10;
        path.fillStyle(ok ? 0xffd86a : 0x8a85b0, ok ? 0.95 : 0.5).fillCircle(x1 + (x2 - x1) * f, y1 + (y2 - y1) * f - Math.sin(f * Math.PI) * 30, 7);
      }
    }
    this.content.add(path);

    LEVELS.forEach((L, i) => {
      const [x, y] = MAP_POS[i], open = this.isOpen(i), th = THEMES[L.theme], hex = (s) => Phaser.Display.Color.HexStringToColor(s).color;
      const isl = this.add.container(x, y);
      const g = this.add.graphics(), art = this.textures.exists('island_' + L.theme);
      if (art) isl.add(this.add.image(0, 40, 'island_' + L.theme).setScale(250 / 320).setTint(open ? 0xffffff : 0x9a96b8));
      else g.fillStyle(0x3d2f70, 1).fillPoints([{ x: -110, y: 25 }, { x: 110, y: 25 }, { x: 75, y: 85 }, { x: 30, y: 130 }, { x: -20, y: 90 }, { x: -75, y: 75 }], true);
      if (!art) {
        g.fillStyle(hex(th.ground), 1).fillEllipse(0, 22, 230, 64);
        g.fillStyle(hex(th.hill), 1).fillEllipse(0, 12, 170, 42);
        g.lineStyle(4, 0x1d1440, 0.8).strokeEllipse(0, 22, 230, 64);
      }
      g.fillStyle(open ? 0xb57a10 : 0x3f3d50, 1).fillCircle(0, 38, 40);
      g.fillStyle(open ? 0xffc83d : 0x6d6a80, 1).fillCircle(0, 30, 40);
      g.fillStyle(0xffffff, 0.3).fillEllipse(-6, 16, 40, 16);
      isl.add(g);
      if (!art) isl.add(txt(this, 0, -50, MAP_ICON[L.theme], 70, '#ffffff', { stroke: false }));
      isl.add(txt(this, 0, -108, t('lv' + i), 34, '#ffffff', { strokeColor: '#2b1a5e', strokeW: 9 }));
      if (open || !this.textures.exists('ui_lock')) isl.add(txt(this, 0, 30, open ? String(i + 1) : '×', open ? 50 : 40, '#3b2a00', { stroke: false }));
      else isl.add(this.add.image(0, 30, 'ui_lock').setScale(54 / 128));
      const s = save.stars[i];
      if (this.textures.exists('ui_star')) for (let k = 0; k < 3; k++) isl.add(this.add.image((k - 1) * 52, 122, k < s ? 'ui_star' : 'ui_star_off').setScale(46 / 128));
      else isl.add(txt(this, 0, 98, '★'.repeat(s) + '☆'.repeat(3 - s), 38, '#ffc83d', { strokeColor: '#5a3a00', strokeW: 6 }));
      if (i === cur) {
        const ring = this.add.circle(0, 30, 44, 0xffffff, 0).setStrokeStyle(5, 0xfff3b0);
        isl.add(ring); this.tweens.add({ targets: ring, scale: 1.4, alpha: 0, duration: 1100, repeat: -1 });
        isl.add(this.add.image(-92, 40, CATS[save.cat].key + '_idle').setOrigin(0.5, 1).setScale(125 / 401));
      }
      if (open) {
        isl.setInteractive(new Phaser.Geom.Rectangle(-120, -120, 240, 270), Phaser.Geom.Rectangle.Contains);
        isl.on('pointerdown', () => this.tweens.add({ targets: isl, scale: 0.94, duration: 70 }));
        isl.on('pointerout', () => this.tweens.add({ targets: isl, scale: 1, duration: 90 }));
        isl.on('pointerup', () => { this.tweens.add({ targets: isl, scale: 1, duration: 90 }); this.time.delayedCall(80, () => this.start(i)); });
      }
      isl.setScale(0.6).setAlpha(0);
      this.content.add(isl);
      this.tweens.add({ targets: isl, scale: 1, alpha: open ? 1 : 0.6, duration: 360, delay: 75 * i, ease: 'Back.Out',
        onComplete: () => this.tweens.add({ targets: isl, y: y - 9, duration: 1700 + i * 150, yoyo: true, repeat: -1, ease: 'Sine.InOut' }) });
    });
  }

  renderEndlessTab() {
    const pg = this.add.graphics();
    pg.fillStyle(0x1b1648, 0.94).fillRoundedRect(46, 215, W - 92, 875, 36);
    pg.lineStyle(5, 0xffc83d, 1).strokeRoundedRect(46, 215, W - 92, 875, 36);
    this.content.add(pg);

    const activeCat = CATS[save.cat] || CATS[0];
    const aura = this.add.image(W / 2, 365, 'glow').setScale(3.6).setBlendMode('ADD').setTint(0xffc83d).setAlpha(0.45);
    this.tweens.add({ targets: aura, alpha: 0.24, scale: 4.1, duration: 1000, yoyo: true, repeat: -1 });
    const cat = this.add.image(W / 2, 465, activeCat.key + '_cheer').setOrigin(0.5, 1).setScale(220 / 401);
    this.tweens.add({ targets: cat, y: 454, duration: 680, yoyo: true, repeat: -1, ease: 'Sine.InOut' });
    this.content.add([aura, cat]);

    const hasEndIcon = this.textures.exists('ui_endless');
    if (hasEndIcon) this.content.add(this.add.image(W / 2 - 150, 515, 'ui_endless').setScale(52 / 96));
    this.content.add(txt(this, W / 2 + (hasEndIcon ? 24 : 0), 515, t('modeEndless'), 52, '#ffc83d', { strokeColor: '#5a3a00', strokeW: 10 }));
    this.content.add(txt(this, W / 2, 600, t('endlessDesc'), 25, '#fff7e6', { stroke: false, wrap: 580 }));

    const statBg = this.add.graphics();
    statBg.fillStyle(0x282166, 0.95).fillRoundedRect(76, 668, 268, 94, 22);
    statBg.fillStyle(0x282166, 0.95).fillRoundedRect(376, 668, 268, 94, 22);
    statBg.lineStyle(2.5, 0xffc83d, 0.7).strokeRoundedRect(76, 668, 268, 94, 22);
    statBg.lineStyle(2.5, 0x7be8ff, 0.7).strokeRoundedRect(376, 668, 268, 94, 22);
    this.content.add(statBg);
    if (this.textures.exists('ui_trophy')) this.content.add(this.add.image(118, 696, 'ui_trophy').setScale(28 / 128));
    this.content.add(txt(this, 224, 696, t('bestScore'), 22, '#ffe9a8', { stroke: false }));
    this.content.add(txt(this, 210, 734, String(save.endlessBest || 0), 34, '#ffc83d', { stroke: false }));
    this.content.add(txt(this, 510, 696, t('endlessTime'), 22, '#bdefff', { stroke: false }));
    this.content.add(txt(this, 510, 734, (save.endlessBestTime || 0) + 's', 34, '#7be8ff', { stroke: false }));

    // اختيار خلفية السماء بصور الجزر الحقيقية
    LEVELS.forEach((L, idx) => {
      const ix = 148 + idx * 106;
      const sel = this.endlessThemeIdx === idx;
      const hasIsl = this.textures.exists('island_' + L.theme);
      this.content.add(makeButton(this, ix, 838, 86, 78, hasIsl ? '' : String(idx + 1),
        sel
          ? { icon: hasIsl ? ('island_' + L.theme) : undefined, iconSize: 56, size: 30, color: 0xffc83d, shade: 0xb57a10, textColor: '#3b2a00' }
          : { icon: hasIsl ? ('island_' + L.theme) : undefined, iconSize: 50, size: 28, color: 0x2b2466, shade: 0x191442, textColor: '#ffffff' },
        () => {
          this.endlessThemeIdx = idx;
          this.renderContent();
        }));
    });

    this.content.add(makeButton(this, W / 2, 985, 420, 108, t('play'),
      { icon: 'ui_play', iconSize: 44, iconGap: 12, size: 44, color: 0x58c46b, shade: 0x2d7a3d, textColor: '#ffffff' },
      () => {
        const launch = () => go(this, 'Game', { mode: 'endless', level: this.endlessThemeIdx });
        if (typeof CG !== 'undefined' && CG.requestPreroll) CG.requestPreroll(launch);
        else launch();
      }));
  }

  renderMazeTab() {
    const mz = MazeProgress.ensure();
    if (this.mazeSelected === null || this.mazeSelected > mz.unlocked) {
      this.mazeSelected = Math.min(mz.unlocked, 9);
    }

    const pg = this.add.graphics();
    pg.fillStyle(0x1b1648, 0.94).fillRoundedRect(38, 215, W - 76, 875, 36);
    pg.lineStyle(5, 0x58c46b, 1).strokeRoundedRect(38, 215, W - 76, 875, 36);
    this.content.add(pg);

    // شريط أهداف المتاهة بأيقونات اللعبة الحقيقية
    if (this.textures.exists('maze_key')) this.content.add(this.add.image(W / 2 - 140, 260, 'maze_key').setScale(32 / 80));
    if (this.textures.exists('cat_happy')) this.content.add(this.add.image(W / 2 - 55, 260, 'cat_happy').setScale(42 / 401));
    this.content.add(txt(this, W / 2 - 98, 260, '→', 24, '#7ff594', { stroke: false }));
    this.content.add(txt(this, W / 2 + 2, 260, '•', 24, '#6a4fd8', { stroke: false }));
    if (this.textures.exists('cheese')) this.content.add(this.add.image(W / 2 + 46, 260, 'cheese').setScale(34 / 128));
    const qPct = Math.round((typeof mazeLevelConfig === 'function' ? mazeLevelConfig(this.mazeSelected || 0).quotaPct : 0.6) * 100);
    this.content.add(txt(this, W / 2 + 95, 260, qPct + '% →', 24, '#ffe9a8', { stroke: false }));
    if (this.textures.exists('maze_exit')) this.content.add(this.add.image(W / 2 + 158, 260, 'maze_exit').setScale(36 / 80));

    const hasMazeIcon = this.textures.exists('ui_maze');
    const hasLock = this.textures.exists('ui_lock');
    const hasStar = this.textures.exists('ui_star') && this.textures.exists('ui_star_off');
    const hasTrophy = this.textures.exists('ui_trophy');

    for (let i = 0; i < 10; i++) {
      const col = i % 2, row = Math.floor(i / 2);
      const bx = 205 + col * 310, by = 345 + row * 110;
      const open = i <= mz.unlocked;
      const isSel = this.mazeSelected === i;
      const stars = mz.stars[i] || 0;

      const card = this.add.container(bx, by).setSize(280, 94).setInteractive({ useHandCursor: true });
      const bg = this.add.graphics();
      bg.fillStyle(open ? (isSel ? 0x2e4a44 : 0x282166) : 0x1a173d, 0.96).fillRoundedRect(-140, -47, 280, 94, 22);
      bg.lineStyle(isSel ? 4 : 2, isSel ? 0x7ff594 : (open ? 0x58c46b : 0x4b4670), 1).strokeRoundedRect(-140, -47, 280, 94, 22);
      card.add(bg);
      if (open && hasMazeIcon) card.add(this.add.image(-104, -12, 'ui_maze').setScale(34 / 96));
      else if (!open && hasLock) card.add(this.add.image(-104, -12, 'ui_lock').setScale(30 / 128));
      card.add(txt(this, -62, -12, String(i + 1), 30, open ? '#ffffff' : '#8a85b0', { stroke: false }));
      if (hasStar) {
        for (let k = 0; k < 3; k++) card.add(this.add.image(28 + k * 32, -12, k < stars ? 'ui_star' : 'ui_star_off').setScale(28 / 128));
      } else {
        card.add(txt(this, 56, -12, '★'.repeat(stars) + '☆'.repeat(3 - stars), 24, stars > 0 ? '#ffc83d' : '#605b85', { stroke: false }));
      }
      const bestSc = mz.bestScores[i] || 0;
      if (bestSc > 0) {
        if (hasTrophy) card.add(this.add.image(-28, 22, 'ui_trophy').setScale(22 / 128));
        card.add(txt(this, hasTrophy ? 12 : 0, 22, String(bestSc), 20, '#9df5a8', { stroke: false }));
      }

      card.on('pointerup', () => {
        Sound.play('click');
        if (!open) { Sound.play('lose'); return; }
        if (this.mazeSelected === i) {
          const launch = () => go(this, 'Maze', { level: i });
          if (typeof CG !== 'undefined' && CG.requestPreroll) CG.requestPreroll(launch);
          else launch();
        } else { this.mazeSelected = i; this.renderContent(); }
      });
      this.content.add(card);
    }

    const selBest = mz.bestScores[this.mazeSelected] || 0;
    const selTime = mz.bestTimes[this.mazeSelected] || 0;
    const infoTxt = (this.mazeSelected + 1) + '   ·   ' + t('mazeBest') + ': ' + selBest + (selTime ? ' (' + selTime + 's)' : '');
    if (hasMazeIcon) this.content.add(this.add.image(W / 2 - 140, 922, 'ui_maze').setScale(30 / 96));
    this.content.add(txt(this, W / 2 + (hasMazeIcon ? 14 : 0), 922, infoTxt, 24, '#ffe9a8', { stroke: false }));

    this.content.add(makeButton(this, W / 2, 1012, 420, 92, (this.mazeSelected + 1) + '  —  ' + t('play'),
      { icon: 'ui_play', iconSize: 38, size: 36, color: 0x58c46b, shade: 0x2d7a3d, textColor: '#ffffff' },
      () => {
        const launch = () => go(this, 'Maze', { level: this.mazeSelected });
        if (typeof CG !== 'undefined' && CG.requestPreroll) CG.requestPreroll(launch);
        else launch();
      }));
  }
}

class EndScene extends Phaser.Scene {
  constructor() { super('End'); }
  init(d) { this.res = d; }

  create() {
    enter(this);
    const { mode = 'classic', level, score, bonus = 0, stars, died, survived = 0, isNewEndlessBest = false, lb } = this.res;
    const isEndless = mode === 'endless';
    const theme = LEVELS[level].theme;
    this.add.image(0, 0, theme === 'night' ? 'bg_night' : 'bg_' + theme).setOrigin(0);
    this.add.rectangle(0, 0, W, H, 0x120d33, 0.72).setOrigin(0);

    makeButton(this, W - 78, 78, 104, 80, '',
      { icon: 'ui_trophy', iconSize: 52, color: 0xffc83d, shade: 0xb57a10 },
      () => openLeaderboardModal(this, { level, highlightId: lb && lb.entryId }));

    const win = !isEndless && stars > 0;
    if (isEndless && this.textures.exists('ui_endless')) {
      this.add.image(W / 2, 148, 'ui_endless').setScale(72 / 96);
    }
    const headText = isEndless ? t('modeEndless') : (win ? t('win') : t('lose'));
    const title = txt(this, W / 2, 230, headText, isEndless ? 78 : 92, (win || isEndless) ? '#ffc83d' : '#ff7a7a',
      { strokeColor: (win || isEndless) ? '#7a3d00' : '#5a1010', strokeW: 14, wrap: 640 });
    title.setScale(0.3); this.tweens.add({ targets: title, scale: 1, duration: 450, ease: 'Back.Out' });

    if (isEndless) {
      txt(this, W / 2, 430, t('endlessTime') + ': ' + survived + 's', 44, '#7be8ff', { strokeColor: '#0e2d40', strokeW: 8 });
      if (isNewEndlessBest && score > 0) {
        if (this.textures.exists('ui_trophy')) this.add.image(W / 2 - 190, 520, 'ui_trophy').setScale(44 / 128);
        const rec = txt(this, W / 2 + 12, 520, t('newRecord'), 40, '#7ff594', { strokeColor: '#10381a', strokeW: 8 });
        this.tweens.add({ targets: rec, scale: 1.07, duration: 550, yoyo: true, repeat: -1 });
      } else {
        txt(this, W / 2, 520, t('bestScore') + ': ' + (save.endlessBest || 0), 32, '#ffe9a8', { strokeColor: '#1b1838', strokeW: 6 });
      }
    } else {
      for (let k = 0; k < 3; k++) {
        const x = W / 2 + (k - 1) * 190, y = k === 1 ? 470 : 510;
        const hasStarArt = this.textures.exists('ui_star') && this.textures.exists('ui_star_off');
        const star = this.add.image(x, y, hasStarArt ? (k < stars ? 'ui_star' : 'ui_star_off') : 'star')
          .setScale(0).setAngle((k - 1) * 12);
        if (!hasStarArt) star.setTint(k < stars ? 0xffc83d : 0x4a4466);
        this.tweens.add({ targets: star, scale: hasStarArt ? 1.55 : 3.1, duration: 420, delay: 500 + k * 380, ease: 'Back.Out',
          onStart: () => { if (k < stars) { Sound.play('cheese'); buzz(20); } } });
      }

      if (lb && lb.isNewWorldBest && score > 0) {
        const rec = txt(this, W / 2, 616, t('newRecord') + (lb.rank ? '  #' + lb.rank : ''), 32, '#7ff594', { strokeColor: '#10381a', strokeW: 8 });
        this.tweens.add({ targets: rec, scale: 1.06, duration: 550, yoyo: true, repeat: -1 });
      } else if (lb && lb.rank) {
        txt(this, W / 2, 616, t('rank') + ' #' + lb.rank + '  ·  ' + t('bestScore') + ': ' + Leaderboard.personalBest(level), 26, '#ffe9a8', { strokeColor: '#1b1838', strokeW: 6 });
      }
    }

    txt(this, W / 2, 690, t('score') + ': ' + score, 54, '#fff7e6');
    const totalCoins = score + bonus;
    const hasCoin = this.textures.exists('ui_coin');
    if (hasCoin) this.add.image(W / 2 - 90, 772, 'ui_coin').setScale(0.42);
    const coins = txt(this, hasCoin ? W / 2 + 20 : W / 2, 772, '+0', 52, '#ffc83d');
    this.tweens.addCounter({ from: 0, to: totalCoins, duration: 900, delay: 500,
      onUpdate: (tw) => coins.setText('+' + Math.round(tw.getValue())) });
    if (bonus > 0) txt(this, W / 2, 836, '✨ ' + t('catBonus') + ' +' + bonus, 28, '#9df5a8', { strokeColor: '#1b1838', strokeW: 6 });

    this.time.delayedCall(300, () => {
      Sound.play(win || (isEndless && isNewEndlessBest) ? 'win' : 'lose');
      if (typeof CG !== 'undefined' && ((win && stars >= 3) || (isEndless && isNewEndlessBest && score > 0))) {
        CG.happytime();
      }
    });

    let y = 930;
    const showRewardBtn = typeof CG !== 'undefined' && CG.canShowRewarded && CG.canShowRewarded() && totalCoins > 0;
    if (showRewardBtn) {
      let claimedAd = false;
      const adBtn = makeButton(this, W / 2, 876, 360, 72, t('doubleCoinsAd'),
        { icon: 'ui_coin', iconSize: 32, size: 28, color: 0x58c46b, shade: 0x2d7a3d, textColor: '#ffffff' }, () => {
          if (claimedAd) return;
          CG.requestRewarded({
            onReward: () => {
              claimedAd = true;
              save.coins += totalCoins;
              persist();
              Sound.play('buy');
              coins.setText('+' + (totalCoins * 2));
              if (CG.happytime) CG.happytime();
              if (adBtn && adBtn.scene) adBtn.destroy();
            },
          });
        });
      y = 955;
    }
    const routeRound = (fn) => {
      if (typeof CG !== 'undefined' && CG.requestMidgame) CG.requestMidgame(fn);
      else fn();
    };
    if (!isEndless && win && level < LEVELS.length - 1) {
      makeButton(this, W / 2, y, 440, 104, t('next'), { icon: 'ui_arrow_right', iconSize: 38, size: 48 }, () => routeRound(() => go(this, 'Game', { mode: 'classic', level: level + 1 })));
      y += 120;
    }
    makeButton(this, W / 2, y, 440, 92, t('retry'), { icon: 'ui_play', iconSize: 36, size: 42, color: 0x8a7bd8, shade: 0x4b3c99, textColor: '#fff' }, () => routeRound(() => go(this, 'Game', { mode, level })));
    makeButton(this, W / 2, y + 114, 440, 92, t('menu'), { icon: 'ui_map', iconSize: 36, size: 42, color: 0x8a7bd8, shade: 0x4b3c99, textColor: '#fff' }, () => go(this, 'Levels', { tab: isEndless ? 'endless' : 'classic', level }));
  }
}

class PauseScene extends Phaser.Scene {
  constructor() { super('Pause'); }
  init(d) { this.d = d; }
  create() {
    this.add.rectangle(0, 0, W, H, 0x0a0820, 0.74).setOrigin(0);
    txt(this, W / 2, 330, t('paused'), 100, '#ffc83d', { strokeColor: '#7a3d00', strokeW: 14, wrap: 640 });
    const alt = { size: 42, color: 0x8a7bd8, shade: 0x4b3c99, textColor: '#ffffff' };
    const mode = (this.d && this.d.mode) || 'classic';
    const leave = (key, data) => { this.scene.stop(this.d.from); this.scene.start(key, data); };
    const resumeGame = () => {
      if (this._settingsModal) return;
      this.scene.resume(this.d.from);
      this.scene.stop();
    };
    const retryGame = () => { if (!this._settingsModal) leave('Game', { mode, level: this.d.level }); };

    makeButton(this, W / 2, 560, 460, 120, t('resume'), { icon: 'ui_play', iconSize: 48, size: 50 }, resumeGame);
    makeButton(this, W / 2, 740, 460, 100, t('retry'), alt, retryGame);
    makeButton(this, W / 2, 890, 460, 100, t('menu'), Object.assign({ icon: 'ui_map', iconSize: 36 }, alt), () => leave('Levels', { tab: mode === 'endless' ? 'endless' : 'classic', level: this.d.level }));
    makeButton(this, W / 2 - 120, 1060, 100, 88, '',
      { icon: save.music ? 'ui_music' : 'ui_music_off', iconSize: 48, color: save.music ? 0xffc83d : 0x6d6a80, shade: save.music ? 0xb57a10 : 0x3f3d50 },
      () => { Sound.init(); Sound.setMusic(!save.music); this.scene.restart(this.d); });
    makeButton(this, W / 2, 1060, 100, 88, '',
      { icon: save.sfx ? 'ui_sfx' : 'ui_sfx_off', iconSize: 48, color: save.sfx ? 0xffc83d : 0x6d6a80, shade: save.sfx ? 0xb57a10 : 0x3f3d50 },
      () => { Sound.toggleSfx(); this.scene.restart(this.d); });
    makeButton(this, W / 2 + 120, 1060, 100, 88, '',
      { icon: 'ui_settings', iconSize: 48, color: 0x8a7bd8, shade: 0x4b3c99, textColor: '#ffffff' },
      () => { openSettingsModal(this, { musicLevel: this.d.level, onClose: () => { Sound.stopMusic(); this.scene.restart(this.d); } }); });

    if (this.input && this.input.keyboard) {
      ['ESC', 'P', 'SPACE', 'ENTER'].forEach((k) => this.input.keyboard.on('keydown-' + k, resumeGame));
      this.input.keyboard.on('keydown-R', retryGame);
    }
  }
}

;
/* ===== js/game.js ===== */
// ===== مشهد اللعب: سحب، سقوط، تصادم، كومبو، وتأثيرات الإحساس (Juice + Vibration API) =====
const HAPTICS = {
  cheese: 14,
  comboTier: [18, 26, 36],
  mouse: [24, 30, 38],
  bomb: [95, 40, 140],
  bombFatal: [110, 45, 140, 45, 210],
  win: [30, 40, 50, 40, 85],
  powerup: [18, 22, 34],
  shieldBlock: [28, 30, 22],
};

// ===== نظام القدرات المؤقتة (الدرع الحامي، مغناطيس الجبن، ومضاعف النقاط) =====
const POWERUPS = {
  shield: { id: 'shield', duration: 6.5, color: 0x38bdf8, textColor: '#7be8ff', icon: '🛡️', tex: 'pu_shield' },
  magnet: { id: 'magnet', duration: 7.5, color: 0xff66c4, textColor: '#ffb3e6', icon: '🧲', tex: 'pu_magnet', radius: 380 },
  boost:  { id: 'boost',  duration: 6.0, color: 0xffc83d, textColor: '#ffe885', icon: '⚡', tex: 'pu_boost' },
};
const POWERUP_KEYS = ['shield', 'magnet', 'boost'];

function buildPowerupSchedule(seed, L) {
  const r = mulberry32((seed ^ 0x9e3779b9) >>> 0);
  const rr = (a, b) => a + r() * (b - a);
  const slots = L.time > 48 ? [rr(7.5, 11.5), rr(20, 26), rr(34, 42)] : [rr(7.5, 11.5), rr(21, 28)];
  let prevIdx = Math.floor(r() * POWERUP_KEYS.length);
  return slots.filter((t) => t < L.time - 5).map((t, idx) => {
    const pick = idx === 0 ? prevIdx : (prevIdx + 1 + Math.floor(r() * (POWERUP_KEYS.length - 1))) % POWERUP_KEYS.length;
    prevIdx = pick;
    return { t, type: 'powerup', powerId: POWERUP_KEYS[pick], x: Math.floor(rr(95, W - 95)), sp: Math.floor(rr(225, 285)) };
  });
}

class GameScene extends Phaser.Scene {
  constructor() { super('Game'); }
  init(d) {
    this.mode = (d && d.mode) || 'classic';
    this.lvl = Math.max(0, Math.min(LEVELS.length - 1, (d && d.level) || 0));
    this.seed = d && d.seed != null ? d.seed >>> 0 : (Math.random() * 4294967296) >>> 0;
  }

  create() {
    enter(this);
    Daily.ensure(); this.maxCombo = 0; this.bombHits = 0;
    const isEndless = this.mode === 'endless';
    const L = (this.L = LEVELS[this.lvl]);
    Sound.startMusic(this.lvl);

    // الخلفية والجسيمات
    this.add.image(0, 0, L.theme === 'night' ? 'bg_night' : 'bg_' + L.theme).setOrigin(0);
    addAmbient(this, THEMES[L.theme].fx);

    // الحالة
    Object.assign(this, {
      score: 0, lives: 3, timeLeft: L.time, items: [], combo: 0, starsEarned: 0,
      sched: isEndless ? [] : buildSchedule(this.seed, L), si: 0,
      powerSched: isEndless ? [] : buildPowerupSchedule(this.seed, L), pi: 0,
      activePowers: { shield: 0, magnet: 0, boost: 0 }, rushStarted: false,
      endlessRng: isEndless ? mulberry32(this.seed) : null,
      nextEndlessSpawn: 0.65, nextMouseAt: 6.5, nextPowerAt: 12.0, nextHeartAt: 60.0,
      wave: 1, endlessBestBroken: false,
      pose: '', poseT: 0, runT: 0, paused: false, jy: 0, vy: 0, sq: 0, hitstop: 0, over: false, t: 0, targetX: W / 2, _vibUntil: 0, _vibPrio: 0,
    });
    this.ensurePowerupTextures();
    this.initParticles();

    // القط وهالته البصرية (من القطة المميزة أو مظهر المتجر/الإنجاز المجهّز)
    const activeCat = CATS[save.cat] || CATS[0];
    const eqSkin = (typeof ShopSkins !== 'undefined' && ShopSkins.activeSkinDef()) || (typeof Achievements !== 'undefined' ? Achievements.activeSkinDef() : null);
    this.skinTint = eqSkin && eqSkin.tint ? eqSkin.tint : null;
    const auraColor = (eqSkin && eqSkin.aura) || activeCat.aura;
    const trailTex = (eqSkin && eqSkin.particle) || (save.cat >= 3 ? 'star' : 'glow');
    this.shadow = this.add.image(W / 2, GROUND_Y + 8, 'shadow').setDepth(5);
    this.catAura = auraColor ? this.add.image(W / 2, GROUND_Y - 95, 'glow').setDepth(9).setBlendMode('ADD').setTint(auraColor).setAlpha(0.28 + save.cat * 0.05).setScale(2.8 + save.cat * 0.35) : null;
    this.catTrail = (eqSkin || save.cat >= 2) ? this.add.particles(0, 0, trailTex, {
      lifespan: 480, speed: { min: 20, max: 70 }, scale: { start: trailTex === 'star' ? 0.24 : 0.35, end: 0 },
      alpha: { start: 0.78, end: 0 }, tint: auraColor || 0xffc83d, blendMode: 'ADD', emitting: false,
    }).setDepth(9) : null;
    this.trailT = 0;
    this.cat = this.add.sprite(W / 2, GROUND_Y, activeCat.key + '_idle').setOrigin(0.5, 1).setDepth(10);
    if (this.skinTint) this.cat.setTint(this.skinTint);
    this.baseScale = 210 / (this.cat.height || 364);
    this.cat.setScale(this.baseScale);
    this.initCatAnimations(activeCat.key);

    // الواجهة
    this.scoreTxt = txt(this, W / 2, 118, '0', 92, '#ffc83d', { strokeColor: '#5a3a00', strokeW: 12 }).setDepth(40);
    this.comboTxt = txt(this, W / 2, 205, '', 46, '#ff9a3d').setDepth(40).setAlpha(0);
    this.timeBarBg = this.add.rectangle(W / 2, 28, W - 60, 18, 0x000000, 0.4).setDepth(40);
    this.timeBar = this.add.rectangle(30, 28, W - 60, 18, isEndless ? 0x58c46b : 0xffc83d).setOrigin(0, 0.5).setDepth(41);
    this.timeTxt = txt(this, W - 50, 112, isEndless ? '⏱ 0s' : '', isEndless ? 42 : 46, '#ffffff', { ox: 1 }).setDepth(40);
    this.waveLabelTxt = isEndless
      ? txt(this, W - 50, 156, '♾️ ' + t('waveLabel') + ' 1', 24, '#9df5a8', { ox: 1, strokeColor: '#10381a', strokeW: 6 }).setDepth(40)
      : null;
    this.hearts = [0, 1, 2].map((i) => this.add.image(56 + i * 62, 118, this.textures.exists('ui_heart') ? 'ui_heart' : 'heart').setScale(this.textures.exists('ui_heart') ? 0.46 : 0.85).setDepth(40));
    this.initPowerupVisuals();

    // تلميح السحب في أول مستوى
    if (!isEndless && this.lvl === 0 && save.stars[0] === 0) {
      const h = txt(this, W / 2, 1235, t('drag'), 36, '#fff7e6', { wrap: 640 }).setDepth(40);
      this.tweens.add({ targets: h, alpha: 0, delay: 4500, duration: 600 });
    }

    // التحكم: اسحب إصبعك في أي مكان، والقط يتبعك (مع زر الإيقاف المؤقت وزر الإعدادات السريع)
    const pb = this.add.container(60, 215).setDepth(45).setSize(96, 96).setInteractive({ useHandCursor: true });
    pb.add([this.add.circle(0, 0, 36, 0x16113e, 0.85).setStrokeStyle(4, 0xffffff, 0.8)]);
    if (this.textures.exists('ui_pause')) pb.add(this.add.image(0, 0, 'ui_pause').setScale(44 / 96));
    else pb.add([this.add.rectangle(-9, 0, 9, 30, 0xffffff), this.add.rectangle(9, 0, 9, 30, 0xffffff)]);
    pb.on('pointerup', () => { Sound.play('click'); this.openPause(); });

    const sb = this.add.container(146, 215).setDepth(45).setSize(80, 80).setInteractive({ useHandCursor: true });
    sb.add([this.add.circle(0, 0, 32, 0x16113e, 0.85).setStrokeStyle(3.5, 0xffc83d, 0.9)]);
    if (this.textures.exists('ui_settings')) sb.add(this.add.image(0, 0, 'ui_settings').setScale(40 / 96));
    else sb.add(txt(this, 0, 0, '⚙', 32, '#ffffff', { stroke: false }));
    sb.on('pointerup', () => { Sound.play('click'); openSettingsModal(this, { musicLevel: this.lvl }); });

    this.events.on('resume', () => {
      this.paused = false;
      Sound.startMusic(this.lvl);
      if (typeof CG !== 'undefined') CG.gameplayStart();
    });
    this._vis = () => { if (document.hidden && !this._settingsModal) this.openPause(); };      // إيقاف تلقائي عند مغادرة التطبيق
    this._blur = () => { if (!this._settingsModal) this.openPause(); };
    this._unregAdPause = (typeof CG !== 'undefined' && CG.registerPauseHandler) ? CG.registerPauseHandler(() => this.openPause()) : null;
    document.addEventListener('visibilitychange', this._vis);
    if (typeof window !== 'undefined' && window.addEventListener) window.addEventListener('blur', this._blur);
    this.events.once('shutdown', () => {
      document.removeEventListener('visibilitychange', this._vis);
      if (typeof window !== 'undefined' && window.removeEventListener) window.removeEventListener('blur', this._blur);
      if (this._unregAdPause) { this._unregAdPause(); this._unregAdPause = null; }
      this.vibrate(0);
      if (typeof CG !== 'undefined') CG.gameplayStop();
    });
    this.input.keyboard.on('keydown-ESC', () => { if (!this._settingsModal) this.openPause(); });
    this.input.keyboard.on('keydown-P', () => { if (!this._settingsModal) this.openPause(); });
    this._keyboardActive = false;
    this._lastMouseX = null;
    this.input.on('pointerdown', (p) => {
      if ((p.x < 195 && p.y > 160 && p.y < 270) || this._settingsModal) return;
      Sound.init();
      try { window.focus(); } catch (err) {}
      this._keyboardActive = false;
      this._lastMouseX = p.x;
      this.targetX = p.x;
    });
    this.input.on('pointermove', (p) => {
      if (this._settingsModal) return;
      const isMouse = p.event && p.event.pointerType === 'mouse';
      if (p.isDown) {
        this._keyboardActive = false;
        this._lastMouseX = p.x;
        this.targetX = p.x;
      } else if (isMouse) {
        if (this._lastMouseX === null) {
          this._lastMouseX = p.x;
          return;
        }
        const deltaX = Math.abs(p.x - this._lastMouseX);
        if (deltaX > (this._keyboardActive ? 8 : 2)) {
          this._lastMouseX = p.x;
          this._keyboardActive = false;
          this.targetX = p.x;
        }
      }
    });
    this.cursors = this.input.keyboard.createCursorKeys();
    this.keyA = this.input.keyboard.addKey('A');
    this.keyD = this.input.keyboard.addKey('D');
    this.walkPhase = 0;
    if (typeof CG !== 'undefined') CG.gameplayStart();
  }

  // ---------- مساعدات ----------
  mult() { return this.combo >= 16 ? 3 : this.combo >= 8 ? 2 : 1; }

  vibrate(pattern, priority = 1) {
    if (typeof save !== 'undefined' && save.vibrate === false) return false;
    if (typeof navigator === 'undefined' || typeof navigator.vibrate !== 'function') return false;
    const now = Date.now();
    if (pattern === 0 || (Array.isArray(pattern) && pattern.length === 0)) {
      this._vibUntil = 0; this._vibPrio = 0;
      try { return navigator.vibrate(0); } catch (e) { return false; }
    }
    if (now < this._vibUntil && priority < this._vibPrio) return false;
    const seq = Array.isArray(pattern) ? pattern : [pattern];
    const totalMs = seq.reduce((s, n) => s + Math.max(0, Number(n) || 0), 0);
    this._vibUntil = now + totalMs;
    this._vibPrio = priority;
    try { return navigator.vibrate(seq); } catch (e) { return false; }
  }

  openPause() {
    if (this.over || this.paused || this._leaving) return;
    this.paused = true; Sound.stopMusic(); this.vibrate(0);
    if (typeof CG !== 'undefined') CG.gameplayStop();
    this.scene.launch('Pause', { from: 'Game', level: this.lvl, mode: this.mode });
    this.scene.pause();
  }

  initCatAnimations(catKey) {
    const animKey = catKey + '_walk_anim';
    this.walkAnimKey = animKey;
    if (!this.anims || this.anims.exists(animKey)) return animKey;

    const frameKeys = [];
    const configured = (typeof CAT_WALK_FRAMES !== 'undefined' && Array.isArray(CAT_WALK_FRAMES[catKey]))
      ? CAT_WALK_FRAMES[catKey]
      : [];
    for (const f of configured) {
      const tk = catKey + '_' + f;
      if (this.textures.exists(tk)) frameKeys.push(tk);
    }
    if (!frameKeys.length) {
      for (const f of ['walking_1', 'walking_2', 'walk1', 'walk2', 'walk3', 'walk4']) {
        const tk = this.textures.exists(catKey + '_' + f)
          ? (catKey + '_' + f)
          : (this.textures.exists(f) ? f : null);
        if (tk && !frameKeys.includes(tk)) frameKeys.push(tk);
      }
    }
    if (!frameKeys.length) {
      const runKey = catKey + '_run';
      const idleKey = catKey + '_idle';
      if (this.textures.exists(runKey)) frameKeys.push(runKey);
      if (this.textures.exists(idleKey)) frameKeys.push(idleKey);
    }

    if (frameKeys.length) {
      this.anims.create({
        key: animKey,
        frames: frameKeys.map((key) => ({ key })),
        frameRate: 11,
        repeat: -1,
      });
    }
    return animKey;
  }

  setPose(p, d) {
    this.pose = p;
    this.poseT = d;
    if (this.cat && d > 0) {
      if (this.cat.anims && this.cat.anims.isPlaying) this.cat.stop();
      const activeKey = (CATS[save.cat] && CATS[save.cat].key) || 'cat';
      const pk = activeKey + '_' + p;
      if (this.textures && this.textures.exists(pk) && this.cat.texture.key !== pk) {
        this.cat.setTexture(pk);
      }
    }
  }

  hop(power) { this.vy = power; this.jy = Math.max(this.jy, 0.1); }

  // توليد أيقونات القدرات المؤقتة بالرسم المتجهي عند عدم وجود صور خارجية
  ensurePowerupTextures() {
    if (typeof ensurePowerupTextures === 'function') ensurePowerupTextures(this);
  }

  initPowerupVisuals() {
    this._shieldBubble = this.add.circle(W / 2, GROUND_Y - 95, 114, 0x38bdf8, 0.16)
      .setDepth(11).setStrokeStyle(5, 0x7be8ff, 0.92).setVisible(false);
    this._magnetRing = this.add.circle(W / 2, GROUND_Y - 95, 136, 0xff66c4, 0.08)
      .setDepth(8).setStrokeStyle(4, 0xff99da, 0.85).setVisible(false);
    this._boostRing = this.add.circle(W / 2, GROUND_Y - 95, 102, 0xffc83d, 0.09)
      .setDepth(8).setStrokeStyle(4, 0xffe885, 0.85).setVisible(false);

    this.powerHud = POWERUP_KEYS.map((id) => {
      const def = POWERUPS[id];
      const box = this.add.container(W - 118, 190).setDepth(42).setVisible(false);
      const bg = this.add.graphics();
      bg.fillStyle(0x130e36, 0.84).fillRoundedRect(-84, -22, 168, 44, 16);
      bg.lineStyle(2.5, def.color, 0.95).strokeRoundedRect(-84, -22, 168, 44, 16);
      const barBg = this.add.rectangle(-38, 12, 108, 6, 0x000000, 0.5).setOrigin(0, 0.5);
      const bar = this.add.rectangle(-38, 12, 108, 6, def.color).setOrigin(0, 0.5);
      const ic = this.textures.exists(def.tex)
        ? this.add.image(-58, -1, def.tex).setScale(32 / 96)
        : txt(this, -60, -1, def.icon, 24, '#ffffff', { stroke: false });
      const label = txt(this, 16, -4, '0.0s', 20, def.textColor, { stroke: false });
      box.add([bg, barBg, bar, ic, label]);
      return { id, def, box, bar, label };
    });
  }

  activatePowerup(id, x, y) {
    const def = POWERUPS[id];
    if (!def) return;
    this.activePowers[id] = def.duration;
    Sound.play('powerup');
    this.vibrate(HAPTICS.powerup, 2);
    this.hop(540);
    this.burst(x, y, def.color, 18, 10);
    this.pop(x, y - 24, def.icon + ' ' + t('pu_' + id), def.textColor, 36);
    this.setPose('happy', 0.45);
    this.updatePowerups(0);
  }

  updatePowerups(dt) {
    if (!this.activePowers) return;
    for (const id of POWERUP_KEYS) {
      if (this.activePowers[id] > 0) this.activePowers[id] = Math.max(0, this.activePowers[id] - dt);
    }

    const cx = this.cat ? this.cat.x : W / 2;
    const cy = this.cat ? this.cat.y - 95 : GROUND_Y - 95;

    if (this._shieldBubble) {
      const rem = this.activePowers.shield;
      this._shieldBubble.setVisible(rem > 0);
      if (rem > 0) {
        const blink = rem < 1.5 ? (0.4 + Math.abs(Math.sin(this.t * 16)) * 0.6) : 1;
        this._shieldBubble.setPosition(cx, cy).setScale(1 + Math.sin(this.t * 6) * 0.04).setAlpha(blink);
      }
    }
    if (this._magnetRing) {
      const rem = this.activePowers.magnet;
      this._magnetRing.setVisible(rem > 0);
      if (rem > 0) {
        const pulse = 1.18 - ((this.t * 1.4) % 1) * 0.38;
        this._magnetRing.setPosition(cx, cy).setScale(pulse).setAlpha(rem < 1.5 ? 0.55 : 0.9);
      }
    }
    if (this._boostRing) {
      const rem = this.activePowers.boost;
      this._boostRing.setVisible(rem > 0);
      if (rem > 0) {
        this._boostRing.setPosition(cx, cy).setScale(1 + Math.sin(this.t * 9) * 0.06).setAlpha(rem < 1.5 ? 0.55 : 0.9);
      }
    }

    // جذب الجبن القريب نحو مشمش عند تفعيل المغناطيس (دون جذب القنابل)
    if (this.activePowers.magnet > 0 && Array.isArray(this.items)) {
      const mx = cx, my = cy + 15, maxR = POWERUPS.magnet.radius;
      for (const it of this.items) {
        if (it.dead || it.type !== 'cheese') continue;
        const dx = mx - it.img.x, dy = my - it.img.y;
        const distSq = dx * dx + dy * dy;
        if (distSq > 4 && distSq <= maxR * maxR) {
          const dist = Math.sqrt(distSq);
          const pull = (580 + (1 - dist / maxR) * 560) * dt;
          it.img.x += (dx / dist) * pull;
          it.img.y += (dy / dist) * pull;
        }
      }
    }

    if (Array.isArray(this.powerHud)) {
      let slot = 0;
      for (const h of this.powerHud) {
        const rem = this.activePowers[h.id] || 0;
        if (rem > 0) {
          h.box.setVisible(true).setY(188 + slot * 54);
          h.bar.scaleX = Phaser.Math.Clamp(rem / h.def.duration, 0, 1);
          h.label.setText(rem.toFixed(1) + 's');
          slot++;
        } else {
          h.box.setVisible(false);
        }
      }
    }
  }

  // ----- نظام الجسيمات (الانفجارات + جمع النجوم) باستخدام Phaser ParticleEmitter -----
  initParticles() {
    this._fxGlow = this.add.particles(0, 0, 'glow', {
      speed: { min: 170, max: 460 }, angle: { min: 0, max: 360 }, lifespan: { min: 380, max: 580 },
      scale: { start: 0.48, end: 0 }, alpha: { start: 0.95, end: 0 }, gravityY: 460, emitting: false, blendMode: 'ADD',
    }).setDepth(30);

    this._fxStars = this.add.particles(0, 0, 'star', {
      speed: { min: 150, max: 440 }, angle: { min: 200, max: 340 }, lifespan: { min: 520, max: 820 },
      scale: { start: 0.44, end: 0 }, alpha: { start: 1, end: 0 }, rotate: { min: -240, max: 240 },
      gravityY: 540, emitting: false, blendMode: 'ADD',
    }).setDepth(32);

    this._fxCollectTrail = this.add.particles(0, 0, 'star', {
      speed: { min: 20, max: 90 }, lifespan: 440, scale: { start: 0.34, end: 0 },
      alpha: { start: 0.95, end: 0 }, rotate: { min: 0, max: 360 },
      tint: [0xffc83d, 0xfff3b0, 0xffffff], emitting: false, blendMode: 'ADD',
    }).setDepth(42);

    this._fxBlast = this.add.particles(0, 0, 'glow', {
      speed: { min: 220, max: 620 }, angle: { min: 0, max: 360 }, lifespan: { min: 320, max: 620 },
      scale: { start: 0.72, end: 0 }, alpha: { start: 1, end: 0 }, gravityY: 300,
      tint: [0xff3b30, 0xff8a2b, 0xffd24a], emitting: false, blendMode: 'ADD',
    }).setDepth(31);

    this._fxSmoke = this.add.particles(0, 0, 'glow', {
      speed: { min: 60, max: 210 }, angle: { min: 190, max: 350 }, lifespan: { min: 480, max: 820 },
      scale: { start: 0.52, end: 1.25 }, alpha: { start: 0.5, end: 0 }, gravityY: -120,
      tint: [0x2b223a, 0x45355a], emitting: false,
    }).setDepth(29);
  }

  burst(x, y, tint, n, starCount = 0) {
    if (this._fxGlow) {
      this._fxGlow.setParticleTint(tint);
      this._fxGlow.explode(n, x, y);
    }
    if (starCount > 0 && this._fxStars) {
      this._fxStars.setParticleTint([tint, 0xfff3b0, 0xffffff]);
      this._fxStars.explode(starCount, x, y);
    }
  }

  // نجوم متطايرة تتجمع نحو عداد النقاط مع ذيل متلألئ من الجسيمات
  emitStarCollect(x, y, count = 1, tint = 0xffc83d) {
    if (!this.add || !this.tweens) return;
    const tx = W / 2, ty = 118;
    for (let i = 0; i < count; i++) {
      const sx = x + (i - (count - 1) / 2) * 26;
      const star = this.add.image(sx, y - 10, 'star').setDepth(43).setScale(0.55).setTint(tint);
      let step = 0;
      this.tweens.add({
        targets: star,
        x: { value: tx, ease: 'Quad.InOut' },
        y: { value: ty, ease: 'Back.In' },
        scale: { from: 0.58, to: 0.25 },
        angle: 360,
        delay: i * 55,
        duration: 480,
        onUpdate: () => {
          step++;
          if (this._fxCollectTrail && step % 2 === 0) this._fxCollectTrail.emitParticleAt(star.x, star.y, 1);
        },
        onComplete: () => {
          if (this._fxStars) {
            this._fxStars.setParticleTint([0xffc83d, 0xfff3b0, 0xffffff]);
            this._fxStars.explode(4, tx, ty);
          }
          star.destroy();
        },
      });
    }
  }

  // احتفال بالوصول إلى نجمة جديدة أثناء اللعب
  emitGoalStar(starRank) {
    if (!this.add || !this.tweens) return;
    const ring = this.add.circle(W / 2, 118, 28, 0xffc83d, 0).setDepth(41).setStrokeStyle(6, 0xfff3b0, 1);
    this.tweens.add({ targets: ring, scale: 3.4, alpha: 0, duration: 520, ease: 'Quad.Out', onComplete: () => ring.destroy() });
    if (this._fxStars) {
      this._fxStars.setParticleTint([0xffc83d, 0xfff3b0, 0xffffff]);
      this._fxStars.explode(14 + starRank * 4, W / 2, 118);
    }
    this.pop(W / 2, 175, '★'.repeat(starRank), '#ffc83d', 42);
  }

  // نظام الانفجار متعدد الطبقات عند الاصطدام بالقنبلة (ومضة + موجة صدمة + شرار + دخان)
  emitExplosion(x, y, fatal = false) {
    if (this.add && this.tweens) {
      const flash = this.add.circle(x, y, 22, 0xfff3b0, 0.95).setDepth(33);
      this.tweens.add({ targets: flash, scale: fatal ? 4.2 : 3.0, alpha: 0, duration: 240, ease: 'Quad.Out', onComplete: () => flash.destroy() });
      const wave = this.add.circle(x, y, 26, 0xff5a1f, 0).setDepth(32).setStrokeStyle(8, 0xff8a2b, 0.95);
      this.tweens.add({ targets: wave, scale: fatal ? 4.8 : 3.5, alpha: 0, duration: 360, ease: 'Cubic.Out', onComplete: () => wave.destroy() });
    }
    if (this._fxBlast) this._fxBlast.explode(fatal ? 38 : 26, x, y);
    if (this._fxSmoke) this._fxSmoke.explode(fatal ? 22 : 14, x, y);
    if (this._fxStars) {
      this._fxStars.setParticleTint([0xff3b30, 0xff9a3d, 0xffd24a]);
      this._fxStars.explode(fatal ? 14 : 9, x, y);
    }
  }

  pop(x, y, str, color, size) {
    const tx = txt(this, x, y, str, size, color).setDepth(50).setScale(0.4);
    this.tweens.add({ targets: tx, scale: 1.2, duration: 150, ease: 'Back.Out' });
    this.tweens.add({ targets: tx, y: y - 140, alpha: 0, delay: 220, duration: 620, onComplete: () => tx.destroy() });
  }

  addScore(p) {
    this.score += p;
    this.scoreTxt.setText(this.score);
    this.tweens.add({ targets: this.scoreTxt, scale: { from: 1.3, to: 1 }, duration: 160 });
    if (this.mode === 'endless') {
      if ((save.endlessBest || 0) > 0 && !this.endlessBestBroken && this.score > save.endlessBest) {
        this.endlessBestBroken = true;
        Sound.play('powerup');
        this.pop(W / 2, 250, '🏆 ' + t('newRecord'), '#7ff594', 36);
      }
      return;
    }
    const unlocked = this.L && Array.isArray(this.L.goals) ? this.L.goals.filter((g) => this.score >= g).length : 0;
    if (unlocked > (this.starsEarned || 0)) {
      this.starsEarned = unlocked;
      this.emitGoalStar(unlocked);
    }
  }

  showCombo() {
    const m = this.mult();
    if (this.combo < 3) { this.comboTxt.setAlpha(0); return; }
    this.comboTxt.setText('🔥 ' + this.combo + (m > 1 ? '   x' + m : '')).setAlpha(1);
    this.tweens.add({ targets: this.comboTxt, scale: { from: 1.35, to: 1 }, duration: 160 });
  }

  spawn(e) {
    const { type, sp } = e;
    if (type === 'powerup') {
      const def = POWERUPS[e.powerId] || POWERUPS.shield;
      const halo = this.add.image(e.x, -80, 'glow').setDepth(7).setScale(2.1).setBlendMode('ADD').setTint(def.color).setAlpha(0.75);
      const texKey = this.textures && this.textures.exists(def.tex) ? def.tex : 'star';
      const img = this.add.image(e.x, -80, texKey).setDepth(9);
      img.setScale(94 / Math.max(img.width || 96, img.height || 96));
      if (texKey === 'star') img.setTint(def.color);
      this.items.push({ img, halo, type: 'powerup', powerId: def.id, baseX: e.x, sp, spin: Math.random() * 6, r: 44 });
      return;
    }
    if (type === 'heart') {
      const texKey = this.textures && this.textures.exists('ui_heart') ? 'ui_heart' : 'heart';
      const halo = this.add.image(e.x, -80, 'glow').setDepth(7).setScale(1.9).setBlendMode('ADD').setTint(0xff4d6d).setAlpha(0.75);
      const img = this.add.image(e.x, -80, texKey).setDepth(9);
      img.setScale(80 / Math.max(img.width || 64, img.height || 64));
      this.items.push({ img, halo, type: 'heart', sp, spin: 0, r: 42 });
      return;
    }
    const size = { cheese: 100, bomb: 106, mouse: 130 }[type];
    const img = this.add.image(e.x, -80, type).setDepth(8);
    img.setScale(size / Math.max(img.width, img.height));
    this.items.push({ img, type, sp, spin: Math.random() * 6, r: size * 0.38 });
  }

  hits(it) {
    const left = this.cat.x - 58, right = this.cat.x + 58;
    const top = GROUND_Y - this.jy - 140, bottom = GROUND_Y - this.jy;
    const dx = it.img.x - Phaser.Math.Clamp(it.img.x, left, right);
    const dy = it.img.y - Phaser.Math.Clamp(it.img.y, top, bottom);
    return dx * dx + dy * dy < it.r * it.r;
  }

  collect(it) {
    const { x, y } = it.img;
    const prevMult = this.mult();
    const boostMult = this.activePowers && this.activePowers.boost > 0 ? 2 : 1;
    const rushBonus = this.rushStarted ? 1 : 0;
    if (it.type === 'powerup') {
      this.activatePowerup(it.powerId, x, y);
    } else if (it.type === 'heart') {
      if (this.lives < 3) {
        this.lives = Math.min(3, this.lives + 1);
        const h = this.hearts[this.lives - 1];
        if (h) {
          const heartTex = this.textures.exists('ui_heart') ? 'ui_heart' : 'heart';
          const targetSc = this.textures.exists('ui_heart') ? 0.46 : 0.85;
          h.setTexture(heartTex).setScale(targetSc).setAngle(0).setAlpha(1);
          this.tweens.add({ targets: h, scale: { from: targetSc * 1.4, to: targetSc }, duration: 300, ease: 'Back.Out' });
        }
        this.pop(x, y - 20, t('heartGain'), '#ff8fb1', 42);
      } else {
        this.addScore(5);
        this.pop(x, y - 20, '+5 ♥', '#ffc83d', 40);
      }
      Sound.play('powerup');
      this.vibrate(HAPTICS.powerup, 2);
      this.hop(560);
      this.burst(x, y, 0xff4d6d, 16, 8);
      this.setPose('love', 0.55);
    } else if (it.type === 'cheese') {
      this.combo++; this.maxCombo = Math.max(this.maxCombo, this.combo); Daily.report('cheese', 1);
      const pts = this.mult() * boostMult + rushBonus;
      this.addScore(pts);
      Sound.play(this.combo % 5 === 0 ? 'chirp' : 'cheese');
      this.vibrate(this.mult() > prevMult ? HAPTICS.comboTier : Math.min(22, HAPTICS.cheese + Math.floor(this.combo / 5) * 2), this.mult() > prevMult ? 2 : 1);
      this.hop(600);
      this.burst(x, y, 0xffc83d, 12, (this.mult() > 1 || rushBonus > 0) ? 6 : 3);
      this.emitStarCollect(x, y, (this.mult() > prevMult || boostMult > 1) ? 2 : 1, 0xffc83d);
      this.pop(x, y - 20, '+' + pts + (boostMult > 1 ? ' ⚡' : ''), '#ffc83d', 46);
      this.showCombo();
    } else if (it.type === 'mouse') {
      this.combo += 3; this.maxCombo = Math.max(this.maxCombo, this.combo); Daily.report('mice', 1);
      const pts = 5 * this.mult() * boostMult + rushBonus;
      this.addScore(pts);
      Sound.play('mouse');
      this.vibrate(this.mult() > prevMult ? HAPTICS.comboTier : HAPTICS.mouse, 2);
      this.hop(920);
      this.burst(x, y, 0xff8fb1, 22, 14);
      this.emitStarCollect(x, y, 3, 0xff8fb1);
      this.pop(x, y - 20, '+' + pts + (boostMult > 1 ? ' ⚡' : ''), '#ffffff', 74);
      this.cameras.main.shake(120, 0.004);
      this.setPose('cheer', 0.6); this.hitstop = 0.07;                       // توقف لحظي يعطي ثقل الإمساك
      this.showCombo();
    } else {
      if (this.activePowers && this.activePowers.shield > 0) {
        Sound.play('shield');
        this.vibrate(HAPTICS.shieldBlock, 2);
        this.burst(x, y, 0x38bdf8, 22, 10);
        if (this.add && this.tweens) {
          const ring = this.add.circle(x, y, 22, 0x38bdf8, 0).setDepth(33).setStrokeStyle(6, 0x7be8ff, 0.95);
          this.tweens.add({ targets: ring, scale: 3.1, alpha: 0, duration: 280, ease: 'Quad.Out', onComplete: () => ring.destroy() });
        }
        this.pop(x, y - 20, '🛡️ ' + t('pu_blocked'), '#7be8ff', 36);
        this.setPose('cheer', 0.35);
        return;
      }
      this.lives--; this.combo = 0; this.bombHits++; this.setPose(this.lives <= 0 ? 'dizzy' : 'scared', 0.8);
      Sound.play('bomb');
      this.vibrate(this.lives <= 0 ? HAPTICS.bombFatal : HAPTICS.bomb, this.lives <= 0 ? 4 : 3);
      this.emitExplosion(x, y, this.lives <= 0);
      this.cameras.main.shake(280, 0.014);
      this.cameras.main.flash(180, 229, 72, 77);
      this.cat.setTint(0xff7777); this.time.delayedCall(260, () => { if (this.skinTint) this.cat.setTint(this.skinTint); else this.cat.clearTint(); });
      const h = this.hearts[this.lives];
      if (h) {
        if (this.textures.exists('ui_heart_off')) {
          h.setTexture('ui_heart_off');
          this.tweens.add({ targets: h, scale: { from: 0.56, to: 0.46 }, duration: 260, ease: 'Back.Out' });
        } else {
          this.tweens.add({ targets: h, scale: 0, angle: 80, duration: 280, ease: 'Back.In' });
        }
      }
      this.pop(x, y - 20, '-1 ♥', '#ff6a6a', 56);
      this.showCombo();
      if (this.lives <= 0) this.finish(true);
    }
  }

  finish(died) {
    if (this.over) return;
    this.over = true;
    const isEndless = this.mode === 'endless';
    const stars = isEndless || died ? 0 : this.L.goals.filter((g) => this.score >= g).length;
    const survived = Math.round(this.t);
    if (!died && stars > 0) this.vibrate(HAPTICS.win, 3);
    const bonus = Math.round(this.score * ((CATS[save.cat] && CATS[save.cat].coinBonus) || 0));
    save.coins += this.score + bonus;
    Daily.report('score', this.score); Daily.report('combo', this.maxCombo);
    let isNewEndlessBest = false;
    if (isEndless) {
      if (this.score > (save.endlessBest || 0)) {
        save.endlessBest = this.score;
        isNewEndlessBest = true;
      }
      if (survived > (save.endlessBestTime || 0)) save.endlessBestTime = survived;
    } else {
      if (!died) { Daily.report('plays', 1); if (this.bombHits === 0) Daily.report('clean', 1); }
      if (stars > save.stars[this.lvl]) save.stars[this.lvl] = stars;
    }
    const lb = Leaderboard.record({ score: this.score, level: this.lvl, mode: this.mode, cat: save.cat, stars, maxCombo: this.maxCombo, died });
    persist();
    Sound.stopMusic();
    if (typeof CG !== 'undefined') CG.gameplayStop();
    go(this, 'End', { mode: this.mode, level: this.lvl, score: this.score, bonus, stars, died, survived, isNewEndlessBest, seed: this.seed, lb });
  }

  // ---------- الحلقة الرئيسية ----------
  update(_, delta) {
    if (this.over || this.paused) return;
    const dt = Math.min(delta / 1000, 0.05);
    if (this.hitstop > 0) { this.hitstop -= dt; return; }
    this.t += dt;

    if (this.mode === 'endless') {
      const newWave = 1 + Math.floor(this.t / 25);
      if (newWave > this.wave) {
        this.wave = newWave;
        Sound.play('powerup');
        this.pop(W / 2, 300, '♾️ ' + t('waveLabel') + ' ' + this.wave, '#ffe885', 42);
        if (this.waveLabelTxt) this.waveLabelTxt.setText('♾️ ' + t('waveLabel') + ' ' + this.wave);
      }
      this.timeBar.scaleX = (this.t % 25) / 25;
      this.timeBar.setFillStyle(this.wave >= 4 ? 0xe5484d : this.wave >= 2 ? 0xff8a2b : 0x58c46b);
      this.timeTxt.setText('⏱ ' + Math.floor(this.t) + 's');
    } else {
      // الوقت وموجة الحماس في آخر 10 ثوانٍ
      this.timeLeft -= dt;
      if (this.timeLeft <= 0) { this.timeLeft = 0; this.finish(false); return; }
      if (this.timeLeft <= 10 && !this.rushStarted) {
        this.rushStarted = true;
        Sound.play('powerup');
        this.pop(W / 2, 310, t('rushWave'), '#ffe885', 38);
      }
      this.timeBar.scaleX = this.timeLeft / this.L.time;
      this.timeBar.setFillStyle(this.timeLeft / this.L.time < 0.2 ? 0xe5484d : this.rushStarted ? 0xff8a2b : 0xffc83d);
      this.timeTxt.setText('⏱ ' + Math.ceil(this.timeLeft));
    }

    // حركة القط: يتبع إصبعك أو الفأرة أو الأسهم و A/D بنعومة وبحد أقصى للسرعة
    const goLeft = (this.cursors && this.cursors.left.isDown)
      || (this.keyA && this.keyA.isDown)
      || (typeof isKeyDown === 'function' && isKeyDown('ArrowLeft', 'KeyA', 'a', 'A', 37, 65));
    const goRight = (this.cursors && this.cursors.right.isDown)
      || (this.keyD && this.keyD.isDown)
      || (typeof isKeyDown === 'function' && isKeyDown('ArrowRight', 'KeyD', 'd', 'D', 39, 68));
    if (goLeft || goRight) this._keyboardActive = true;
    if (goLeft) this.targetX -= 920 * dt;
    if (goRight) this.targetX += 920 * dt;
    this.targetX = Phaser.Math.Clamp(this.targetX, 90, W - 90);
    const diff = this.targetX - this.cat.x;
    const maxStep = 1500 * dt * (CATS[save.cat].speed / 280);
    const mv = Phaser.Math.Clamp(diff * (1 - Math.exp(-dt * 14)), -maxStep, maxStep);
    this.cat.x += mv;
    if (Math.abs(diff) > 8) this.cat.setFlipX(diff < 0);   // الرسم يواجه اليمين

    // القفزة والتمدد والتفلطح
    if (this.jy > 0 || this.vy > 0) {
      this.vy -= 1800 * dt; this.jy += this.vy * dt;
      if (this.jy <= 0) { this.jy = 0; this.vy = 0; this.sq = 1; }
    }
    this.sq = Math.max(0, this.sq - dt * 5);
    const moving = Math.abs(mv) > 0.6;
    const moveSpeed = dt > 0 ? Math.abs(mv) / dt : 0;
    if (moving) { this.runT = 0.12; this.walkPhase = (this.walkPhase || 0) + dt * 10; }
    else this.walkPhase = 0;
    this.runT -= dt; this.poseT -= dt;
    const activeKey = CATS[save.cat].key;
    if (this.poseT > 0) {
      if (this.cat.anims && this.cat.anims.isPlaying) this.cat.stop();
      const pk = activeKey + '_' + this.pose;
      if (this.cat.texture.key !== pk) this.cat.setTexture(pk);
    } else if (this.jy > 0) {
      if (this.cat.anims && this.cat.anims.isPlaying) this.cat.stop();
      const pk = activeKey + '_jump';
      if (this.cat.texture.key !== pk) this.cat.setTexture(pk);
    } else if (this.runT > 0 && this.walkAnimKey && this.anims && this.anims.exists(this.walkAnimKey)) {
      if (!this.cat.anims.isPlaying || (this.cat.anims.currentAnim && this.cat.anims.currentAnim.key !== this.walkAnimKey)) {
        this.cat.play(this.walkAnimKey, true);
      }
      this.cat.anims.timeScale = Phaser.Math.Clamp(moveSpeed / 560, 0.75, 1.85);
    } else if (this.runT > 0) {
      const pk = typeof catMoveFrame === 'function' ? catMoveFrame(activeKey, this.walkPhase, this) : activeKey + '_run';
      if (this.cat.texture.key !== pk) this.cat.setTexture(pk);
    } else {
      if (this.cat.anims && this.cat.anims.isPlaying) this.cat.stop();
      const pk = activeKey + '_' + (this.combo >= 8 ? 'love' : 'idle');
      if (this.cat.texture.key !== pk) this.cat.setTexture(pk);
    }
    const stride = moving && this.jy === 0 ? Math.sin(this.walkPhase * 1.9) : 0;
    const bob = moving && this.jy === 0 ? Math.abs(stride) * 7 : 0;
    let sx = 1 + this.sq * 0.22, sy = 1 - this.sq * 0.22;
    if (this.vy > 0) { sx = 0.92; sy = 1.1; }
    this.cat.setScale(this.baseScale * sx, this.baseScale * sy)
      .setY(GROUND_Y - this.jy - bob).setRotation(Phaser.Math.Clamp(mv * 0.009 + stride * 0.025, -0.14, 0.14));
    this.shadow.setX(this.cat.x).setScale(Math.max(0.4, 1 - this.jy / 420));
    if (this.catAura) {
      this.catAura.setPosition(this.cat.x, this.cat.y - 95).setAlpha((0.2 + save.cat * 0.05) + Math.sin(this.t * 5) * 0.06);
    }
    if (this.catTrail) {
      this.trailT -= dt;
      if ((moving || this.jy > 0) && this.trailT <= 0) {
        this.trailT = 0.09;
        this.catTrail.emitParticleAt(this.cat.x + Phaser.Math.Between(-26, 26), this.cat.y - Phaser.Math.Between(35, 130), 1);
      }
    }

    // الإسقاط: جدول البذرة للكلاسيكي أو التوليد المتصاعد للا نهائي (مع قلب نادر كل دقيقة عند نقص القلوب)
    if (this.mode === 'endless') {
      const r = this.endlessRng;
      const interval = Math.max(0.32, 0.90 - this.t * 0.0045);
      const bombProb = Math.min(0.46, 0.20 + this.t * 0.0022);
      const speedMult = Math.min(1.90, 1 + this.t * 0.0065);
      while (this.t >= this.nextEndlessSpawn) {
        const isBomb = r() < bombProb;
        const x = Math.floor(70 + r() * (W - 140));
        const sp = Math.floor((250 + r() * 190) * speedMult);
        this.spawn({ type: isBomb ? 'bomb' : 'cheese', x, sp });
        if (!isBomb && this.wave >= 2 && r() < Math.min(0.35, 0.10 + this.wave * 0.05)) {
          const twinX = x > W / 2 ? Math.max(70, x - Math.floor(140 + r() * 110)) : Math.min(W - 70, x + Math.floor(140 + r() * 110));
          this.spawn({ type: r() < bombProb + 0.08 ? 'bomb' : 'cheese', x: twinX, sp: Math.floor(sp * 1.08) });
        }
        this.nextEndlessSpawn += interval;
      }
      if (this.t >= this.nextMouseAt) {
        this.spawn({ type: 'mouse', x: Math.floor(70 + r() * (W - 140)), sp: Math.floor((360 + r() * 130) * Math.min(1.5, speedMult)) });
        this.nextMouseAt += Math.max(4.5, 8.5 - this.wave * 0.4) + r() * 2.5;
      }
      if (this.t >= this.nextPowerAt) {
        const powerId = POWERUP_KEYS[Math.floor(r() * POWERUP_KEYS.length)];
        this.spawn({ type: 'powerup', powerId, x: Math.floor(95 + r() * (W - 190)), sp: Math.floor(235 + r() * 55) });
        this.nextPowerAt += 13 + r() * 5;
      }
      if (this.lives < 3 && this.t >= this.nextHeartAt) {
        this.spawn({ type: 'heart', x: Math.floor(85 + r() * (W - 170)), sp: Math.floor(235 + r() * 55) });
        this.nextHeartAt = this.t + 60;
      }
    } else {
      while (this.si < this.sched.length && this.sched[this.si].t <= this.t) this.spawn(this.sched[this.si++]);
      while (this.powerSched && this.pi < this.powerSched.length && this.powerSched[this.pi].t <= this.t) this.spawn(this.powerSched[this.pi++]);
    }

    // تحديث القدرات المؤقتة وجذب الجبن بالمغناطيس
    this.updatePowerups(dt);

    // العناصر
    const fallBoost = this.rushStarted ? 1.15 : 1;
    for (const it of this.items) {
      it.img.y += it.sp * fallBoost * dt; it.spin += dt * 3;
      if (it.type === 'powerup') {
        it.img.x = Phaser.Math.Clamp((it.baseX || it.img.x) + Math.sin(it.spin * 0.9) * 38, 70, W - 70);
        it.img.rotation = Math.sin(it.spin) * 0.14;
        if (it.halo) it.halo.setPosition(it.img.x, it.img.y).setScale(2.0 + Math.sin(it.spin * 2) * 0.25);
      } else {
        it.img.rotation = it.type === 'mouse' ? Math.sin(it.spin * 2) * 0.5 : it.type === 'cheese' ? Math.sin(it.spin) * 0.35 : Math.sin(it.spin) * 0.15;
      }
      if (this.hits(it)) { it.dead = true; this.collect(it); if (this.over) return; }
      else if (it.img.y > GROUND_Y + 130) it.dead = true;
    }
    this.items = this.items.filter((it) => {
      if (it.dead) { it.img.destroy(); if (it.halo) it.halo.destroy(); }
      return !it.dead;
    });
  }
}

// ===== لوحة المتصدرين المحلية (تسجيل أعلى النتائج، المنافسة بين اللاعبين، وتصنيف العوالم) =====
const Leaderboard = {
  MAX_ENTRIES: 25,
  ensure() {
    if (!Array.isArray(save.leaderboard)) save.leaderboard = [];
    if (!Array.isArray(save.bestScores) || save.bestScores.length !== LEVELS.length) {
      const old = Array.isArray(save.bestScores) ? save.bestScores : [];
      save.bestScores = LEVELS.map((_, i) => Math.max(0, Number(old[i]) || 0));
    }
    if (typeof save.playerName !== 'string') save.playerName = '';
  },
  playerName() {
    this.ensure();
    const cleaned = save.playerName.trim();
    return cleaned || (t('player') + ' 1');
  },
  setPlayerName(name) {
    this.ensure();
    save.playerName = String(name || '').replace(/\s+/g, ' ').trim().slice(0, 14);
    persist();
    return this.playerName();
  },
  _sort(list) {
    return list.sort((a, b) => (b.score - a.score) || (b.stars - a.stars) || ((b.maxCombo || 0) - (a.maxCombo || 0)) || ((b.ts || 0) - (a.ts || 0)));
  },
  record({ score, level, mode = 'classic', cat, stars, maxCombo, died }) {
    this.ensure();
    const isEndless = mode === 'endless';
    const lvl = Math.max(0, Math.min(LEVELS.length - 1, Number(level) || 0));
    const sc = Math.max(0, Math.round(Number(score) || 0));
    const prevWorldBest = isEndless ? (save.endlessBest || 0) : (save.bestScores[lvl] || 0);
    const prevGlobalBest = save.leaderboard.length ? this._sort([...save.leaderboard])[0].score : 0;
    if (sc <= 0) {
      return { rank: null, worldRank: null, isNewWorldBest: false, isNewGlobalBest: false, prevWorldBest, entryId: null };
    }
    const badgeDef = typeof Achievements !== 'undefined' ? Achievements.activeBadgeDef() : null;
    const entry = {
      id: Date.now().toString(36) + Math.random().toString(36).slice(2, 6),
      name: this.playerName(),
      score: sc,
      level: lvl,
      mode: isEndless ? 'endless' : 'classic',
      cat: CATS[cat] ? cat : 0,
      stars: isEndless ? 0 : Math.max(0, Math.min(3, Number(stars) || 0)),
      maxCombo: Math.max(0, Number(maxCombo) || 0),
      badge: badgeDef ? badgeDef.icon : '',
      died: !!died,
      ts: Date.now(),
    };
    save.leaderboard.push(entry);
    this._sort(save.leaderboard);
    if (save.leaderboard.length > this.MAX_ENTRIES) save.leaderboard.length = this.MAX_ENTRIES;
    const isNewWorldBest = !isEndless && sc > prevWorldBest;
    if (isNewWorldBest) save.bestScores[lvl] = sc;
    persist();
    const gIdx = save.leaderboard.findIndex((e) => e.id === entry.id);
    const wList = save.leaderboard.filter((e) => e.level === lvl && e.mode !== 'endless');
    const wIdx = wList.findIndex((e) => e.id === entry.id);
    return {
      rank: gIdx >= 0 ? gIdx + 1 : null,
      worldRank: wIdx >= 0 ? wIdx + 1 : null,
      isNewWorldBest,
      isNewGlobalBest: sc > prevGlobalBest,
      prevWorldBest,
      entryId: entry.id,
    };
  },
  top(levelFilter = null, limit = 7) {
    this.ensure();
    const list = levelFilter === null || levelFilter === undefined
      ? [...save.leaderboard]
      : save.leaderboard.filter((e) => e.level === levelFilter && e.mode !== 'endless');
    return this._sort(list).slice(0, limit);
  },
  personalBest(levelFilter = null) {
    this.ensure();
    if (levelFilter !== null && levelFilter !== undefined) return save.bestScores[levelFilter] || 0;
    return Math.max(0, ...save.bestScores);
  },
  clear() {
    save.leaderboard = [];
    save.bestScores = LEVELS.map(() => 0);
    persist();
  },
};

function openNameEditorModal(scene, onSaved) {
  if (scene._nameModal) return;
  let draft = save.playerName ? save.playerName.slice(0, 14) : '';
  const M = (scene._nameModal = scene.add.container(0, 0).setDepth(120));
  M.add(scene.add.rectangle(0, 0, W, H, 0x060414, 0.86).setOrigin(0).setInteractive());

  const pg = scene.add.graphics();
  pg.fillStyle(0x1d1850, 0.99).fillRoundedRect(46, 195, W - 92, 875, 36);
  pg.lineStyle(5, 0xffc83d, 1).strokeRoundedRect(46, 195, W - 92, 875, 36);
  M.add(pg);

  if (scene.textures.exists('ui_edit')) M.add(scene.add.image(W / 2 - 145, 252, 'ui_edit').setScale(42 / 96));
  M.add(txt(scene, W / 2 + (scene.textures.exists('ui_edit') ? 16 : 0), 252, t('enterName'), 42, '#ffc83d', { strokeColor: '#4a2400' }));

  const box = scene.add.graphics();
  box.fillStyle(0x120e36, 1).fillRoundedRect(90, 300, W - 180, 76, 22);
  box.lineStyle(3, 0x8a7bd8, 1).strokeRoundedRect(90, 300, W - 180, 76, 22);
  M.add(box);

  const nameTxt = txt(scene, W / 2, 338, '', 36, '#ffffff', { stroke: false });
  M.add(nameTxt);
  const refreshDraft = () => nameTxt.setText((draft || Leaderboard.playerName()) + (draft ? ' _' : ''));
  refreshDraft();

  const addKeyBtn = (x, y, w, h, label, o, cb) => {
    const b = makeButton(scene, x, y, w, h, label, o, cb);
    M.add(b);
    return b;
  };

  const presets = save.lang === 'ar'
    ? ['مشمش', 'صياد', 'بطل', 'نمر', 'شادو', 'الملك']
    : ['MISHMISH', 'HUNTER', 'HERO', 'SHADOW', 'SNOW', 'KING'];
  presets.forEach((pName, idx) => {
    const col = idx % 3, row = Math.floor(idx / 3);
    addKeyBtn(174 + col * 186, 424 + row * 62, 168, 48, pName,
      { size: 22, color: 0x2f2873, shade: 0x1b1647, textColor: '#ffe9a8' },
      () => { draft = pName.slice(0, 14); refreshDraft(); });
  });

  const rows = [
    ['Q','W','E','R','T','Y','U','I','O','P'],
    ['A','S','D','F','G','H','J','K','L','⌫'],
    ['Z','X','C','V','B','N','M','1','2','3'],
  ];
  rows.forEach((r, ri) => {
    r.forEach((ch, ci) => {
      const kx = 104 + ci * 57;
      const ky = 562 + ri * 64;
      const isDel = ch === '⌫';
      addKeyBtn(kx, ky, 50, 54, ch,
        { size: 24, color: isDel ? 0xe5484d : 0x3a3185, shade: isDel ? 0x8f1f24 : 0x221c56, textColor: '#ffffff' },
        () => {
          if (isDel) draft = draft.slice(0, -1);
          else if (draft.length < 14) draft += ch;
          refreshDraft();
        });
    });
  });

  addKeyBtn(W / 2 - 110, 764, 220, 54, '␣', { size: 24, color: 0x3a3185, shade: 0x221c56, textColor: '#ffffff' }, () => {
    if (draft.length > 0 && draft.length < 14 && !draft.endsWith(' ')) { draft += ' '; refreshDraft(); }
  });
  addKeyBtn(W / 2 + 135, 764, 150, 54, t('clearScores'), { size: 22, color: 0x6d6a80, shade: 0x3f3d50, textColor: '#ffffff' }, () => {
    draft = ''; refreshDraft();
  });

  const cleanupAndClose = (apply) => {
    if (scene.input && scene.input.keyboard) scene.input.keyboard.off('keydown', onKey);
    if (!scene._nameModal) return;
    scene._nameModal.destroy(true);
    scene._nameModal = null;
    if (apply) {
      Leaderboard.setPlayerName(draft);
      if (typeof onSaved === 'function') onSaved();
    }
  };

  const onKey = (ev) => {
    if (!scene._nameModal) return;
    if (ev.key === 'Escape') { cleanupAndClose(false); return; }
    if (ev.key === 'Enter') { cleanupAndClose(true); return; }
    if (ev.key === 'Backspace') { draft = draft.slice(0, -1); refreshDraft(); return; }
    if (ev.key && ev.key.length === 1 && !ev.ctrlKey && !ev.metaKey && !ev.altKey && draft.length < 14) {
      draft += ev.key;
      refreshDraft();
    }
  };
  if (scene.input && scene.input.keyboard) {
    scene.input.keyboard.on('keydown', onKey);
    scene.events.once('shutdown', () => scene.input.keyboard.off('keydown', onKey));
  }

  M.add(makeButton(scene, W / 2 - 140, 965, 230, 82, t('back'),
    { icon: 'ui_arrow_left', iconSize: 28, iconSide: 'left', size: 32, color: 0x8a7bd8, shade: 0x4b3c99, textColor: '#ffffff' }, () => cleanupAndClose(false)));
  M.add(makeButton(scene, W / 2 + 140, 965, 250, 82, t('saveLabel'),
    { icon: 'ui_check', iconSize: 30, size: 34, color: 0x58c46b, shade: 0x2d7a3d, textColor: '#ffffff' }, () => cleanupAndClose(true)));
}

function openLeaderboardModal(scene, opts = {}) {
  if (scene._lbModal) return;
  Leaderboard.ensure();
  let filter = opts.level !== undefined ? opts.level : null;
  let confirmReset = false;

  const M = (scene._lbModal = scene.add.container(0, 0).setDepth(105));
  M.add(scene.add.rectangle(0, 0, W, H, 0x070518, 0.86).setOrigin(0).setInteractive());

  const pg = scene.add.graphics();
  pg.fillStyle(0x1d1850, 0.98).fillRoundedRect(34, 110, W - 68, 1060, 38);
  pg.lineStyle(5, 0xffc83d, 1).strokeRoundedRect(34, 110, W - 68, 1060, 38);
  M.add(pg);

  if (scene.textures.exists('ui_trophy')) M.add(scene.add.image(W / 2 - 185, 170, 'ui_trophy').setScale(58 / 128));
  M.add(txt(scene, W / 2 + (scene.textures.exists('ui_trophy') ? 24 : 0), 170,
    (scene.textures.exists('ui_trophy') ? '' : '🏆 ') + t('leaderboard'), 46, '#ffc83d', { strokeColor: '#4a2400' }));

  const dyn = scene.add.container(0, 0);
  M.add(dyn);

  const worldIcons = ['🏙️', '🏜️', '🏝️', '❄️', '🚀'];
  const medals = ['🥇', '🥈', '🥉'];
  const rankColors = [0xffc83d, 0xd8e0ee, 0xd98a4a];

  const closeModal = () => {
    if (!scene._lbModal) return;
    scene._lbModal.destroy(true);
    scene._lbModal = null;
    if (typeof opts.onClose === 'function') opts.onClose();
  };

  const render = () => {
    dyn.removeAll(true);

    // شريط اللاعب الحالي + أفضل رقم
    const pb = scene.add.graphics();
    pb.fillStyle(0x282166, 0.96).fillRoundedRect(60, 218, W - 120, 74, 22);
    pb.lineStyle(2, 0x6a4fd8, 1).strokeRoundedRect(60, 218, W - 120, 74, 22);
    dyn.add(pb);
    dyn.add(txt(scene, 185, 255, Leaderboard.playerName(), 26, '#fff7e6', { stroke: false, wrap: 220 }));
    dyn.add(makeButton(scene, 355, 255, 126, 50, t('editName'),
      { icon: 'ui_edit', iconSize: 24, iconGap: 6, size: 19, color: 0x8a7bd8, shade: 0x4b3c99, textColor: '#ffffff' },
      () => openNameEditorModal(scene, render)));
    dyn.add(txt(scene, 540, 255, t('bestScore') + ': ' + Leaderboard.personalBest(filter), 24, '#ffc83d', { stroke: false }));

    // تبويبات التصفية (الكل + 5 عوالم بصور الجزر الحقيقية)
    const tabs = [{ val: null, label: t('allWorlds'), icon: null }].concat(LEVELS.map((L, i) => ({ val: i, label: '', icon: 'island_' + L.theme })));
    tabs.forEach((tb, ti) => {
      const active = filter === tb.val;
      const tx = 109 + ti * 100;
      const hasIsl = tb.icon && scene.textures.exists(tb.icon);
      dyn.add(makeButton(scene, tx, 330, 92, 52, hasIsl ? '' : (tb.label || worldIcons[ti - 1]),
        active
          ? { icon: hasIsl ? tb.icon : undefined, iconSize: 40, size: ti === 0 ? 22 : 28, color: 0xffc83d, shade: 0xb57a10, textColor: '#3b2a00' }
          : { icon: hasIsl ? tb.icon : undefined, iconSize: 36, size: ti === 0 ? 20 : 26, color: 0x2b2466, shade: 0x191442, textColor: '#d0caff' },
        () => { filter = tb.val; confirmReset = false; render(); }));
    });

    // قائمة النتائج
    const rows = Leaderboard.top(filter, 7);
    if (!rows.length) {
      const eg = scene.add.graphics();
      eg.fillStyle(0x130f38, 0.9).fillRoundedRect(64, 410, W - 128, 540, 28);
      eg.lineStyle(2, 0x4b3c99, 0.8).strokeRoundedRect(64, 410, W - 128, 540, 28);
      dyn.add(eg);
      if (scene.textures.exists('ui_trophy')) dyn.add(scene.add.image(W / 2, 595, 'ui_trophy').setScale(1.1).setAlpha(0.75));
      dyn.add(txt(scene, W / 2, 745, t('noScores'), 30, '#cfcaff', { stroke: false, wrap: 500 }));
    } else {
      rows.forEach((e, idx) => {
        const ry = 420 + idx * 82;
        const isHi = opts.highlightId && e.id === opts.highlightId;
        const borderCol = isHi ? 0x58c46b : (rankColors[idx] || 0x4b3c99);
        const rg = scene.add.graphics();
        rg.fillStyle(isHi ? 0x1f3a36 : (idx === 0 ? 0x2f2568 : 0x221c56), 0.96).fillRoundedRect(60, ry - 36, W - 120, 72, 20);
        rg.lineStyle(isHi || idx < 3 ? 3 : 2, borderCol, 1).strokeRoundedRect(60, ry - 36, W - 120, 72, 20);
        dyn.add(rg);

        const rankLabel = idx < 3 ? medals[idx] : ('#' + (idx + 1));
        dyn.add(txt(scene, 102, ry, rankLabel, idx < 3 ? 34 : 26, idx === 0 ? '#ffc83d' : '#fff7e6', { stroke: false }));

        const catDef = CATS[e.cat] || CATS[0];
        if (scene.textures.exists(catDef.key + '_happy')) {
          dyn.add(scene.add.image(164, ry + 2, catDef.key + '_happy').setScale(48 / 401));
        }

        const badgeStr = e.badge ? e.badge + ' ' : '';
        dyn.add(txt(scene, 345, ry - 12, badgeStr + e.name, 25, '#ffffff', { stroke: false, wrap: 240 }));
        const modeTag = e.mode === 'endless' ? ('♾️ ' + t('modeEndless')) : (t('lv' + (e.level || 0)) + '  ·  ' + (e.stars > 0 ? ('★'.repeat(e.stars)) : '☆'));
        const subLine = modeTag + '  ·  ' + (e.maxCombo || 0) + 'x';
        dyn.add(txt(scene, 345, ry + 16, subLine, 18, '#cfcaff', { stroke: false }));

        dyn.add(txt(scene, 580, isHi ? ry - 10 : ry, String(e.score), 34, idx === 0 ? '#ffc83d' : '#ffe9a8', { stroke: false }));
        if (isHi) dyn.add(txt(scene, 580, ry + 18, t('newTag'), 17, '#7ff594', { stroke: false }));
      });
    }

    // الأزرار السفلية
    const hasEntries = save.leaderboard && save.leaderboard.length > 0;
    const hasPlay = typeof opts.onPlay === 'function';
    if (hasEntries) {
      dyn.add(makeButton(scene, 152, 1096, 168, 76, confirmReset ? t('confirmClear') : t('clearScores'),
        { icon: confirmReset ? undefined : 'ui_trash', iconSize: 28, iconGap: 6, size: confirmReset ? 20 : 24, color: confirmReset ? 0xe5484d : 0x6d6a80, shade: confirmReset ? 0x8f1f24 : 0x3f3d50, textColor: '#ffffff' },
        () => {
          if (!confirmReset) { confirmReset = true; render(); }
          else { Leaderboard.clear(); confirmReset = false; render(); }
        }));
    }
    const closeX = hasEntries ? (hasPlay ? 360 : 458) : (hasPlay ? 255 : W / 2);
    dyn.add(makeButton(scene, closeX, 1096, 210, 82, t('close'),
      { size: 34, color: 0x8a7bd8, shade: 0x4b3c99, textColor: '#ffffff' }, closeModal));
    if (hasPlay) {
      dyn.add(makeButton(scene, 568, 1096, 164, 82, t('play'),
        { icon: 'ui_play', iconSize: 30, size: 28, color: 0x58c46b, shade: 0x2d7a3d, textColor: '#ffffff' },
        () => { closeModal(); opts.onPlay(); }));
    }
  };

  render();
}


;
/* ===== js/story.js ===== */
// ===== المقدمة القصصية: مشهد Phaser متحرك بطبقات منفصلة =====
// الطبقات (depth): سماء 0 | نجوم/قمر 1-2 | مدينة بعيدة 3 | مدينة قريبة 5 | جدار 6 | شارع 8-10
//                  صندوق/جبنة/قط/قنبلة 12-22 | مطر 40 | الحوار 60 | الواجهة 70
const STORY_LINES = ['story1', 'story2', 'story3', 'story4', 'story5'];
const CAT_SC = 330 / 401;   // مقياس مشمش في المشهد

class StoryScene extends Phaser.Scene {
  constructor() { super('Story'); }
  init() { this.beat = -1; this.lock = true; this.done = false; }

  create() {
    enter(this);
    Sound.startMusic(-1);
    this.buildSky(); this.buildCity(); this.buildStreet(); this.buildRain();
    this.buildActors(); this.buildUI();
    this.input.on('pointerdown', (p) => { if (p.x > W - 230 && p.y < 130) return; Sound.init(); this.next(); });
    this.time.delayedCall(1000, () => { this.lock = false; this.next(); });   // اللحظة الأولى تبدأ تلقائياً
  }

  // ---- السماء والقمر ----
  buildSky() {
    if (!this.textures.exists('story_sky')) {
      const tx = this.textures.createCanvas('story_sky', W, H), c = tx.getContext();
      const g = c.createLinearGradient(0, 0, 0, H);
      g.addColorStop(0, '#0a0a2c'); g.addColorStop(0.45, '#2a2370'); g.addColorStop(0.72, '#4b3a94'); g.addColorStop(1, '#2c2466');
      c.fillStyle = g; c.fillRect(0, 0, W, H); tx.refresh();
    }
    this.add.image(0, 0, 'story_sky').setOrigin(0).setDepth(0);
    for (let i = 0; i < 22; i++) {
      const s = this.add.image(Phaser.Math.Between(15, W - 15), Phaser.Math.Between(15, 330), 'star').setDepth(1)
        .setScale(Phaser.Math.FloatBetween(0.08, 0.22)).setTint(0xfff3b0).setAlpha(0.3);
      this.tweens.add({ targets: s, alpha: 1, duration: Phaser.Math.Between(800, 2000), yoyo: true, repeat: -1, delay: Phaser.Math.Between(0, 1500) });
    }
    const mx = 540, my = 215;
    const halo = this.add.image(mx, my, 'glow').setScale(9).setTint(0xfff0b0).setAlpha(0.45).setBlendMode('ADD').setDepth(2);
    this.tweens.add({ targets: halo, alpha: 0.3, duration: 2500, yoyo: true, repeat: -1, ease: 'Sine.InOut' });
    const m = this.add.graphics().setDepth(2);
    m.fillStyle(0xfff4c8, 1).fillCircle(mx, my, 92);
    m.fillStyle(0xe9dca6, 0.85).fillCircle(mx - 30, my - 20, 18).fillCircle(mx + 34, my + 22, 24).fillCircle(mx + 10, my - 45, 11);
    const cl = this.add.ellipse(160, 160, 300, 70, 0x6a5ad0, 0.35).setDepth(2);
    this.tweens.add({ targets: cl, x: 260, duration: 9000, yoyo: true, repeat: -1, ease: 'Sine.InOut' });
  }

  // ---- مدينتان بعيدة وقريبة (بارالاكس) ----
  buildCity() {
    const mk = (list, color, win, depth, drift, dur) => {
      const L = this.add.container(0, 24).setDepth(depth), g = this.add.graphics();
      L.add(g);
      list.forEach(([x, w, top]) => {
        g.fillStyle(color, 1).fillRect(x, top, w, 920 - top);
        for (let wy = top + 28; wy < 880; wy += 46) for (let wx = x + 14; wx < x + w - 24; wx += 36) {
          const r = Math.random();
          if (r < 0.34) g.fillStyle(win, 0.85).fillRect(wx, wy, 16, 22);
          else if (r < 0.40) {
            const b = this.add.rectangle(wx, wy, 16, 22, win, 1).setOrigin(0); L.add(b);
            this.tweens.add({ targets: b, alpha: 0.1, duration: Phaser.Math.Between(700, 1800), yoyo: true, repeat: -1, delay: Phaser.Math.Between(0, 1500) });
          }
        }
      });
      this.tweens.add({ targets: L, y: 0, duration: 4500, ease: 'Sine.Out' });          // حركة اقتراب بطيئة
      this.tweens.add({ targets: L, x: drift, duration: dur, yoyo: true, repeat: -1, ease: 'Sine.InOut' });
      return L;
    };
    const far = mk([[-40, 150, 430], [100, 110, 380], [200, 130, 450], [320, 110, 400], [420, 130, 350], [540, 110, 440], [640, 140, 390]], 0x1a1850, 0xffd466, 3, -14, 7000);
    mk([[-50, 190, 560], [130, 150, 500], [270, 170, 590], [430, 150, 530], [570, 200, 550]], 0x251f60, 0xffc860, 5, 18, 6000);
    const bc = this.add.image(480, 352, 'cat_idle').setOrigin(0.5, 1).setScale(0.16).setTint(0x05051a);   // قط أسود على السطح
    far.add(bc);
  }

  // ---- الشارع: جدار، ملصق، عمود إنارة، أرضية مبللة، صندوق ----
  buildStreet() {
    const g = this.add.graphics().setDepth(8);
    g.fillStyle(0x2b2468, 1).fillRect(0, 900, W, H - 900);
    g.fillStyle(0x6a5ad0, 1).fillRect(0, 900, W, 10);
    g.fillStyle(0x3a3088, 0.7);
    for (let i = 0; i < 6; i++) g.fillRect(i * 130 - 20, 965 + (i % 2) * 80, 90, 6);

    const w = this.add.graphics().setDepth(6);
    w.fillStyle(0x7d3340, 1).fillRect(0, 230, 205, 670);
    w.lineStyle(3, 0x58202e, 0.8);
    for (let y = 230; y < 900; y += 42) { w.lineBetween(0, y, 205, y); for (let x = ((y - 230) / 42 % 2) * 34; x < 205; x += 68) w.lineBetween(x, y, x, y + 42); }
    w.fillStyle(0x3d1420, 1).fillRect(200, 230, 10, 670);
    const p = this.add.container(105, 420).setDepth(7).setAngle(-4);
    p.add([this.add.rectangle(0, 0, 140, 180, 0xf3d79a).setStrokeStyle(4, 0x9b6a2a),
      txt(this, 0, -30, 'Dream\nBig', 34, '#5a3a1a', { stroke: false }), txt(this, 0, 52, '🐾', 40, '#5a3a1a', { stroke: false })]);

    const cone = this.add.graphics().setDepth(9);
    cone.fillStyle(0xffd070, 0.13).fillTriangle(585, 375, 400, 905, 740, 905);
    this.add.ellipse(585, 960, 300, 46, 0xffc860, 0.18).setDepth(9);
    const lp = this.add.graphics().setDepth(10);
    lp.fillStyle(0x1b1830, 1).fillRect(662, 330, 16, 575).fillRect(585, 322, 93, 12);
    lp.fillStyle(0x2a2547, 1).fillRoundedRect(558, 332, 54, 38, 8);
    lp.fillStyle(0xfff2b0, 1).fillEllipse(585, 372, 34, 14);
    const lg = this.add.image(585, 378, 'glow').setScale(7).setTint(0xffc860).setAlpha(0.6).setBlendMode('ADD').setDepth(10);
    this.tweens.add({ targets: lg, alpha: 0.4, duration: 140, yoyo: true, repeat: -1, repeatDelay: 1700 });   // وميض خفيف

    const bx = 140, by = 925;
    const back = this.add.graphics().setDepth(12), front = this.add.graphics().setDepth(22);
    back.fillStyle(0x3b2610, 1).fillRect(bx - 95, by - 130, 190, 40);
    front.fillStyle(0xc99a5b, 1).fillRect(bx - 95, by - 95, 190, 95);
    front.fillPoints([{ x: bx - 95, y: by - 95 }, { x: bx - 140, y: by - 125 }, { x: bx - 100, y: by - 142 }, { x: bx - 60, y: by - 95 }], true);
    front.fillPoints([{ x: bx + 95, y: by - 95 }, { x: bx + 140, y: by - 125 }, { x: bx + 100, y: by - 142 }, { x: bx + 60, y: by - 95 }], true);
    front.fillStyle(0xe0b777, 1).fillRect(bx - 18, by - 95, 36, 95);
    front.lineStyle(3, 0x8a6030, 1).strokeRect(bx - 95, by - 95, 190, 95);
    this.eyes = this.add.container(0, 0).setDepth(13);
    this.eyes.add([this.add.ellipse(bx - 24, by - 112, 14, 18, 0xffd24a), this.add.ellipse(bx + 24, by - 112, 14, 18, 0xffd24a)]);
    this.tweens.add({ targets: this.eyes.list, scaleY: 0.1, duration: 120, yoyo: true, repeat: -1, repeatDelay: 1800 });
  }

  // ---- مطر وتموجات ----
  buildRain() {
    if (!this.textures.exists('story_rain')) {
      const g = this.make.graphics({ x: 0, y: 0, add: false });
      g.fillStyle(0xcfe0ff, 1).fillRect(0, 0, 3, 38); g.generateTexture('story_rain', 3, 38); g.destroy();
    }
    this.add.particles(0, 0, 'story_rain', {
      x: { min: -80, max: W + 140 }, y: -50, lifespan: 1100, speedY: { min: 1000, max: 1300 }, speedX: -180, rotate: 9,
      alpha: { start: 0.5, end: 0.15 }, scale: { min: 0.6, max: 1.1 }, frequency: 12, quantity: 2,
    }).setDepth(40);
    this.time.addEvent({ delay: 260, loop: true, callback: () => {
      const e = this.add.ellipse(Phaser.Math.Between(20, W - 20), Phaser.Math.Between(930, 1250), 10, 4).setStrokeStyle(2, 0xbfd0ff, 0.7).setDepth(9);
      this.tweens.add({ targets: e, scale: 6, alpha: 0, duration: 700, onComplete: () => e.destroy() });
    } });
  }

  // ---- الشخصيات والعناصر ----
  buildActors() {
    this.cat = this.add.image(140, 900, 'cat_idle').setOrigin(0.5, 1).setScale(CAT_SC).setDepth(20).setAlpha(0);
    this.glow = this.add.image(610, 820, 'glow').setScale(5).setTint(0xffd24a).setBlendMode('ADD').setDepth(14).setAlpha(0);
    this.cheese = this.add.image(610, 905, 'cheese').setOrigin(0.5, 1).setDepth(15).setAlpha(0);
    this.sparks = this.add.particles(0, 0, 'star', { lifespan: 900, speed: { min: 25, max: 80 }, scale: { start: 0.16, end: 0 }, tint: 0xffe27a, blendMode: 'ADD', frequency: -1 }).setDepth(16);
    this.boomFx = this.add.particles(0, 0, 'glow', { lifespan: 700, speed: { min: 120, max: 380 }, scale: { start: 0.8, end: 0 }, tint: 0xff9a2e, blendMode: 'ADD', frequency: -1 }).setDepth(30);
    this.bomb = this.add.image(470, 905, 'bomb').setOrigin(0.5, 1).setScale(0.7).setDepth(21).setAlpha(0);
    const pt = this.add.container(360, 500).setDepth(18).setScale(0).setAlpha(0);
    pt.add(this.add.image(0, 0, 'glow').setScale(7).setTint(0xa35cff).setBlendMode('ADD'));
    [[130, 0x7be8ff], [95, 0xc58bff], [62, 0xffffff], [32, 0xa35cff]].forEach(([r, col], i) => {
      const a = this.add.graphics().lineStyle(12 - i * 2, col, 0.9).beginPath().arc(0, 0, r, 0, Math.PI * 1.5).strokePath();
      pt.add(a); this.tweens.add({ targets: a, angle: i % 2 ? -360 : 360, duration: 1400 + i * 300, repeat: -1 });
    });
    this.portal = pt;
  }

  // ---- الحوار والأزرار ----
  buildUI() {
    this.panel = this.add.container(W / 2, 1100).setDepth(60).setAlpha(0);
    const pg = this.add.graphics();
    pg.fillStyle(0x8a5a1c, 1).fillRoundedRect(-330, -118, 660, 246, 34);
    pg.fillStyle(0xf7dc9a, 1).fillRoundedRect(-322, -126, 644, 240, 30);
    pg.lineStyle(4, 0xd9b366, 1).strokeRoundedRect(-310, -114, 620, 216, 24);
    this.line = txt(this, 0, -8, '', 38, '#4a2a0a', { stroke: false, wrap: 560 });
    this.panel.add([pg, this.line]);
    this.tapTxt = txt(this, W / 2, 1243, t('tap'), 28, '#ffe9a8').setDepth(61).setAlpha(0);
    makeButton(this, W - 115, 64, 200, 76, t('skip'), { icon: 'ui_skip', iconSize: 28, iconGap: 8, size: 28, color: 0x8a4be0, shade: 0x5a2ca0, textColor: '#ffffff' }, () => this.finish()).setDepth(70);
  }

  say(str) {
    this.line.setText(str);
    this.panel.setAlpha(0).setScale(0.92);
    this.tweens.add({ targets: this.panel, alpha: 1, scale: 1, duration: 260, ease: 'Back.Out' });
  }
  pose(k) { this.cat.setTexture('cat_' + k); }
  unlock(ms) {
    this.time.delayedCall(ms, () => {
      if (this.done) return;
      this.lock = false;
      this.tweens.add({ targets: this.tapTxt, alpha: { from: 0.25, to: 1 }, duration: 600, yoyo: true, repeat: -1 });
    });
  }

  next() {
    if (this.done || this.lock) return;
    this.beat++;
    if (this.beat >= STORY_LINES.length) return this.finish();
    this.lock = true;
    this.tweens.killTweensOf(this.tapTxt); this.tapTxt.setAlpha(0);
    this.say(t(STORY_LINES[this.beat]));
    this['b' + this.beat]();
  }

  // ---- اللحظات الخمس ----
  b0() { this.unlock(1400); }                                    // الزقاق ليلاً وعينان في الصندوق

  b1() {                                                         // مشمش يقفز من الصندوق ويعرّف بنفسه
    const c = this.cat; this.eyes.setVisible(false);
    c.setAlpha(1).setPosition(140, 880); this.pose('jump'); Sound.play('mouse');
    this.tweens.add({ targets: c, x: 290, duration: 750 });
    this.tweens.add({ targets: c, y: 560, duration: 330, ease: 'Sine.Out', onComplete: () => this.tweens.add({
      targets: c, y: 940, duration: 420, ease: 'Bounce.Out', onComplete: () => {
        buzz(12); this.pose('cheer');
        this.time.delayedCall(800, () => this.pose('happy'));
      } }) });
    const nm = txt(this, 290, 600, t('cat0') + '!', 96, '#ff3b30', { strokeColor: '#fff7e6', strokeW: 12 }).setDepth(50).setScale(0);
    this.time.delayedCall(900, () => this.tweens.add({ targets: nm, scale: 1, duration: 350, ease: 'Back.Out' }));
    this.time.delayedCall(2800, () => this.tweens.add({ targets: nm, alpha: 0, y: 540, duration: 500, onComplete: () => nm.destroy() }));
    this.unlock(2800);
  }

  b2() {                                                         // جبنة ذهبية تلمع
    const c = this.cheese, g = this.glow;
    this.pose('love'); Sound.play('cheese');
    c.setAlpha(1).setPosition(610, 700).setScale(0);
    this.tweens.add({ targets: c, y: 905, scale: 0.75, duration: 700, ease: 'Bounce.Out',
      onComplete: () => this.tweens.add({ targets: c, y: 893, duration: 900, yoyo: true, repeat: -1, ease: 'Sine.InOut' }) });
    this.tweens.add({ targets: g, alpha: 0.8, duration: 700 });
    this.tweens.add({ targets: g, scale: { from: 4.2, to: 5.6 }, duration: 1000, yoyo: true, repeat: -1 });
    this.time.addEvent({ delay: 380, loop: true, callback: () => this.sparks.explode(5, 610, 840) });
    this.unlock(2600);
  }

  b3() {                                                         // قنبلة تسقط: الخطر
    const b = this.bomb;
    b.setAlpha(1).setPosition(470, -140).setAngle(-25);
    this.tweens.add({ targets: b, y: 905, angle: 8, duration: 650, ease: 'Quad.In', onComplete: () => {
      this.cameras.main.shake(140, 0.009); buzz(30); this.pose('scared');
      this.tweens.add({ targets: b, scaleY: 0.62, duration: 90, yoyo: true });
      let n = 0;
      this.time.addEvent({ delay: 260, repeat: 3, callback: () => { n++; b.setTint(n % 2 ? 0xff4d4d : 0xffffff); Sound.play('click'); } });
      this.time.delayedCall(1250, () => this.boom());
    } });
    this.unlock(3600);
  }
  boom() {
    this.bomb.setAlpha(0); Sound.play('bomb'); buzz(60);
    this.cameras.main.flash(220, 255, 170, 60); this.cameras.main.shake(260, 0.018);
    const r = this.add.circle(470, 830, 24, 0xffb02e, 0.95).setDepth(30);
    this.tweens.add({ targets: r, scale: 9, alpha: 0, duration: 450, onComplete: () => r.destroy() });
    this.boomFx.explode(16, 470, 830);
    this.pose('dizzy'); this.time.delayedCall(900, () => this.pose('idle'));
  }

  b4() {                                                         // بوابة العوالم
    Sound.play('buy');
    this.tweens.add({ targets: this.portal, scale: 1, alpha: 1, duration: 700, ease: 'Back.Out' });
    this.time.delayedCall(1000, () => {
      Sound.play('win'); this.pose('jump');
      this.tweens.add({ targets: this.cat, x: 360, y: 520, scale: 0.08, angle: 340, duration: 750, ease: 'Quad.In' });
      this.time.delayedCall(250, () => this.tweens.add({ targets: [this.cheese, this.glow], x: 360, y: 520, scale: 0.05, alpha: 0, duration: 650, ease: 'Quad.In' }));
    });
    this.time.delayedCall(2900, () => this.finish());
  }

  finish() {
    if (this.done) return;
    this.done = true;
    save.storySeen = true; persist();
    this.cameras.main.flash(250, 255, 255, 255);
    go(this, 'Menu');
  }
}

;
/* ===== js/shop.js ===== */
// ===== متجر القطط والعروض الترويجية: عروض محدودة الوقت، مجموعات مخفضة السعر، وميزات القطط =====
// القطط كلها بنفس السرعة (280) حتى لا يتغير توازن اللعب؛ القطط الأغلى تمنح هالة بصرية ومكافأة عملات إضافية.

const SHOP_POSES = ['happy', 'love', 'cheer', 'jump'];

const ShopOffers = {
  dayKey() {
    if (typeof todayStr === 'function') return todayStr();
    return new Date().toISOString().slice(0, 10);
  },

  // الوقت المتبقي حتى منتصف الليل (نهاية العرض اليومي المحدود)
  remainingMs() {
    const now = new Date();
    const end = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 0, 0, 0, 0);
    return Math.max(0, end.getTime() - now.getTime());
  },

  countdownText() {
    const sec = Math.floor(this.remainingMs() / 1000);
    const h = String(Math.floor(sec / 3600)).padStart(2, '0');
    const m = String(Math.floor((sec % 3600) / 60)).padStart(2, '0');
    const s = String(sec % 60).padStart(2, '0');
    return `${h}:${m}:${s}`;
  },

  // اختيار قطة واحدة يومياً بخصم 30% لفترة محدودة (ثابت طوال اليوم)
  dailyDealIndex() {
    const unowned = CATS.map((_, i) => i).filter((i) => i > 0 && !save.owned.includes(i));
    if (!unowned.length) return -1;
    const r = mulberry32(seedFromString('shop-deal-' + this.dayKey()))();
    const start = 1 + Math.floor(r * (CATS.length - 1));
    for (let k = 0; k < CATS.length - 1; k++) {
      const idx = 1 + ((start - 1 + k) % (CATS.length - 1));
      if (!save.owned.includes(idx)) return idx;
    }
    return unowned[0];
  },

  priceOf(i) {
    if (i <= 0 || save.owned.includes(i)) return 0;
    const base = CATS[i].price;
    if (i === this.dailyDealIndex()) return Math.round((base * 0.70) / 5) * 5;
    return base;
  },

  // قائمة المجموعات المخفضة النشطة حسب القطط غير المملوكة
  bundles() {
    const list = [];
    const locked = (ids) => ids.filter((i) => !save.owned.includes(i));

    // 1) مجموعة الانطلاق (سموكي + شادو) بخصم 25%
    const duo = locked([1, 2]);
    if (duo.length === 2) {
      const raw = duo.reduce((s, i) => s + CATS[i].price, 0);
      const price = Math.round((raw * 0.75) / 5) * 5;
      list.push({ id: 'starter', titleKey: 'bundleStarter', ids: duo, raw, price, pct: 25, color: 0x4db8ff, shade: 0x1d5f94 });
    }

    // 2) مجموعة الملوك (سنو + الملك) بخصم 30%
    const elite = locked([3, 4]);
    if (elite.length === 2) {
      const raw = elite.reduce((s, i) => s + CATS[i].price, 0);
      const price = Math.round((raw * 0.70) / 5) * 5;
      list.push({ id: 'elite', titleKey: 'bundleElite', ids: elite, raw, price, pct: 30, color: 0xffc83d, shade: 0x996508 });
    }

    // 3) حزمة كل القطط المتبقية بخصم 35% (عند بقاء 3 قطط فأكثر، أو أي قطتين لا تطابقهما مجموعة أخرى)
    const allUnowned = CATS.map((_, i) => i).filter((i) => i > 0 && !save.owned.includes(i));
    if (allUnowned.length >= 3 || (allUnowned.length === 2 && !list.some((b) => b.ids.length === 2 && b.ids.every((x) => allUnowned.includes(x))))) {
      const raw = allUnowned.reduce((s, i) => s + CATS[i].price, 0);
      const price = Math.round((raw * 0.65) / 5) * 5;
      list.push({ id: 'all', titleKey: 'bundleAll', ids: allUnowned, raw, price, pct: 35, color: 0xa66cff, shade: 0x4b3c99 });
    }

    return list;
  },

  bundleInfo() {
    const all = this.bundles();
    return all.length ? all[0] : null;
  },
};

// ===== نظام المكافآت اليومية وتتبع تسجيل الدخول ومضاعف السلسلة داخل المتجر =====
// يزيد مضاعف السلسلة قيمة المكافأة اليومية مع كل يوم لعب متواصل لتشجيع العودة اليومية
const ShopDaily = {
  _today() {
    if (typeof todayStr === 'function') return todayStr();
    const d = new Date();
    return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
  },
  _dayDiff(a, b) {
    return Math.round((new Date(b + 'T00:00:00') - new Date(a + 'T00:00:00')) / 86400000);
  },
  ensure() {
    if (!save.daily || typeof save.daily !== 'object') save.daily = { last: '', streak: 0 };
    if (typeof Daily !== 'undefined' && Daily.ensure) Daily.ensure();
  },
  // حساب مضاعف السلسلة حسب عدد الأيام المتتالية (من x1 حتى x2.5)
  multiplierFor(streak) {
    const s = Math.max(0, Number(streak) || 0);
    if (s >= 13) return 2.5;
    if (s >= 9) return 2.25;
    if (s >= 6) return 2.0;
    return Math.round((1 + s * 0.15) * 100) / 100;
  },
  formatMult(m) {
    return 'x' + Number(m || 1).toFixed(2).replace(/\.00$/, '').replace(/(\.\d)0$/, '$1');
  },
  rewardForDay(dayIdx, streak) {
    const base = DAILY_REWARDS[dayIdx % DAILY_REWARDS.length];
    const mult = this.multiplierFor(streak);
    const total = Math.round(base * mult);
    return { base, mult, total, bonus: Math.max(0, total - base) };
  },
  state() {
    this.ensure();
    const today = this._today(), last = save.daily.last, st = save.daily.streak || 0;
    if (last && last >= today) {
      const claimedIdx = (st - 1 + 700) % DAILY_REWARDS.length;
      const activeStreak = Math.max(0, st - 1);
      const calc = this.rewardForDay(claimedIdx, activeStreak);
      return {
        canClaim: false, streak: st, claimedIdx, idx: claimedIdx,
        baseReward: calc.base, multiplier: calc.mult, nextMultiplier: this.multiplierFor(st),
        reward: calc.total, bonus: calc.bonus,
      };
    }
    const streak = last && this._dayDiff(last, today) === 1 ? st : 0;
    const idx = streak % DAILY_REWARDS.length;
    const calc = this.rewardForDay(idx, streak);
    return {
      canClaim: true, streak, idx,
      baseReward: calc.base, multiplier: calc.mult, nextMultiplier: this.multiplierFor(streak + 1),
      reward: calc.total, bonus: calc.bonus,
    };
  },
  claim() {
    this.ensure();
    const s = this.state();
    if (!s.canClaim) return 0;
    save.daily = { last: this._today(), streak: s.streak + 1 };
    save.coins += s.reward;
    persist();
    return s.reward;
  },
};

// ===== متجر مظاهر مشمش (تبديلات بصرية تُفتح بعملة الجبن المجمعة دون تغيير سرعة أو توازن اللعب) =====
const SHOP_SKINS = [
  { id: 'skin_classic', price: 0,   tint: null,     aura: null,     particle: 'glow', icon: '🐱' },
  { id: 'skin_golden',  price: 60,  tint: 0xffe885, aura: 0xffc83d, particle: 'star', icon: '🧀' },
  { id: 'skin_emerald', price: 110, tint: 0xa6ffcb, aura: 0x38d9a9, particle: 'glow', icon: '🌿' },
  { id: 'skin_berry',   price: 160, tint: 0xffb3e6, aura: 0xff66c4, particle: 'star', icon: '🍓' },
  { id: 'skin_frost',   price: 220, tint: 0xb8f2ff, aura: 0x4cc9f0, particle: 'star', icon: '❄️' },
  { id: 'skin_royal',   price: 320, tint: 0xffc6a8, aura: 0xff5a1f, particle: 'star', icon: '👑' },
];

const ShopSkins = {
  ensure() {
    if (!save.shopSkins || typeof save.shopSkins !== 'object') save.shopSkins = { owned: [], equipped: '' };
    if (!Array.isArray(save.shopSkins.owned)) save.shopSkins.owned = [];
    if (typeof save.shopSkins.equipped !== 'string') save.shopSkins.equipped = '';
  },
  catalog() { return SHOP_SKINS; },
  def(id) { return SHOP_SKINS.find((s) => s.id === id); },
  isOwned(id) {
    this.ensure();
    return id === 'skin_classic' || save.shopSkins.owned.includes(id);
  },
  isEquipped(id) {
    this.ensure();
    if (id === 'skin_classic') {
      const achSkin = save.achievements && save.achievements.skin;
      return !save.shopSkins.equipped && !achSkin;
    }
    return save.shopSkins.equipped === id;
  },
  buy(id) {
    this.ensure();
    const s = this.def(id);
    if (!s || this.isOwned(id) || save.coins < s.price) return false;
    save.coins -= s.price;
    save.shopSkins.owned.push(id);
    save.shopSkins.equipped = id;
    if (save.achievements) save.achievements.skin = '';
    persist();
    return true;
  },
  equip(id) {
    this.ensure();
    if (!this.isOwned(id)) return false;
    save.shopSkins.equipped = id === 'skin_classic' ? '' : (save.shopSkins.equipped === id ? '' : id);
    if (save.shopSkins.equipped && save.achievements) save.achievements.skin = '';
    persist();
    return true;
  },
  activeSkinDef() {
    this.ensure();
    const id = save.shopSkins.equipped;
    if (!id || !this.isOwned(id)) return null;
    return this.def(id) || null;
  },
};

class ShopScene extends Phaser.Scene {
  constructor() { super('Shop'); }
  init() { this.idx = Math.min(Math.max(save.cat, 0), CATS.length - 1); this.poseIdx = 0; this.modal = null; }

  create() {
    enter(this);
    ShopDaily.ensure();
    ShopSkins.ensure();
    this.add.image(0, 0, 'bg_night').setOrigin(0);
    this.add.rectangle(0, 0, W, H, 0x120d33, 0.58).setOrigin(0);
    addAmbient(this, 'stars');

    txt(this, W / 2, 132, t('shop'), 72, '#ffc83d', { strokeColor: '#7a3d00', strokeW: 14 });

    // زر العروض الترويجية (أعلى اليسار) مع شارة العدد
    this.offersBtn = makeButton(this, 96, 62, 144, 68, t('offersBtn'),
      { icon: 'ui_fire', iconSize: 30, iconGap: 6, size: 23, color: 0xe5484d, shade: 0x8f1f24, textColor: '#ffffff' }, () => this.openOffersModal());
    this.offersBadge = this.add.circle(158, 32, 15, 0xffc83d).setStrokeStyle(3, 0x1b1838);
    this.offersCountTxt = txt(this, 158, 32, '0', 19, '#3b2a00', { stroke: false });

    // زر المكافأة اليومية وتتبع سلسلة الدخول
    const hasGift = this.textures.exists('ui_gift');
    this.dailyBtn = makeButton(this, 240, 62, 118, 68, '',
      { size: 32, color: 0xff8a3d, shade: 0xa8480e, textColor: '#ffffff' }, () => this.openDailyModal());
    if (hasGift) {
      const gImg = this.add.image(-26, -2, 'ui_gift');
      gImg.setScale(42 / Math.max(gImg.width || 128, gImg.height || 128));
      this.dailyBtn.add(gImg);
    }
    this.dailyBtnTxt = txt(this, hasGift ? 18 : 0, -2, '', 20, '#ffffff', { stroke: false });
    this.dailyBtn.add(this.dailyBtnTxt);
    this.dailyDot = this.add.circle(289, 32, 13, 0xe5484d).setStrokeStyle(3, 0xffffff);
    this.tweens.add({ targets: this.dailyDot, scale: 1.25, duration: 500, yoyo: true, repeat: -1 });

    // زر متجر مظاهر مشمش (عملة الجبن)
    this.skinsBtn = makeButton(this, 386, 62, 136, 68, t('skinsBtn'),
      { icon: 'ui_palette', iconSize: 30, iconGap: 6, size: 22, color: 0x8a7bd8, shade: 0x4b3c99, textColor: '#ffffff' }, () => this.openSkinsModal());

    // شارة الرصيد بأيقونة العملة v9
    this.add.graphics().fillStyle(0x000000, 0.42).fillRoundedRect(W - 230, 28, 200, 68, 34);
    if (this.textures.exists('ui_coin')) {
      this.add.image(W - 198, 62, 'ui_coin').setScale(0.36);
      this.coinTxt = txt(this, W - 118, 62, '', 36, '#ffc83d', { stroke: false });
    } else {
      this.coinTxt = txt(this, W - 130, 62, '', 36, '#ffc83d', { stroke: false });
    }

    // شريط العرض الترويجي المحدود / المجموعة المخفضة أعلى البطاقة
    this.promoWrap = this.add.container(0, 0);

    // البطاقة الرئيسية
    this.cardBg = this.add.graphics();
    this.cardBg.fillStyle(0x1d1850, 0.88).fillRoundedRect(W / 2 - 270, 248, 540, 710, 40);
    this.cardBorder = this.add.graphics();

    // هالة خلفية للقط (تقوى مع القطط الغالية)
    this.auraGlow = this.add.image(W / 2, 600, 'glow').setScale(4.2).setBlendMode('ADD').setAlpha(0);
    this.tweens.add({ targets: this.auraGlow, scale: 4.9, duration: 1200, yoyo: true, repeat: -1, ease: 'Sine.InOut' });

    // شارة العرض المحدود على البطاقة مع العداد
    this.dealTag = this.add.container(215, 282);
    const dg = this.add.graphics();
    dg.fillStyle(0xe5484d, 1).fillRoundedRect(-126, -24, 252, 48, 20);
    dg.lineStyle(3, 0xfff3b0, 1).strokeRoundedRect(-126, -24, 252, 48, 20);
    this.dealTag.add(dg);
    if (this.textures.exists('ui_fire')) this.dealTag.add(this.add.image(-96, 0, 'ui_fire').setScale(28 / 96));
    this.dealTagTxt = txt(this, 12, 0, '', 21, '#ffffff', { stroke: false });
    this.dealTag.add(this.dealTagTxt);

    // أيقونة القفل v9
    if (this.textures.exists('ui_lock')) {
      this.lockObj = this.add.image(W / 2 + 212, 304, 'ui_lock').setScale(50 / 128);
    } else {
      this.lockObj = txt(this, W / 2 + 212, 304, '×', 40, '#ffffff', { stroke: false });
    }

    this.nameTxt = txt(this, W / 2, 322, '', 56, '#fff7e6', { strokeColor: '#4a2400' });
    this.tierTxt = txt(this, W / 2, 378, '', 26, '#ffc83d', { strokeColor: '#1b1838', strokeW: 6 });
    this.perkTxt = txt(this, W / 2, 418, '', 24, '#e8e4ff', { stroke: false, wrap: 480 });

    // معاينة القط التفاعلية
    this.prev = this.add.image(W / 2, 742, 'cat_idle').setOrigin(0.5, 1).setScale(292 / 401).setInteractive({ useHandCursor: true });
    this.basePrevScale = 292 / 401;
    this.tweens.add({ targets: this.prev, scaleY: this.basePrevScale * 1.03, duration: 800, yoyo: true, repeat: -1, ease: 'Sine.InOut' });
    this.prev.on('pointerup', () => this.interactCat());

    // شريط التقدم نحو السعر
    this.progWrap = this.add.container(0, 0);

    // أسهم + سحب أفقي للتنقل بين القطط
    makeButton(this, 48, 600, 76, 120, '', { icon: 'ui_arrow_left', iconSize: 44, color: 0x8a7bd8, shade: 0x4b3c99 }, () => this.show(this.idx - 1));
    makeButton(this, W - 48, 600, 76, 120, '', { icon: 'ui_arrow_right', iconSize: 44, color: 0x8a7bd8, shade: 0x4b3c99 }, () => this.show(this.idx + 1));
    this.input.on('pointerdown', (p) => { if (!this.modal) this.sx = p.x; });
    this.input.on('pointerup', (p) => {
      if (!this.modal && this.sx !== undefined && p.y > 248 && p.y < 958 && Math.abs(p.x - this.sx) > 90) this.show(this.idx + (p.x < this.sx ? 1 : -1));
      this.sx = undefined;
    });

    // شريط مصغرات القطط
    const hasLock = this.textures.exists('ui_lock');
    const hasCheck = this.textures.exists('ui_check');
    const hasFire = this.textures.exists('ui_fire');
    this.thumbs = CATS.map((c, i) => {
      const x = W / 2 + (i - (CATS.length - 1) / 2) * 124, y = 1072;
      const ring = this.add.circle(x, y, 54, 0xffc83d, 0).setStrokeStyle(6, c.tierColor || 0xffc83d);
      const img = this.add.image(x, y + 38, c.key + '_idle').setOrigin(0.5, 1).setScale(94 / 401).setInteractive({ useHandCursor: true });
      img.on('pointerup', () => { if (!this.modal) this.show(i); });
      const checkIcon = hasCheck
        ? this.add.image(x + 34, y - 34, 'ui_check').setScale(30 / 96)
        : txt(this, x + 34, y - 34, '✓', 28, '#58c46b', { strokeColor: '#1b1838', strokeW: 6 });
      const lockIcon = hasLock
        ? this.add.image(x + 32, y - 32, 'ui_lock').setScale(34 / 128)
        : txt(this, x + 32, y - 32, '×', 26, '#ffffff', { stroke: false });
      const dealDot = hasFire
        ? this.add.image(x - 34, y - 36, 'ui_fire').setScale(28 / 96).setVisible(false)
        : txt(this, x - 34, y - 36, '-30%', 16, '#ffc83d', { stroke: false }).setVisible(false);
      return { ring, checkIcon, lockIcon, dealDot };
    });

    const hasAdCoins = typeof CG !== 'undefined' && CG.canShowRewarded && CG.canShowRewarded();
    makeButton(this, hasAdCoins ? 210 : W / 2, 1202, hasAdCoins ? 250 : 300, 88, t('back'),
      { icon: 'ui_arrow_left', iconSize: 34, iconSide: 'left', size: hasAdCoins ? 34 : 40, color: 0x8a7bd8, shade: 0x4b3c99, textColor: '#ffffff' }, () => go(this, 'Menu'));
    if (hasAdCoins) {
      makeButton(this, 505, 1202, 270, 88, t('freeCoinsAd'),
        { icon: 'ui_coin', iconSize: 34, iconSide: 'left', size: 28, color: 0x58c46b, shade: 0x2d7a3d, textColor: '#ffffff' },
        () => {
          if (this.modal) return;
          CG.requestRewarded({
            onReward: () => {
              save.coins += 100;
              persist();
              Sound.play('buy');
              buzz(25);
              this.refresh();
            },
          });
        });
    }

    // تحديث العداد التنازلي للعروض محدودة الوقت كل ثانية
    this.timerNodes = [];
    this.time.addEvent({ delay: 1000, loop: true, callback: () => this.updateCountdowns() });
    this.refresh();

    // إظهار نافذة المكافأة اليومية تلقائياً مرة واحدة عند وجود مكافأة جاهزة للاستلام
    if (ShopDaily.state().canClaim && !window.__shopDailyPrompted) {
      window.__shopDailyPrompted = true;
      this.time.delayedCall(350, () => {
        if (this.scene.isActive('Shop') && !this.modal) this.openDailyModal();
      });
    }
  }

  updateCountdowns() {
    const cd = ShopOffers.countdownText();
    if (this.dealTag.visible) this.dealTagTxt.setText('-30%   •   ' + cd);
    this.timerNodes.forEach((n) => { if (n && n.scene) n.setText(n.getData('prefix') + cd); });
  }

  interactCat() {
    if (this.modal) return;
    const c = CATS[this.idx];
    const pose = SHOP_POSES[this.poseIdx % SHOP_POSES.length];
    this.poseIdx++;
    Sound.play('click'); buzz(10);
    this.prev.setTexture(c.key + '_' + pose);
    this.tweens.add({ targets: this.prev, y: 722, duration: 130, yoyo: true, ease: 'Quad.Out' });
    this.time.delayedCall(900, () => {
      if (this.scene.isActive('Shop') && CATS[this.idx] === c) this.prev.setTexture(c.key + '_idle');
    });
  }

  show(i) {
    if (this.modal) return;
    const prevIdx = this.idx;
    this.idx = (i + CATS.length) % CATS.length;
    Sound.play('click');
    this.tweens.add({ targets: this.prev, x: { from: W / 2 + (i < prevIdx ? -60 : 60), to: W / 2 }, duration: 160 });
    this.refresh();
  }

  perkSummary(i, c) {
    if (i === 0) return t('perk0');
    if (i === 1) return '✨ ' + t('perk1');
    const pct = Math.round((c.coinBonus || 0) * 100);
    return '✨ ' + t('perk_aura') + '   •   ' + t('perk_coins').replace('{n}', pct);
  }

  refresh() {
    const c = CATS[this.idx], owned = save.owned.includes(this.idx), sel = save.cat === this.idx;
    const dealIdx = ShopOffers.dailyDealIndex(), isDeal = !owned && this.idx === dealIdx;
    const effPrice = ShopOffers.priceOf(this.idx);
    const bundles = ShopOffers.bundles();
    const offerCount = bundles.length + (dealIdx > 0 ? 1 : 0);

    this.timerNodes = [];
    this.coinTxt.setText(String(save.coins));
    this.offersBtn.setVisible(offerCount > 0);
    this.offersBadge.setVisible(offerCount > 0);
    this.offersCountTxt.setVisible(offerCount > 0).setText(String(offerCount));

    const ds = ShopDaily.state();
    this.dailyDot.setVisible(ds.canClaim);
    const dayNum = ds.canClaim ? (ds.idx + 1) : ((ds.claimedIdx || 0) + 1);
    const multTag = ds.multiplier > 1 ? (' ' + ShopDaily.formatMult(ds.multiplier)) : '';
    this.dailyBtnTxt.setText('D' + dayNum + multTag);

    const eqSkin = ShopSkins.activeSkinDef() || (typeof Achievements !== 'undefined' && Achievements.activeSkinDef());
    this.prev.setTexture(c.key + '_idle');
    if (eqSkin && eqSkin.tint) this.prev.setTint(eqSkin.tint);
    else this.prev.clearTint();
    this.nameTxt.setText(t('cat' + this.idx));
    this.tierTxt.setText(t('tier' + this.idx)).setColor('#' + (c.tierColor || 0xffc83d).toString(16).padStart(6, '0'));
    this.perkTxt.setText(this.perkSummary(this.idx, c));

    this.cardBorder.clear().lineStyle(5, isDeal ? 0xe5484d : (c.tierColor || 0xffc83d), 1).strokeRoundedRect(W / 2 - 270, 248, 540, 710, 40);
    this.dealTag.setVisible(isDeal);
    if (isDeal) this.dealTagTxt.setText('-30%   •   ' + ShopOffers.countdownText());
    this.lockObj.setVisible(!owned);

    const auraCol = (eqSkin && eqSkin.aura) || c.aura;
    if (auraCol) this.auraGlow.setTint(auraCol).setAlpha(0.24 + this.idx * 0.08);
    else this.auraGlow.setAlpha(0);

    // شريط العرض البارز أعلى البطاقة (يعرض أفضل مجموعة متاحة أو العرض المحدود)
    this.promoWrap.removeAll(true);
    const topBundle = bundles[0];
    if (topBundle) {
      const canB = save.coins >= topBundle.price;
      const bw = 610, bh = 58, bx = W / 2, by = 202;
      const bg = this.add.graphics();
      bg.fillStyle(canB ? 0x2d7a3d : 0x2a1f5c, 0.95).fillRoundedRect(bx - bw / 2, by - bh / 2, bw, bh, 22);
      bg.lineStyle(3, canB ? 0x7be8ff : 0xffc83d, 1).strokeRoundedRect(bx - bw / 2, by - bh / 2, bw, bh, 22);
      if (this.textures.exists('ui_gift')) this.promoWrap.add(this.add.image(bx - 272, by, 'ui_gift').setScale(34 / 128));
      const label = txt(this, bx - 52, by, t(topBundle.titleKey) + ' (-' + topBundle.pct + '%)', 23, '#ffffff', { stroke: false });
      const cdTxt = txt(this, bx + 115, by, ShopOffers.countdownText(), 20, '#ffe9a8', { stroke: false });
      cdTxt.setData('prefix', '');
      this.timerNodes.push(cdTxt);
      const priceTxt = txt(this, bx + 245, by, String(topBundle.price), 25, '#ffc83d', { stroke: false });
      const hit = this.add.container(bx, by).setSize(bw, bh).setInteractive({ useHandCursor: true });
      this.promoWrap.add([bg, label, cdTxt, priceTxt, hit]);
      if (this.textures.exists('ui_coin')) this.promoWrap.add(this.add.image(bx + 195, by, 'ui_coin').setScale(0.25));
      hit.on('pointerup', () => this.openOffersModal());
    } else if (dealIdx > 0) {
      const bw = 540, bh = 54, bx = W / 2, by = 202;
      const bg = this.add.graphics();
      bg.fillStyle(0x4a1838, 0.92).fillRoundedRect(bx - bw / 2, by - bh / 2, bw, bh, 22);
      bg.lineStyle(3, 0xff8a3d, 1).strokeRoundedRect(bx - bw / 2, by - bh / 2, bw, bh, 22);
      if (this.textures.exists('ui_fire')) this.promoWrap.add(this.add.image(bx - 236, by, 'ui_fire').setScale(30 / 96));
      const label = txt(this, bx - 40, by, t('dailyDeal') + ': ' + t('cat' + dealIdx) + ' (-30%)', 23, '#fff7e6', { stroke: false });
      const cdTxt = txt(this, bx + 185, by, ShopOffers.countdownText(), 21, '#ffc83d', { stroke: false });
      cdTxt.setData('prefix', '');
      this.timerNodes.push(cdTxt);
      const hit = this.add.container(bx, by).setSize(bw, bh).setInteractive({ useHandCursor: true });
      this.promoWrap.add([bg, label, cdTxt, hit]);
      hit.on('pointerup', () => this.show(dealIdx));
    }

    // شريط التقدم نحو القطة المقفلة + السعر المشطوب عند الخصم
    this.progWrap.removeAll(true);
    if (!owned && effPrice > 0) {
      const barW = 380, barH = 24, bx = W / 2 - barW / 2, by = 784;
      const frac = Math.min(1, save.coins / effPrice);
      const pg = this.add.graphics();
      pg.fillStyle(0x0d0a24, 0.7).fillRoundedRect(bx, by - barH / 2, barW, barH, 12);
      if (frac > 0) pg.fillStyle(save.coins >= effPrice ? 0x58c46b : 0xffc83d, 1).fillRoundedRect(bx, by - barH / 2, Math.max(24, barW * frac), barH, 12);
      pg.lineStyle(2, 0xffffff, 0.25).strokeRoundedRect(bx, by - barH / 2, barW, barH, 12);
      this.progWrap.add([pg, txt(this, W / 2, by, save.coins + ' / ' + effPrice, 18, '#ffffff', { strokeColor: '#0d0a24', strokeW: 4 })]);
      if (isDeal) {
        const oldTxt = txt(this, W / 2 + 215, by, String(c.price), 22, '#ffb4b4', { stroke: false });
        pg.lineStyle(2.5, 0xff6b6b, 1).lineBetween(W / 2 + 190, by + 6, W / 2 + 240, by - 6);
        this.progWrap.add(oldTxt);
      }
    }

    // زر الإجراء الرئيسي
    if (this.act) this.act.destroy();
    let label = '', o = { size: 40 }, fn;
    if (sel) {
      label = t('selected');
      Object.assign(o, { icon: 'ui_check', iconSize: 36, color: 0x58c46b, shade: 0x2d7a3d, textColor: '#ffffff' });
      fn = () => {};
    } else if (owned) {
      label = t('select');
      Object.assign(o, { icon: 'ui_classic', iconSize: 36 });
      fn = () => this.choose(this.idx);
    } else if (save.coins >= effPrice) {
      label = String(effPrice);
      Object.assign(o, { icon: 'ui_coin', iconSize: 44, iconSide: 'left' });
      if (isDeal) Object.assign(o, { color: 0xff8a3d, shade: 0xa8480e, textColor: '#ffffff' });
      fn = () => this.buy(this.idx, effPrice);
    } else {
      const miss = effPrice - save.coins;
      label = t('need') + ' ' + miss;
      Object.assign(o, { icon: 'ui_coin', iconSize: 38, iconSide: 'left', size: 32, color: 0x6d6a80, shade: 0x3f3d50, textColor: '#dddddd' });
      fn = () => this.deny();
    }
    this.act = makeButton(this, W / 2, 886, 460, 102, label, o, fn);

    this.thumbs.forEach((th, i) => {
      th.ring.setStrokeStyle(i === this.idx ? 6 : 0, CATS[i].tierColor || 0xffc83d);
      const isOwned = save.owned.includes(i);
      th.checkIcon.setVisible(save.cat === i);
      th.lockIcon.setVisible(!isOwned);
      th.dealDot.setVisible(!isOwned && i === dealIdx);
    });
  }

  // نافذة العروض الترويجية والمجموعات المخفضة
  openOffersModal() {
    if (this.modal) return;
    Sound.play('click');
    const M = (this.modal = this.add.container(0, 0).setDepth(80));
    const dim = this.add.rectangle(0, 0, W, H, 0x08061a, 0.84).setOrigin(0).setInteractive();
    M.add(dim);

    const panel = this.add.graphics();
    panel.fillStyle(0x1d1850, 0.98).fillRoundedRect(34, 130, W - 68, 1020, 36);
    panel.lineStyle(5, 0xffc83d, 1).strokeRoundedRect(34, 130, W - 68, 1020, 36);
    M.add(panel);

    if (this.textures.exists('ui_fire')) M.add(this.add.image(W / 2 - 205, 188, 'ui_fire').setScale(40 / 96));
    M.add(txt(this, W / 2 + 18, 188, t('offersTitle'), 40, '#ffc83d', { strokeColor: '#4a2400' }));
    const cdBanner = txt(this, W / 2, 238, t('limitedTime') + '  •  ' + ShopOffers.countdownText(), 24, '#ffe9a8', { stroke: false });
    cdBanner.setData('prefix', t('limitedTime') + '  •  ');
    this.timerNodes.push(cdBanner);
    M.add(cdBanner);

    let y = 335;
    const dealIdx = ShopOffers.dailyDealIndex();
    const bundles = ShopOffers.bundles();

    // بطاقة العرض الخاطف اليومي
    if (dealIdx > 0) {
      const dc = CATS[dealIdx], dPrice = ShopOffers.priceOf(dealIdx), saved = dc.price - dPrice, canBuy = save.coins >= dPrice;
      const g = this.add.graphics();
      g.fillStyle(0x3a1848, 0.95).fillRoundedRect(64, y - 64, W - 128, 146, 26);
      g.lineStyle(4, 0xe5484d, 1).strokeRoundedRect(64, y - 64, W - 128, 146, 26);
      M.add(g);
      M.add(this.add.image(132, y + 48, dc.key + '_happy').setOrigin(0.5, 1).setScale(110 / 401));
      if (this.textures.exists('ui_fire')) M.add(this.add.image(204, y - 24, 'ui_fire').setScale(26 / 96));
      M.add(txt(this, 336, y - 24, t('dailyDeal') + ': ' + t('cat' + dealIdx), 27, '#ffffff', { stroke: false }));
      M.add(txt(this, 320, y + 14, '-30%  •  ' + t('saveCoins').replace('{n}', saved) + '  (' + dc.price + ' → ' + dPrice + ')', 22, '#ffc83d', { stroke: false }));
      const btn = makeButton(this, 566, y + 8, 152, 72, String(dPrice),
        canBuy
          ? { icon: 'ui_coin', iconSize: 32, iconSide: 'left', size: 28, color: 0xff8a3d, shade: 0xa8480e, textColor: '#ffffff' }
          : { icon: 'ui_coin', iconSize: 30, iconSide: 'left', size: 26, color: 0x6d6a80, shade: 0x3f3d50, textColor: '#dddddd' },
        () => {
          if (canBuy) { this.buy(dealIdx, dPrice); this.closeOffersModal(); }
          else { Sound.play('lose'); buzz(20); this.tweens.add({ targets: btn, x: 576, duration: 45, yoyo: true, repeat: 3 }); }
        });
      M.add(btn);
      y += 172;
    }

    // بطاقات المجموعات المخفضة السعر
    bundles.forEach((b) => {
      const saved = b.raw - b.price, canBuy = save.coins >= b.price;
      const g = this.add.graphics();
      g.fillStyle(0x252062, 0.95).fillRoundedRect(64, y - 64, W - 128, 154, 26);
      g.lineStyle(4, b.color, 1).strokeRoundedRect(64, y - 64, W - 128, 154, 26);
      M.add(g);

      b.ids.slice(0, 4).forEach((cid, k) => {
        const cx = 104 + k * (b.ids.length > 2 ? 32 : 48);
        M.add(this.add.image(cx, y + 52, CATS[cid].key + '_idle').setOrigin(0.5, 1).setScale((b.ids.length > 2 ? 82 : 98) / 401));
      });
      M.add(txt(this, 345, y - 28, t(b.titleKey) + ' (-' + b.pct + '%)', 26, '#ffffff', { stroke: false }));
      M.add(txt(this, 345, y + 10, t('saveCoins').replace('{n}', saved) + '   (' + b.raw + ' → ' + b.price + ')', 21, '#9df5a8', { stroke: false }));
      M.add(txt(this, 345, y + 44, b.ids.map((id) => t('cat' + id)).join(' + '), 18, '#cfcaff', { stroke: false, wrap: 290 }));

      const btn = makeButton(this, 566, y + 10, 152, 74, String(b.price),
        canBuy
          ? { icon: 'ui_coin', iconSize: 32, iconSide: 'left', size: 28, color: 0x58c46b, shade: 0x2d7a3d, textColor: '#ffffff' }
          : { icon: 'ui_coin', iconSize: 30, iconSide: 'left', size: 26, color: 0x6d6a80, shade: 0x3f3d50, textColor: '#dddddd' },
        () => {
          if (canBuy) { this.buyBundle(b); this.closeOffersModal(); }
          else { Sound.play('lose'); buzz(20); this.tweens.add({ targets: btn, x: 576, duration: 45, yoyo: true, repeat: 3 }); }
        });
      M.add(btn);
      y += 178;
    });

    if (dealIdx < 0 && !bundles.length) {
      M.add(txt(this, W / 2, 580, t('allOwned'), 40, '#9df5a8', { wrap: 540 }));
    }

    M.add(makeButton(this, W / 2, 1075, 280, 82, t('close'),
      { icon: 'ui_close', iconSize: 28, size: 36, color: 0x8a7bd8, shade: 0x4b3c99, textColor: '#ffffff' }, () => this.closeModal()));
  }

  // نافذة المكافأة اليومية وتتبع سلسلة الدخول ومضاعف السلسلة (7 أيام+)
  openDailyModal() {
    if (this.modal) return;
    Sound.play('click');
    const M = (this.modal = this.add.container(0, 0).setDepth(85));
    const dim = this.add.rectangle(0, 0, W, H, 0x08061a, 0.84).setOrigin(0).setInteractive();
    M.add(dim);

    const panel = this.add.graphics();
    panel.fillStyle(0x1d1850, 0.98).fillRoundedRect(36, 185, W - 72, 900, 38);
    panel.lineStyle(5, 0xffc83d, 1).strokeRoundedRect(36, 185, W - 72, 900, 38);
    M.add(panel);

    const st = ShopDaily.state();
    const hasCoin = this.textures.exists('ui_coin');
    const hasGift = this.textures.exists('ui_gift');
    const multStr = ShopDaily.formatMult(st.multiplier);
    const nextMultStr = ShopDaily.formatMult(st.nextMultiplier);
    const cycleStartStreak = Math.max(0, (st.canClaim ? st.streak : Math.max(0, st.streak - 1)) - st.idx);

    M.add(txt(this, W / 2, 248, t('dailyReward'), 48, '#ffc83d', { strokeColor: '#4a2400' }));

    // شريط مضاعف سلسلة الدخول المتتالية
    const sb = this.add.graphics();
    sb.fillStyle(0x2c206b, 0.96).fillRoundedRect(70, 286, W - 140, 62, 20);
    sb.lineStyle(3, st.multiplier > 1 ? 0xff9a3d : 0x6a4fd8, 1).strokeRoundedRect(70, 286, W - 140, 62, 20);
    M.add(sb);
    if (this.textures.exists('ui_fire')) M.add(this.add.image(96, 317, 'ui_fire').setScale(28 / 96));
    const streakText = t('loginStreak') + ': ' + st.streak + '   •   ' + t('streakMult') + ': ' + multStr;
    M.add(txt(this, W / 2 - 58, 317, streakText, 24, '#ffe9a8', { stroke: false }));
    const nextTag = st.nextMultiplier <= st.multiplier ? t('maxMult') : (t('nextBonus') + ': ' + nextMultStr);
    M.add(txt(this, W / 2 + 215, 317, '▲ ' + nextTag, 21, '#7ff594', { stroke: false }));

    // شبكة الأيام السبعة مع القيمة المضاعفة لكل يوم
    const upTo = st.canClaim ? st.idx - 1 : st.claimedIdx;
    const dg = this.add.graphics();
    M.add(dg);
    const hasCheck = this.textures.exists('ui_check');

    DAILY_REWARDS.forEach((r, i) => {
      const topRow = i < 4;
      const cx = topRow ? (135 + i * 150) : (180 + (i - 4) * 180);
      const cy = topRow ? 462 : 642;
      const bw = i === 6 ? 150 : 126, bh = 148;
      const claimed = i <= upTo, today = st.canClaim && i === st.idx;
      const col = claimed ? 0x2d7a3d : today ? 0xffc83d : (i === 6 ? 0x3b2478 : 0x2b2560);
      const dayStreak = cycleStartStreak + i;
      const dayCalc = ShopDaily.rewardForDay(i, dayStreak);

      dg.fillStyle(col, 1).fillRoundedRect(cx - bw / 2, cy - bh / 2, bw, bh, 22);
      if (today) dg.lineStyle(5, 0xffffff, 1).strokeRoundedRect(cx - bw / 2, cy - bh / 2, bw, bh, 22);
      else if (i === 6) dg.lineStyle(3, 0xffc83d, 0.9).strokeRoundedRect(cx - bw / 2, cy - bh / 2, bw, bh, 22);

      const ink = today ? '#3b2a00' : '#ffffff';
      M.add(txt(this, cx, cy - 50, t('day') + ' ' + (i + 1), 21, ink, { stroke: false }));
      if (claimed && hasCheck) M.add(this.add.image(cx, cy - 8, 'ui_check').setScale(44 / 96));
      else if (claimed) M.add(txt(this, cx, cy - 6, '✓', 42, '#ffffff', { stroke: false }));
      else if (i === 6 && hasGift) M.add(this.add.image(cx, cy - 8, 'ui_gift').setScale(50 / 128));
      else if (hasCoin) M.add(this.add.image(cx, cy - 8, 'ui_coin').setScale(0.36));
      else M.add(txt(this, cx, cy - 6, String(dayCalc.total), 30, ink, { stroke: false }));
      M.add(txt(this, cx, cy + 36, '+' + dayCalc.total, 26, today ? '#3b2a00' : '#ffc83d', { stroke: false }));
      if (dayCalc.mult > 1) {
        M.add(txt(this, cx, cy + 59, ShopDaily.formatMult(dayCalc.mult), 16, today ? '#5a2c08' : '#7ff594', { stroke: false }));
      }
    });

    const btnLabel = st.canClaim
      ? (t('claim') + '  +' + st.reward + (st.multiplier > 1 ? (' (' + multStr + ')') : ''))
      : t('claimed');
    const claimBtn = makeButton(this, W / 2, 808, 460, 94, btnLabel,
      st.canClaim
        ? { icon: 'ui_gift', iconSize: 38, size: 34 }
        : { icon: 'ui_check', iconSize: 32, size: 34, color: 0x6d6a80, shade: 0x3f3d50, textColor: '#dddddd' },
      () => {
        const got = ShopDaily.claim();
        if (got) {
          Sound.play('buy'); buzz(30);
          const e = this.add.particles(W / 2, 808, 'star', { lifespan: 900, speed: { min: 150, max: 420 }, scale: { start: 0.32, end: 0 }, tint: 0xffe27a, blendMode: 'ADD', frequency: -1 }).setDepth(90);
          e.explode(28); this.time.delayedCall(1000, () => e.destroy());
          const pop = txt(this, W / 2, 760, '+' + got, 64, '#ffc83d').setDepth(91);
          this.tweens.add({ targets: pop, y: 620, alpha: 0, duration: 900, onComplete: () => pop.destroy() });
          this.closeModal();
          this.time.delayedCall(220, () => { if (this.scene.isActive('Shop')) this.openDailyModal(); });
        } else {
          Sound.play('lose');
        }
      });
    M.add(claimBtn);
    if (st.canClaim && st.bonus > 0) {
      M.add(txt(this, W / 2, 886, st.baseReward + ' + ' + st.bonus + ' (' + t('streakMult') + ' ' + multStr + ')', 23, '#9df5a8', { stroke: false }));
    } else if (!st.canClaim) {
      M.add(txt(this, W / 2, 886, t('comeBackTomorrow') + ' (' + nextMultStr + ')', 23, '#cfcaff', { stroke: false, wrap: 560 }));
    }
    M.add(makeButton(this, W / 2, 995, 280, 82, t('close'),
      { icon: 'ui_close', iconSize: 28, size: 36, color: 0x8a7bd8, shade: 0x4b3c99, textColor: '#ffffff' }, () => this.closeModal()));
  }

  // متجر مظاهر مشمش البصرية (إنفاق عملة الجبن لفتح التبديلات البصرية وتجهيزها)
  openSkinsModal() {
    if (this.modal) return;
    Sound.play('click');
    ShopSkins.ensure();
    const M = (this.modal = this.add.container(0, 0).setDepth(86));
    M.add(this.add.rectangle(0, 0, W, H, 0x08061a, 0.85).setOrigin(0).setInteractive());

    const panel = this.add.graphics();
    panel.fillStyle(0x1d1850, 0.98).fillRoundedRect(32, 115, W - 64, 1050, 38);
    panel.lineStyle(5, 0xffc83d, 1).strokeRoundedRect(32, 115, W - 64, 1050, 38);
    M.add(panel);

    if (this.textures.exists('ui_palette')) M.add(this.add.image(W / 2 - 205, 170, 'ui_palette').setScale(42 / 96));
    M.add(txt(this, W / 2 + 18, 170, t('skinStore'), 40, '#ffc83d', { strokeColor: '#4a2400' }));

    const dyn = this.add.container(0, 0);
    M.add(dyn);

    const hasCoin = this.textures.exists('ui_coin');
    let previewId = save.shopSkins.equipped || 'skin_classic';

    const renderSkins = () => {
      dyn.removeAll(true);
      const pv = ShopSkins.def(previewId) || SHOP_SKINS[0];

      // شريط الرصيد + معاينة حية لمظهر مشمش المختار
      const sb = this.add.graphics();
      sb.fillStyle(0x282166, 0.96).fillRoundedRect(60, 214, W - 120, 146, 26);
      sb.lineStyle(3, pv.aura || 0x6a4fd8, 1).strokeRoundedRect(60, 214, W - 120, 146, 26);
      dyn.add(sb);
      if (pv.aura) {
        dyn.add(this.add.image(155, 286, 'glow').setScale(2.3).setBlendMode('ADD').setTint(pv.aura).setAlpha(0.55));
      }
      const catImg = this.add.image(155, 344, 'cat_happy').setOrigin(0.5, 1).setScale(128 / 401);
      if (pv.tint) catImg.setTint(pv.tint);
      dyn.add(catImg);
      dyn.add(this.add.circle(265, 258, 12, pv.aura || 0xff9a3d).setStrokeStyle(3, 0xffffff));
      dyn.add(txt(this, 415, 258, t(pv.id), 30, '#fff7e6', { stroke: false }));
      if (hasCoin) dyn.add(this.add.image(315, 304, 'ui_coin').setScale(0.28));
      dyn.add(txt(this, 410, 304, save.coins + ' ' + t('coins'), 26, '#ffc83d', { stroke: false }));

      // شبكة المظاهر الـ 6 (عمودان × 3 صفوف)
      SHOP_SKINS.forEach((sk, idx) => {
        const col = idx % 2, row = Math.floor(idx / 2);
        const cx = 200 + col * 320, cy = 486 + row * 194;
        const owned = ShopSkins.isOwned(sk.id);
        const eq = ShopSkins.isEquipped(sk.id);
        const canBuy = !owned && save.coins >= sk.price;

        const cg = this.add.graphics();
        cg.fillStyle(eq ? 0x1e3b38 : 0x241d5c, 0.96).fillRoundedRect(cx - 144, cy - 84, 288, 174, 24);
        cg.lineStyle(eq ? 4 : 3, eq ? 0x58c46b : (sk.aura || 0x6a4fd8), 1).strokeRoundedRect(cx - 144, cy - 84, 288, 174, 24);
        dyn.add(cg);

        if (sk.aura) {
          dyn.add(this.add.image(cx - 72, cy - 18, 'glow').setScale(1.45).setBlendMode('ADD').setTint(sk.aura).setAlpha(0.5));
        }
        const mini = this.add.image(cx - 72, cy + 28, 'cat_happy').setOrigin(0.5, 1).setScale(92 / 401).setInteractive({ useHandCursor: true });
        if (sk.tint) mini.setTint(sk.tint);
        mini.on('pointerup', () => { Sound.play('click'); previewId = sk.id; renderSkins(); });
        dyn.add(mini);

        dyn.add(this.add.circle(cx - 26, cy - 42, 8, sk.aura || 0xff9a3d).setStrokeStyle(2, 0xffffff));
        dyn.add(txt(this, cx + 52, cy - 42, t(sk.id), 20, '#fff7e6', { stroke: false, wrap: 155 }));

        let lbl, opt;
        if (eq) {
          lbl = t('equipped');
          opt = { icon: 'ui_check', iconSize: 22, size: 20, color: 0x58c46b, shade: 0x2d7a3d, textColor: '#ffffff' };
        } else if (owned) {
          lbl = t('equip');
          opt = { icon: 'ui_palette', iconSize: 22, size: 22, color: 0x8a7bd8, shade: 0x4b3c99, textColor: '#ffffff' };
        } else {
          lbl = String(sk.price);
          opt = canBuy
            ? { icon: 'ui_coin', iconSize: 28, iconSide: 'left', size: 24, color: 0xffc83d, shade: 0xb57a10, textColor: '#3b2a00' }
            : { icon: 'ui_coin', iconSize: 26, iconSide: 'left', size: 22, color: 0x6d6a80, shade: 0x3f3d50, textColor: '#dddddd' };
        }
        const btn = makeButton(this, cx + 46, cy + 26, 152, 56, lbl, opt, () => {
          previewId = sk.id;
          if (owned) {
            ShopSkins.equip(sk.id);
            Sound.play('click'); buzz(12);
            renderSkins();
          } else if (ShopSkins.buy(sk.id)) {
            Sound.play('buy'); buzz(30);
            const e = this.add.particles(cx, cy, 'star', { lifespan: 800, speed: { min: 140, max: 360 }, scale: { start: 0.28, end: 0 }, tint: sk.aura || 0xffe27a, blendMode: 'ADD', frequency: -1 }).setDepth(92);
            e.explode(22); this.time.delayedCall(900, () => e.destroy());
            renderSkins();
          } else {
            Sound.play('lose'); buzz(20);
            this.tweens.add({ targets: btn, x: btn.x + 8, duration: 45, yoyo: true, repeat: 3 });
          }
        });
        dyn.add(btn);
      });
    };

    renderSkins();
    M.add(makeButton(this, W / 2, 1084, 280, 82, t('close'),
      { icon: 'ui_close', iconSize: 28, size: 36, color: 0x8a7bd8, shade: 0x4b3c99, textColor: '#ffffff' }, () => this.closeModal()));
  }

  closeOffersModal() { this.closeModal(); }

  closeModal() {
    if (!this.modal) return;
    this.modal.destroy(true);
    this.modal = null;
    this.refresh();
  }

  buy(i, priceOverride) {
    const c = CATS[i];
    const cost = priceOverride !== undefined ? priceOverride : ShopOffers.priceOf(i);
    if (save.owned.includes(i) || save.coins < cost) return false;
    save.coins -= cost; save.owned.push(i); save.cat = i; persist();
    Sound.play('buy'); buzz(30);
    const e = this.add.particles(W / 2, 620, 'star', { lifespan: 900, speed: { min: 150, max: 420 }, scale: { start: 0.3, end: 0 }, tint: c.tierColor || 0xffe27a, blendMode: 'ADD', frequency: -1 });
    e.explode(30); this.time.delayedCall(1000, () => e.destroy());
    this.idx = i;
    this.refresh();
    this.prev.setTexture(c.key + '_cheer');
    return true;
  }

  buyBundle(b) {
    if (!b || save.coins < b.price) { this.deny(); return false; }
    save.coins -= b.price;
    b.ids.forEach((id) => { if (!save.owned.includes(id)) save.owned.push(id); });
    save.cat = b.ids[b.ids.length - 1];
    persist();
    Sound.play('win'); buzz([25, 35, 25]);
    const e = this.add.particles(W / 2, 580, 'star', { lifespan: 1100, speed: { min: 180, max: 480 }, scale: { start: 0.35, end: 0 }, tint: 0xffe27a, blendMode: 'ADD', frequency: -1 });
    e.explode(42); this.time.delayedCall(1200, () => e.destroy());
    this.idx = save.cat;
    this.refresh();
    this.prev.setTexture(CATS[save.cat].key + '_cheer');
    return true;
  }

  choose(i) {
    if (!save.owned.includes(i)) return false;
    save.cat = i; persist(); Sound.play('click'); this.refresh();
    this.prev.setTexture(CATS[i].key + '_happy');
    return true;
  }

  deny() {
    Sound.play('lose'); buzz(20);
    const c = CATS[this.idx];
    this.prev.setTexture(c.key + '_scared');
    this.tweens.add({ targets: this.prev, x: W / 2 + 14, duration: 50, yoyo: true, repeat: 3 });
    this.time.delayedCall(550, () => {
      if (this.scene.isActive('Shop') && CATS[this.idx] === c) this.prev.setTexture(c.key + '_idle');
    });
  }
}

;
/* ===== js/missions.js ===== */
// ===== المكافأة اليومية + المهام اليومية + نظام الإنجازات والمظاهر/الشارات =====
// المنطق في كائني Daily و Achievements (بلا واجهة، سهل الاختبار)، والواجهة في MissionsScene.
// التاريخ حالياً من الجهاز؛ عند ربط Supabase نأخذه من الخادم (مع بقاء الحماية من إرجاع الساعة).

function todayStr() {
  const d = new Date();
  return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0');
}
function dayDiff(a, b) { return Math.round((new Date(b + 'T00:00:00') - new Date(a + 'T00:00:00')) / 86400000); }

// ===== معالم الإنجازات الصعبة ومكافآتها البصرية (مظاهر خاصة للقط + شارات عرض) =====
const ACHIEVEMENT_LIST = [
  { id: 'cheese_hoarder', stat: 'cheese', target: 300, mode: 'add', coins: 40,
    badge: { id: 'badge_cheese', icon: '🧀', color: 0xffc83d } },
  { id: 'mouse_master', stat: 'mice', target: 25, mode: 'add', coins: 30,
    skin: { id: 'skin_neon', aura: 0x00f5d4, particle: 'star', tint: 0xd0ffff, badgeIcon: '⚡' } },
  { id: 'combo_legend', stat: 'combo', target: 20, mode: 'max', coins: 35,
    skin: { id: 'skin_flame', aura: 0xff5a1f, particle: 'glow', tint: 0xffe0c2, badgeIcon: '🔥' } },
  { id: 'untouchable', stat: 'clean', target: 3, mode: 'add', coins: 60,
    badge: { id: 'badge_shield', icon: '🛡️', color: 0x58c46b } },
  { id: 'world_conqueror', stat: 'stars', target: 15, mode: 'stars', coins: 100,
    skin: { id: 'skin_cosmic', aura: 0xc77dff, particle: 'star', tint: 0xf3d9ff, badgeIcon: '🌌' },
    badge: { id: 'badge_crown', icon: '👑', color: 0xffd24a } },
];

const Achievements = {
  ensure() {
    if (!save.achievements || typeof save.achievements !== 'object') {
      save.achievements = { stats: {}, claimed: [], badge: '', skin: '' };
    }
    const a = save.achievements;
    if (!a.stats || typeof a.stats !== 'object') a.stats = {};
    if (!Array.isArray(a.claimed)) a.claimed = [];
    if (typeof a.badge !== 'string') a.badge = '';
    if (typeof a.skin !== 'string') a.skin = '';
  },

  list() { return ACHIEVEMENT_LIST; },
  def(id) { return ACHIEVEMENT_LIST.find((x) => x.id === id); },

  // تحديث إحصائيات الإنجازات التراكمية والقياسية
  track(stat, val) {
    this.ensure();
    const st = save.achievements.stats;
    let changed = false;
    ACHIEVEMENT_LIST.forEach((a) => {
      if (a.stat !== stat || a.mode === 'stars') return;
      const prev = st[stat] || 0;
      const next = a.mode === 'max' ? Math.max(prev, val) : prev + val;
      if (next !== prev) { st[stat] = next; changed = true; }
    });
    if (changed) persist();
  },

  progress(id) {
    this.ensure();
    const a = this.def(id);
    if (!a) return 0;
    if (a.mode === 'stars') {
      const total = Array.isArray(save.stars) ? save.stars.reduce((s, v) => s + (v || 0), 0) : 0;
      return Math.min(a.target, total);
    }
    return Math.min(a.target, save.achievements.stats[a.stat] || 0);
  },

  isDone(id) {
    const a = this.def(id);
    return !!a && this.progress(id) >= a.target;
  },

  isClaimed(id) {
    this.ensure();
    return save.achievements.claimed.includes(id);
  },

  pending() {
    this.ensure();
    return ACHIEVEMENT_LIST.some((a) => this.isDone(a.id) && !this.isClaimed(a.id));
  },

  claim(id) {
    this.ensure();
    const a = this.def(id);
    if (!a || !this.isDone(id) || this.isClaimed(id)) return null;
    save.achievements.claimed.push(id);
    if (a.coins) save.coins += a.coins;
    if (a.skin) {
      save.achievements.skin = a.skin.id;
      if (save.shopSkins) save.shopSkins.equipped = '';
    }
    if (a.badge) save.achievements.badge = a.badge.id;
    persist();
    return { coins: a.coins || 0, skin: a.skin || null, badge: a.badge || null };
  },

  hasSkin(skinId) {
    this.ensure();
    return ACHIEVEMENT_LIST.some((a) => a.skin && a.skin.id === skinId && this.isClaimed(a.id));
  },

  hasBadge(badgeId) {
    this.ensure();
    return ACHIEVEMENT_LIST.some((a) => a.badge && a.badge.id === badgeId && this.isClaimed(a.id));
  },

  equipSkin(skinId) {
    this.ensure();
    if (skinId && !this.hasSkin(skinId)) return false;
    save.achievements.skin = save.achievements.skin === skinId ? '' : (skinId || '');
    if (save.achievements.skin && save.shopSkins) save.shopSkins.equipped = '';
    persist();
    return true;
  },

  equipBadge(badgeId) {
    this.ensure();
    if (badgeId && !this.hasBadge(badgeId)) return false;
    save.achievements.badge = save.achievements.badge === badgeId ? '' : (badgeId || '');
    persist();
    return true;
  },

  activeSkinDef() {
    this.ensure();
    const id = save.achievements.skin;
    if (!id) return null;
    const found = ACHIEVEMENT_LIST.find((a) => a.skin && a.skin.id === id && this.isClaimed(a.id));
    return found ? found.skin : null;
  },

  activeBadgeDef() {
    this.ensure();
    const id = save.achievements.badge;
    if (!id) return null;
    const found = ACHIEVEMENT_LIST.find((a) => a.badge && a.badge.id === id && this.isClaimed(a.id));
    return found ? found.badge : null;
  },
};

// ===== التحديات اليومية المؤقتة (مهام عشوائية متدرجة الصعوبة بمؤقت ومكافآت عملات خاصة) =====
const CHALLENGE_POOL = [
  { type: 'cheese', mode: 'add', targets: [60, 85, 115], rewards: [35, 50, 70] },
  { type: 'mice',   mode: 'add', targets: [4, 6, 8],     rewards: [40, 55, 75] },
  { type: 'score',  mode: 'max', targets: [30, 42, 55],  rewards: [45, 65, 90] },
  { type: 'combo',  mode: 'max', targets: [12, 16, 22],  rewards: [45, 65, 85] },
  { type: 'clean',  mode: 'add', targets: [1, 2, 3],     rewards: [50, 75, 100] },
  { type: 'plays',  mode: 'add', targets: [3, 4, 6],     rewards: [35, 50, 65] },
];

const DailyChallenges = {
  CHEST_REWARD: 60,
  _nextMidnightMs() {
    const d = new Date();
    d.setHours(24, 0, 0, 0);
    return d.getTime();
  },
  _buildList(seedStr, salt) {
    const r = mulberry32(seedFromString(seedStr + '-' + salt));
    const pool = CHALLENGE_POOL.slice();
    const list = [];
    const tierOrder = [0, 1, 2];
    while (list.length < 3 && pool.length) {
      const def = pool.splice(Math.floor(r() * pool.length), 1)[0];
      const tier = tierOrder.splice(Math.floor(r() * tierOrder.length), 1)[0];
      list.push({
        type: def.type,
        mode: def.mode,
        tier,
        target: def.targets[tier],
        reward: def.rewards[tier],
        progress: 0,
        claimed: false,
      });
    }
    return list.sort((a, b) => a.tier - b.tier);
  },
  ensure() {
    const today = todayStr();
    const now = Date.now();
    if (!save.challenges || typeof save.challenges !== 'object' || !Array.isArray(save.challenges.list)) {
      save.challenges = { windowId: '', expiresAt: 0, rerolls: 1, chestClaimed: false, chestReward: this.CHEST_REWARD, list: [] };
    }
    const c = save.challenges;
    if (c.windowId !== today || !c.expiresAt || now >= c.expiresAt || c.list.length !== 3) {
      const salt = Math.floor(Math.random() * 100000);
      save.challenges = {
        windowId: today,
        expiresAt: this._nextMidnightMs(),
        rerolls: 1,
        chestClaimed: false,
        chestReward: this.CHEST_REWARD,
        list: this._buildList('chal-' + today, salt),
      };
      persist();
    }
  },
  msLeft() {
    this.ensure();
    return Math.max(0, (save.challenges.expiresAt || 0) - Date.now());
  },
  countdownText() {
    const s = Math.floor(this.msLeft() / 1000);
    const h = Math.floor(s / 3600);
    const m = Math.floor((s % 3600) / 60);
    const sec = s % 60;
    return [h, m, sec].map((n) => String(n).padStart(2, '0')).join(':');
  },
  done(ch) { return !!ch && ch.progress >= ch.target; },
  allDone() {
    this.ensure();
    return save.challenges.list.length === 3 && save.challenges.list.every((c) => this.done(c));
  },
  report(type, v) {
    this.ensure();
    if (this.msLeft() <= 0) return;
    let changed = false;
    save.challenges.list.forEach((ch) => {
      if (ch.type !== type || ch.claimed) return;
      const before = ch.progress;
      ch.progress = Math.min(ch.target, ch.mode === 'max' ? Math.max(ch.progress, v) : ch.progress + v);
      if (ch.progress !== before) changed = true;
    });
    if (changed) persist();
  },
  claim(i) {
    this.ensure();
    const ch = save.challenges.list[i];
    if (!ch || ch.claimed || !this.done(ch)) return 0;
    ch.claimed = true;
    save.coins += ch.reward;
    persist();
    return ch.reward;
  },
  canClaimChest() {
    this.ensure();
    return this.allDone() && !save.challenges.chestClaimed;
  },
  claimChest() {
    if (!this.canClaimChest()) return 0;
    const reward = save.challenges.chestReward || this.CHEST_REWARD;
    save.challenges.chestClaimed = true;
    save.coins += reward;
    persist();
    return reward;
  },
  canReroll() {
    this.ensure();
    return (save.challenges.rerolls || 0) > 0 && save.challenges.list.some((c) => !c.claimed && !this.done(c));
  },
  reroll() {
    if (!this.canReroll()) return false;
    const c = save.challenges;
    const usedTypes = new Set(c.list.filter((x) => x.claimed || this.done(x)).map((x) => x.type));
    const avail = CHALLENGE_POOL.filter((p) => !usedTypes.has(p.type));
    const freshPool = (avail.length ? avail : CHALLENGE_POOL).slice();
    c.list = c.list.map((ch) => {
      if (ch.claimed || this.done(ch)) return ch;
      const idx = Math.floor(Math.random() * freshPool.length);
      const def = freshPool.splice(idx, 1)[0] || CHALLENGE_POOL[0];
      return {
        type: def.type,
        mode: def.mode,
        tier: ch.tier,
        target: def.targets[ch.tier],
        reward: def.rewards[ch.tier],
        progress: 0,
        claimed: false,
      };
    });
    c.rerolls = Math.max(0, (c.rerolls || 0) - 1);
    persist();
    return true;
  },
  pending() {
    this.ensure();
    return save.challenges.list.some((c) => !c.claimed && this.done(c)) || this.canClaimChest();
  },
};

const Daily = {
  // يضمن سلامة الحقول ويولّد مهام اليوم (3 مهام مختلفة ثابتة طوال اليوم لكل اللاعبين)
  ensure() {
    if (!save.daily || typeof save.daily !== 'object') save.daily = { last: '', streak: 0 };
    if (!save.missions || typeof save.missions !== 'object' || !Array.isArray(save.missions.list)) save.missions = { day: '', list: [] };
    Achievements.ensure();
    DailyChallenges.ensure();
    const today = todayStr();
    if (save.missions.day !== today) {
      const r = mulberry32(seedFromString('missions-' + today)), pool = MISSION_POOL.slice(), list = [];
      while (list.length < 3 && pool.length) list.push({ id: pool.splice(Math.floor(r() * pool.length), 1)[0].id, progress: 0, claimed: false });
      save.missions = { day: today, list };
      persist();
    }
  },
  def(id) { return MISSION_POOL.find((m) => m.id === id); },

  // تقرير تقدم من اللعب: add يجمع، max يحتفظ بالأفضل (ويغذّي الإنجازات والتحديات أيضاً)
  report(id, v) {
    this.ensure();
    Achievements.track(id, v);
    DailyChallenges.report(id, v);
    const m = save.missions.list.find((x) => x.id === id);
    if (!m || m.claimed) return;
    const d = this.def(id), before = m.progress;
    m.progress = Math.min(d.target, d.mode === 'max' ? Math.max(m.progress, v) : m.progress + v);
    if (m.progress !== before) persist();
  },
  done(m) { return m.progress >= this.def(m.id).target; },
  claimMission(i) {
    this.ensure();
    const m = save.missions.list[i];
    if (!m || m.claimed || !this.done(m)) return 0;
    m.claimed = true; save.coins += this.def(m.id).reward; persist();
    return this.def(m.id).reward;
  },

  // حالة المكافأة اليومية: السلسلة تستمر إن استلمت أمس، وتبدأ من جديد إن فاتك يوم
  dailyState() {
    this.ensure();
    const today = todayStr(), last = save.daily.last, st = save.daily.streak || 0;
    if (last && last >= today) return { canClaim: false, streak: st, claimedIdx: (st - 1 + 7 * 100) % DAILY_REWARDS.length };   // استلمتها اليوم (أو ساعة الجهاز رُجّعت)
    const streak = last && dayDiff(last, today) === 1 ? st : 0;
    const idx = streak % DAILY_REWARDS.length;
    return { canClaim: true, streak, idx, reward: DAILY_REWARDS[idx] };
  },
  claimDaily() {
    const s = this.dailyState();
    if (!s.canClaim) return 0;
    save.daily = { last: todayStr(), streak: s.streak + 1 };
    save.coins += s.reward; persist();
    return s.reward;
  },
  pending() { this.ensure(); return this.dailyState().canClaim || save.missions.list.some((m) => !m.claimed && this.done(m)); },
};

class MissionsScene extends Phaser.Scene {
  constructor() { super('Missions'); }
  init(d) { this.tab = (d && d.tab) || 'daily'; }

  create() {
    enter(this);
    Daily.ensure();
    this.add.image(0, 0, 'bg_night').setOrigin(0);
    this.add.rectangle(0, 0, W, H, 0x120d33, 0.6).setOrigin(0);
    addAmbient(this, 'stars');
    txt(this, W / 2, 72, t('dailyBtn'), 62, '#ffc83d', { strokeColor: '#7a3d00', strokeW: 12 });
    this.add.graphics().fillStyle(0x000000, 0.4).fillRoundedRect(W - 230, 28, 200, 68, 34);
    if (this.textures.exists('ui_coin')) this.add.image(W - 198, 62, 'ui_coin').setScale(0.34);
    this.coinTxt = txt(this, this.textures.exists('ui_coin') ? W - 118 : W - 130, 62, '', 34, '#ffc83d', { stroke: false });
    makeButton(this, W / 2, 1205, 300, 90, t('back'),
      { icon: 'ui_arrow_left', iconSize: 34, iconSide: 'left', size: 40, color: 0x8a7bd8, shade: 0x4b3c99, textColor: '#ffffff' }, () => go(this, 'Menu'));
    this.events.once('shutdown', () => { if (this._chalTimer) { this._chalTimer.remove(); this._chalTimer = null; } });
    this.render();
  }

  burst(x, y, str) {
    const e = this.add.particles(x, y, 'star', { lifespan: 900, speed: { min: 150, max: 420 }, scale: { start: 0.3, end: 0 }, tint: 0xffe27a, blendMode: 'ADD', frequency: -1 }).setDepth(60);
    e.explode(24); this.time.delayedCall(1000, () => e.destroy());
    const tx = txt(this, x, y - 20, str, 56, '#ffc83d').setDepth(61);
    this.tweens.add({ targets: tx, y: y - 150, alpha: 0, duration: 900, onComplete: () => tx.destroy() });
  }

  // يُعاد بناء الجزء المتغير بعد كل استلام أو تبديل تبويب
  render() {
    if (this._chalTimer) { this._chalTimer.remove(); this._chalTimer = null; }
    if (this.dyn) this.dyn.destroy(true);
    const D = (this.dyn = this.add.container(0, 0));
    const put = (o) => { D.add(o); return o; };
    this.coinTxt.setText(String(save.coins));

    // ----- أزرار التبويب (المهام اليومية / التحديات / الإنجازات) -----
    const tab = this.tab;
    put(makeButton(this, 140, 144, 208, 56, t('dailyBtn'),
      tab === 'daily'
        ? { icon: 'ui_gift', iconSize: 30, iconGap: 8, size: 22 }
        : { icon: 'ui_gift', iconSize: 28, iconGap: 8, size: 22, color: 0x3b2f7a, shade: 0x221a4d, textColor: '#cfcaff' },
      () => { if (this.tab !== 'daily') { this.tab = 'daily'; this.render(); } }));
    put(makeButton(this, 360, 144, 208, 56, t('challengesTab'),
      tab === 'challenges'
        ? { icon: 'ui_bolt', iconSize: 30, iconGap: 8, size: 22 }
        : { icon: 'ui_bolt', iconSize: 28, iconGap: 8, size: 22, color: 0x3b2f7a, shade: 0x221a4d, textColor: '#cfcaff' },
      () => { if (this.tab !== 'challenges') { this.tab = 'challenges'; this.render(); } }));
    put(makeButton(this, 580, 144, 208, 56, t('achievements'),
      tab === 'achievements'
        ? { icon: 'ui_trophy', iconSize: 30, iconGap: 8, size: 22 }
        : { icon: 'ui_trophy', iconSize: 28, iconGap: 8, size: 22, color: 0x3b2f7a, shade: 0x221a4d, textColor: '#cfcaff' },
      () => { if (this.tab !== 'achievements') { this.tab = 'achievements'; this.render(); } }));
    const addTabDot = (x) => {
      const dot = put(this.add.circle(x, 120, 11, 0xe5484d).setStrokeStyle(3, 0xffffff));
      this.tweens.add({ targets: dot, scale: 1.25, duration: 500, yoyo: true, repeat: -1 });
    };
    if (Daily.pending() && tab !== 'daily') addTabDot(232);
    if (DailyChallenges.pending() && tab !== 'challenges') addTabDot(452);
    if (Achievements.pending() && tab !== 'achievements') addTabDot(672);

    if (tab === 'achievements') return this.renderAchievements(put);
    if (tab === 'challenges') return this.renderChallenges(put);

    // ----- المكافأة اليومية (تحافظ على المواضع الدقيقة لاختبارات QA) -----
    const st = Daily.dailyState();
    const g = put(this.add.graphics());
    g.fillStyle(0x1d1850, 0.9).fillRoundedRect(30, 190, 660, 340, 36).lineStyle(4, 0xffc83d, 1).strokeRoundedRect(30, 190, 660, 340, 36);
    put(txt(this, W / 2, 235, t('dailyReward'), 46, '#ffc83d', { strokeColor: '#4a2400' }));
    const upTo = st.canClaim ? st.idx - 1 : st.claimedIdx;
    const hasCoin = this.textures.exists('ui_coin');
    const hasCheck = this.textures.exists('ui_check');
    DAILY_REWARDS.forEach((r, i) => {
      const x = 81 + i * 93, y = 350, claimed = i <= upTo, today = st.canClaim && i === st.idx;
      const col = claimed ? 0x2d7a3d : today ? 0xffc83d : 0x2b2560;
      g.fillStyle(col, 1).fillRoundedRect(x - 40, y - 62, 80, 124, 20);
      if (today) g.lineStyle(5, 0xffffff, 1).strokeRoundedRect(x - 40, y - 62, 80, 124, 20);
      const ink = today ? '#3b2a00' : '#ffffff';
      put(txt(this, x, y - 40, t('day') + ' ' + (i + 1), 20, ink, { stroke: false }));
      if (claimed && hasCheck) put(this.add.image(x, y, 'ui_check').setScale(36 / 96));
      else if (claimed) put(txt(this, x, y, '✓', 36, ink, { stroke: false }));
      else if (hasCoin) put(this.add.image(x, y, 'ui_coin').setScale(0.30));
      else put(txt(this, x, y, '+', 34, ink, { stroke: false }));
      put(txt(this, x, y + 42, String(r), 30, ink, { stroke: false }));
    });
    const dailyLabel = st.canClaim ? (t('claim') + '  +' + st.reward) : t('claimed');
    const dailyOpt = st.canClaim
      ? { icon: 'ui_coin', iconSize: 38, iconSide: 'left', size: 36 }
      : { icon: 'ui_check', iconSize: 32, size: 34, color: 0x6d6a80, shade: 0x3f3d50, textColor: '#dddddd' };
    put(makeButton(this, W / 2, 465, 460, 84, dailyLabel, dailyOpt, () => {
      const got = Daily.claimDaily();
      if (got) { Sound.play('buy'); buzz(30); this.burst(W / 2, 465, '+' + got); this.render(); } else { Sound.play('lose'); }
    }));

    // ----- المهام اليومية -----
    put(txt(this, W / 2, 590, t('dailyMissions'), 46, '#ffc83d', { strokeColor: '#4a2400' }));
    save.missions.list.forEach((m, i) => {
      const d = Daily.def(m.id), cx = W / 2, cy = 715 + i * 170, ready = Daily.done(m) && !m.claimed;
      g.fillStyle(0x1d1850, 0.9).fillRoundedRect(cx - 320, cy - 75, 640, 150, 30);
      g.lineStyle(4, ready ? 0xffc83d : 0x4b3c99, 1).strokeRoundedRect(cx - 320, cy - 75, 640, 150, 30);
      put(txt(this, cx, cy - 36, t('m_' + m.id).replace('{n}', d.target), 32, '#fff7e6', { stroke: false, wrap: 590 }));
      const bx = cx - 290, by = cy + 28, bw = 330, frac = Math.min(1, m.progress / d.target);
      g.fillStyle(0x000000, 0.45).fillRoundedRect(bx, by - 14, bw, 28, 14);
      if (frac > 0) g.fillStyle(m.claimed ? 0x58c46b : 0xffc83d, 1).fillRoundedRect(bx, by - 14, Math.max(28, bw * frac), 28, 14);
      put(txt(this, bx + bw + 14, by, m.progress + '/' + d.target, 26, '#ffffff', { stroke: false, ox: 0 }));
      let label, o;
      if (m.claimed) { label = ''; o = { icon: 'ui_check', iconSize: 34, color: 0x58c46b, shade: 0x2d7a3d }; }
      else if (ready) { label = t('claim') + ' +' + d.reward; o = { icon: 'ui_coin', iconSize: 28, iconSide: 'left', size: 22 }; }
      else { label = '+' + d.reward; o = { icon: 'ui_coin', iconSize: 30, iconSide: 'left', size: 28, color: 0x6d6a80, shade: 0x3f3d50, textColor: '#dddddd' }; }
      put(makeButton(this, cx + 232, by - 2, 160, 70, label, o, () => {
        const got = Daily.claimMission(i);
        if (got) { Sound.play('buy'); buzz(30); this.burst(cx + 232, by, '+' + got); this.render(); } else if (!m.claimed) { Sound.play('lose'); }
      }));
    });
  }

  // ----- شاشة الإنجازات والمكافآت البصرية (مظاهر + شارات) -----
  renderAchievements(put) {
    const g = put(this.add.graphics());
    const hasTrophy = this.textures.exists('ui_trophy');

    ACHIEVEMENT_LIST.forEach((a, i) => {
      const cx = W / 2, cy = 278 + i * 176;
      const prog = Achievements.progress(a.id);
      const done = prog >= a.target;
      const claimed = Achievements.isClaimed(a.id);
      const ready = done && !claimed;

      g.fillStyle(0x1d1850, 0.92).fillRoundedRect(cx - 325, cy - 76, 650, 152, 28);
      g.lineStyle(4, ready ? 0xffc83d : claimed ? 0x58c46b : 0x4b3c99, 1).strokeRoundedRect(cx - 325, cy - 76, 650, 152, 28);

      // أيقونة الجائزة على اليسار باستخدام أصول اللعبة
      if (a.badge && a.badge.id === 'badge_cheese' && this.textures.exists('cheese')) {
        put(this.add.image(cx - 265, cy - 10, 'cheese').setScale(0.36));
      } else if (a.badge && a.badge.id === 'badge_shield' && this.textures.exists('pu_shield')) {
        put(this.add.image(cx - 265, cy - 10, 'pu_shield').setScale(66 / 96));
      } else if (hasTrophy) {
        put(this.add.image(cx - 265, cy - 10, 'ui_trophy').setScale(58 / 128).setTint(a.skin ? a.skin.aura : (a.badge ? a.badge.color : 0xffffff)));
      } else if (this.textures.exists('ui_star')) {
        put(this.add.image(cx - 265, cy - 10, 'ui_star').setScale(54 / 128));
      }

      // عنوان المعلم + وصف المكافأة البصرية
      put(txt(this, cx - 205, cy - 40, t('ach_' + a.id).replace('{n}', a.target), 26, '#fff7e6', { stroke: false, ox: 0, wrap: 380 }));
      const rewardParts = [];
      if (a.skin) rewardParts.push(t('rewardSkin') + ': ' + t(a.skin.id));
      if (a.badge) rewardParts.push(t('rewardBadge') + ': ' + t(a.badge.id));
      if (a.coins) rewardParts.push('+' + a.coins + ' ' + t('coins'));
      put(txt(this, cx - 205, cy - 4, rewardParts.join('  •  '), 20, '#ffe9a8', { stroke: false, ox: 0, wrap: 380 }));

      // شريط التقدم
      const bx = cx - 205, by = cy + 40, bw = 240, frac = Math.min(1, prog / a.target);
      g.fillStyle(0x000000, 0.45).fillRoundedRect(bx, by - 12, bw, 24, 12);
      if (frac > 0) g.fillStyle(claimed ? 0x58c46b : 0xffc83d, 1).fillRoundedRect(bx, by - 12, Math.max(24, bw * frac), 24, 12);
      put(txt(this, bx + bw + 12, by, prog + '/' + a.target, 22, '#ffffff', { stroke: false, ox: 0 }));

      // زر الاستلام أو التجهيز (للمظهر / الشارة)
      if (!claimed) {
        const lbl = ready ? t('claim') : '';
        const o = ready
          ? { icon: 'ui_gift', iconSize: 28, size: 25, color: 0xffc83d, shade: 0xb57a10, textColor: '#3b2a00' }
          : { icon: 'ui_lock', iconSize: 36, color: 0x6d6a80, shade: 0x3f3d50 };
        put(makeButton(this, cx + 225, cy + 8, 165, 72, lbl, o, () => {
          const res = Achievements.claim(a.id);
          if (res) {
            Sound.play('win'); buzz(30);
            this.burst(cx + 225, cy, res.skin ? t(res.skin.id) : (res.badge ? t(res.badge.id) : '+' + res.coins));
            this.render();
          } else {
            Sound.play('lose');
          }
        }));
      } else {
        const isSkinEq = a.skin && save.achievements.skin === a.skin.id;
        const isBadgeEq = a.badge && save.achievements.badge === a.badge.id;
        const isEquipped = isSkinEq || isBadgeEq;
        const lbl = isEquipped ? t('equipped') : t('equip');
        const o = isEquipped
          ? { icon: 'ui_check', iconSize: 24, size: 20, color: 0x58c46b, shade: 0x2d7a3d, textColor: '#ffffff' }
          : { icon: 'ui_palette', iconSize: 24, size: 22, color: 0x8a7bd8, shade: 0x4b3c99, textColor: '#ffffff' };
        put(makeButton(this, cx + 225, cy + 8, 165, 72, lbl, o, () => {
          if (a.skin) Achievements.equipSkin(a.skin.id);
          if (a.badge) Achievements.equipBadge(a.badge.id);
          Sound.play('click');
          this.render();
        }));
      }
    });
  }

  // ----- شاشة التحديات اليومية المؤقتة -----
  renderChallenges(put) {
    DailyChallenges.ensure();
    const g = put(this.add.graphics());

    // شريط الرأس: العنوان + المؤقت الحي + زر تبديل مجاني
    g.fillStyle(0x1d1850, 0.94).fillRoundedRect(30, 192, 660, 140, 30);
    g.lineStyle(4, 0x00d9ff, 0.9).strokeRoundedRect(30, 192, 660, 140, 30);
    if (this.textures.exists('ui_bolt')) put(this.add.image(W / 2 - 210, 232, 'ui_bolt').setScale(34 / 96));
    put(txt(this, W / 2 + 16, 232, t('dailyChallenges'), 34, '#7ceeff', { strokeColor: '#102a4a', wrap: 540 }));
    const timerTxt = put(txt(this, 235, 290, t('endsIn') + ': ' + DailyChallenges.countdownText(), 24, '#ffe9a8', { stroke: false }));
    this._chalTimer = this.time.addEvent({
      delay: 1000, loop: true,
      callback: () => {
        if (timerTxt && timerTxt.active) timerTxt.setText(t('endsIn') + ': ' + DailyChallenges.countdownText());
      },
    });
    const canReroll = DailyChallenges.canReroll();
    put(makeButton(this, 565, 288, 190, 56, t('reroll') + ' (' + (save.challenges.rerolls || 0) + ')',
      canReroll
        ? { icon: 'ui_dice', iconSize: 28, iconGap: 6, size: 21, color: 0x8a7bd8, shade: 0x4b3c99, textColor: '#ffffff' }
        : { icon: 'ui_dice', iconSize: 26, iconGap: 6, size: 21, color: 0x4a4666, shade: 0x2e2b42, textColor: '#9f9bb8' },
      () => {
        if (DailyChallenges.reroll()) { Sound.play('click'); buzz(15); this.render(); }
        else Sound.play('lose');
      }));

    // صندوق التحديات الكبرى (+60 عملة إضافية عند إتمام الـ 3 تحديات)
    const doneCnt = save.challenges.list.filter((c) => DailyChallenges.done(c)).length;
    const chestReady = DailyChallenges.canClaimChest();
    const chestDone = save.challenges.chestClaimed;
    g.fillStyle(0x281e63, 0.96).fillRoundedRect(30, 352, 660, 128, 28);
    g.lineStyle(4, chestReady ? 0xffc83d : chestDone ? 0x58c46b : 0x6a4fd8, 1).strokeRoundedRect(30, 352, 660, 128, 28);
    if (this.textures.exists('ui_gift')) put(this.add.image(95, 416, 'ui_gift').setScale(72 / 128));
    put(txt(this, 315, 392, t('chalChest') + ' (' + doneCnt + '/3)', 28, '#ffc83d', { strokeColor: '#4a2400', wrap: 330 }));
    put(txt(this, 315, 434, t('chalChestDesc'), 20, '#dcd6ff', { stroke: false, wrap: 340 }));
    const chestReward = save.challenges.chestReward || DailyChallenges.CHEST_REWARD;
    const chestBtnLbl = chestDone ? '' : (chestReady ? (t('claim') + ' +' + chestReward) : ('+' + chestReward));
    const chestOpt = chestDone
      ? { icon: 'ui_check', iconSize: 34, color: 0x58c46b, shade: 0x2d7a3d }
      : chestReady
        ? { icon: 'ui_coin', iconSize: 28, iconSide: 'left', size: 22, color: 0xffc83d, shade: 0xb57a10, textColor: '#3b2a00' }
        : { icon: 'ui_coin', iconSize: 28, iconSide: 'left', size: 26, color: 0x6d6a80, shade: 0x3f3d50, textColor: '#dddddd' };
    put(makeButton(this, 575, 416, 178, 72, chestBtnLbl, chestOpt, () => {
      const got = DailyChallenges.claimChest();
      if (got) { Sound.play('win'); buzz([20, 30, 20]); this.burst(575, 416, '+' + got); this.render(); }
      else if (!chestDone) Sound.play('lose');
    }));

    // بطاقات التحديات الثلاث المتدرجة
    const tierIconKeys = ['ui_bolt', 'ui_fire', 'ui_star'];
    const tierColors = [0x58c46b, 0xffc83d, 0xc77dff];
    save.challenges.list.forEach((ch, i) => {
      const cx = W / 2, cy = 588 + i * 176;
      const done = DailyChallenges.done(ch);
      const ready = done && !ch.claimed;
      const tCol = tierColors[ch.tier] || 0x4b3c99;

      g.fillStyle(0x1d1850, 0.94).fillRoundedRect(cx - 325, cy - 76, 650, 152, 28);
      g.lineStyle(4, ready ? 0xffc83d : ch.claimed ? 0x58c46b : tCol, 1).strokeRoundedRect(cx - 325, cy - 76, 650, 152, 28);

      const ik = tierIconKeys[ch.tier] || 'ui_bolt';
      if (this.textures.exists(ik)) {
        const ic = this.add.image(cx - 270, cy - 26, ik);
        ic.setScale(44 / Math.max(ic.width || 96, ic.height || 96));
        put(ic);
      }
      put(txt(this, cx - 270, cy + 20, t('chalTier' + ch.tier), 20, '#ffe9a8', { stroke: false }));
      put(txt(this, cx - 210, cy - 32, t('c_' + ch.type).replace('{n}', ch.target), 28, '#fff7e6', { stroke: false, ox: 0, wrap: 400 }));

      const bx = cx - 210, by = cy + 30, bw = 240, frac = Math.min(1, ch.progress / ch.target);
      g.fillStyle(0x000000, 0.45).fillRoundedRect(bx, by - 12, bw, 24, 12);
      if (frac > 0) g.fillStyle(ch.claimed ? 0x58c46b : tCol, 1).fillRoundedRect(bx, by - 12, Math.max(24, bw * frac), 24, 12);
      put(txt(this, bx + bw + 12, by, ch.progress + '/' + ch.target, 22, '#ffffff', { stroke: false, ox: 0 }));

      let lbl, o;
      if (ch.claimed) { lbl = ''; o = { icon: 'ui_check', iconSize: 34, color: 0x58c46b, shade: 0x2d7a3d }; }
      else if (ready) { lbl = t('claim') + ' +' + ch.reward; o = { icon: 'ui_coin', iconSize: 28, iconSide: 'left', size: 22 }; }
      else { lbl = '+' + ch.reward; o = { icon: 'ui_coin', iconSize: 28, iconSide: 'left', size: 26, color: 0x6d6a80, shade: 0x3f3d50, textColor: '#dddddd' }; }
      put(makeButton(this, cx + 225, cy + 4, 168, 72, lbl, o, () => {
        const got = DailyChallenges.claim(i);
        if (got) { Sound.play('buy'); buzz(30); this.burst(cx + 225, cy, '+' + got); this.render(); }
        else if (!ch.claimed) Sound.play('lose');
      }));
    });
  }
}

;
/* ===== js/maze.js ===== */
// ===== وضع المتاهة المنطقي (Maze Mode): توليد بذري منطقي، فخاخ متحركة، إنقاذ القطط، وقدرات حماسية =====
// قائمة صور المتاهة المحمّلة من مجلد assets/maze/ (لا يُضاف اسم إلا بعد وجود الملف تجنباً لأخطاء 404)
const MAZE_ART = [];

const MAZE_COLS = 9;
const MAZE_ROWS = 15;
const MAZE_TILE = 80;
const MAZE_OFFSET_Y = 80;

const MAZE_DIRS = [
  { name: 'up',    dx: 0,  dy: -1 },
  { name: 'right', dx: 1,  dy: 0  },
  { name: 'down',  dx: 0,  dy: 1  },
  { name: 'left',  dx: -1, dy: 0  },
];

const MAZE_WORLDS = ['night', 'desert', 'sea', 'snow', 'space'];
const MAZE_WORLD_PALETTES = {
  night:  { wall: '#46337a', wallTop: '#674ea7', trim: '#8a6fd6', floorA: '#231b46', floorB: '#2a2154', pebble: '#3b306e', accent: 0xa66cff },
  desert: { wall: '#a85a2a', wallTop: '#cf793f', trim: '#f0a35e', floorA: '#5c361a', floorB: '#6a4021', pebble: '#804f29', accent: 0xffb84d },
  sea:    { wall: '#135c7a', wallTop: '#1d82a8', trim: '#4dd2ff', floorA: '#0d364b', floorB: '#11435c', pebble: '#195775', accent: 0x38bdf8 },
  snow:   { wall: '#557ca6', wallTop: '#7ea8d4', trim: '#cfe8ff', floorA: '#29405c', floorB: '#324d6e', pebble: '#456790', accent: 0x7be8ff },
  space:  { wall: '#2f1f63', wallTop: '#4c3299', trim: '#c77dff', floorA: '#130c2e', floorB: '#1a113d', pebble: '#291c5c', accent: 0xc77dff },
};

function mazeLevelConfig(level) {
  const lv = Math.max(0, Number(level) || 0);
  const worldIdx = Math.floor(lv / 2) % MAZE_WORLDS.length;
  const theme = MAZE_WORLDS[worldIdx];
  const seed = (1000 + lv * 7919) >>> 0;
  const time = 64 + Math.min(lv, 12) * 3;
  const quotaPct = lv >= 7 ? 0.68 : 0.60;
  return { level: lv, worldIdx, theme, seed, time, quotaPct };
}

function mazeDistances(grid, sx, sy, blockedSet = null) {
  const dist = Array.from({ length: MAZE_ROWS }, () => Array(MAZE_COLS).fill(-1));
  if (!grid[sy] || grid[sy][sx] === 1) return dist;
  const key = (x, y) => x + ',' + y;
  if (blockedSet && blockedSet.has(key(sx, sy))) return dist;
  const q = [[sx, sy]];
  dist[sy][sx] = 0;
  let head = 0;
  while (head < q.length) {
    const [x, y] = q[head++];
    for (const d of MAZE_DIRS) {
      const nx = x + d.dx, ny = y + d.dy;
      if (nx < 0 || nx >= MAZE_COLS || ny < 0 || ny >= MAZE_ROWS) continue;
      if (grid[ny][nx] === 1 || dist[ny][nx] !== -1) continue;
      if (blockedSet && blockedSet.has(key(nx, ny))) continue;
      dist[ny][nx] = dist[y][x] + 1;
      q.push([nx, ny]);
    }
  }
  return dist;
}

function mazePath(grid, sx, sy, ex, ey, blockedSet = null) {
  const dist = mazeDistances(grid, sx, sy, blockedSet);
  if (!dist[ey] || dist[ey][ex] < 0) return [];
  const path = [[ex, ey]];
  let cx = ex, cy = ey;
  while (cx !== sx || cy !== sy) {
    const cur = dist[cy][cx];
    let stepped = false;
    for (const d of MAZE_DIRS) {
      const nx = cx + d.dx, ny = cy + d.dy;
      if (nx >= 0 && nx < MAZE_COLS && ny >= 0 && ny < MAZE_ROWS && dist[ny][nx] === cur - 1) {
        path.push([nx, ny]);
        cx = nx; cy = ny;
        stepped = true;
        break;
      }
    }
    if (!stepped) break;
  }
  return path.reverse();
}

function genMaze(seed, level = 0) {
  const sx = 1, sy = MAZE_ROWS - 2; // (1, 13)
  let best = null;

  for (let attempt = 0; attempt < 16; attempt++) {
    const r = mulberry32((seed + attempt * 104729) >>> 0);
    const grid = Array.from({ length: MAZE_ROWS }, () => Array(MAZE_COLS).fill(1));
    const stack = [[sx, sy]];
    grid[sy][sx] = 0;

    while (stack.length) {
      const [cx, cy] = stack[stack.length - 1];
      const candidates = [];
      for (const d of MAZE_DIRS) {
        const nx = cx + d.dx * 2, ny = cy + d.dy * 2;
        if (nx > 0 && nx < MAZE_COLS - 1 && ny > 0 && ny < MAZE_ROWS - 1 && grid[ny][nx] === 1) {
          candidates.push([cx + d.dx, cy + d.dy, nx, ny]);
        }
      }
      if (!candidates.length) { stack.pop(); continue; }
      const pick = candidates[Math.floor(r() * candidates.length)];
      grid[pick[1]][pick[0]] = 0;
      grid[pick[3]][pick[2]] = 0;
      stack.push([pick[2], pick[3]]);
    }

    // تحديد أبعد خلية سالكة كخط نهاية قبل إضافة الحلقات
    const dist = mazeDistances(grid, sx, sy);
    let ex = 1, ey = 1, maxD = -1;
    for (let y = 1; y < MAZE_ROWS - 1; y++) {
      for (let x = 1; x < MAZE_COLS - 1; x++) {
        if (grid[y][x] === 0 && dist[y][x] > maxD) {
          maxD = dist[y][x]; ex = x; ey = y;
        }
      }
    }

    if (!best || maxD > best.maxD) best = { grid, r, maxD, ex, ey };
    if (maxD >= 26) break;
  }

  const { grid, r, ex, ey } = best;

  // إضافة 2..4 حلقات تكتيكية لتوفير مسارات بديلة دون تقصير الطريق الأقصر عن 26 بلاطة
  const targetLoops = Math.min(4, 2 + Math.floor((Number(level) || 0) / 3));
  const loopWalls = [];
  for (let y = 1; y < MAZE_ROWS - 1; y++) {
    for (let x = 1; x < MAZE_COLS - 1; x++) {
      if (grid[y][x] !== 1) continue;
      const hOpen = grid[y][x - 1] === 0 && grid[y][x + 1] === 0 && grid[y - 1][x] === 1 && grid[y + 1][x] === 1;
      const vOpen = grid[y - 1][x] === 0 && grid[y + 1][x] === 0 && grid[y][x - 1] === 1 && grid[y][x + 1] === 1;
      if (hOpen || vOpen) loopWalls.push([x, y]);
    }
  }
  for (let i = loopWalls.length - 1; i > 0; i--) {
    const j = Math.floor(r() * (i + 1));
    [loopWalls[i], loopWalls[j]] = [loopWalls[j], loopWalls[i]];
  }
  let carvedLoops = 0;
  for (let i = 0; i < loopWalls.length && carvedLoops < targetLoops; i++) {
    const [lx, ly] = loopWalls[i];
    grid[ly][lx] = 0;
    if (mazePath(grid, sx, sy, ex, ey).length >= 26) carvedLoops++;
    else grid[ly][lx] = 1;
  }

  // الطريق الأقصر الآمن يُحسب قبل حفر الجيوب الجانبية للأقفاص
  const path = mazePath(grid, sx, sy, ex, ey);

  // حفر حتى 4 جيوب جانبية مسدودة (nooks) لوضع الأقفاص دون المساس بالطريق الرئيسي أو الحدود
  const nooks = [];
  const nookCandidates = [];
  for (let y = 1; y < MAZE_ROWS - 1; y++) {
    for (let x = 1; x < MAZE_COLS - 1; x++) {
      if (grid[y][x] !== 1) continue;
      let openNeighbors = 0, nearSpecial = false;
      for (const d of MAZE_DIRS) {
        const nx = x + d.dx, ny = y + d.dy;
        if (grid[ny][nx] === 0) openNeighbors++;
        if ((nx === sx && ny === sy) || (nx === ex && ny === ey)) nearSpecial = true;
      }
      if (openNeighbors === 1 && !nearSpecial) nookCandidates.push([x, y]);
    }
  }
  for (let i = nookCandidates.length - 1; i > 0; i--) {
    const j = Math.floor(r() * (i + 1));
    [nookCandidates[i], nookCandidates[j]] = [nookCandidates[j], nookCandidates[i]];
  }
  for (const [nx, ny] of nookCandidates) {
    if (nooks.length >= 4) break;
    let stillSingle = 0;
    for (const d of MAZE_DIRS) if (grid[ny + d.dy][nx + d.dx] === 0) stillSingle++;
    if (stillSingle === 1) {
      grid[ny][nx] = 0;
      nooks.push({ x: nx, y: ny });
    }
  }

  const distMap = mazeDistances(grid, sx, sy);
  return {
    cols: MAZE_COLS, rows: MAZE_ROWS, grid,
    start: { x: sx, y: sy }, exit: { x: ex, y: ey },
    path, nooks, distMap,
  };
}

function mazeItems(m, level = 0, seed = 1000) {
  const lv = Math.max(0, Number(level) || 0);
  const r = mulberry32((seed ^ 0x517cc1b7) >>> 0);
  const key = (x, y) => x + ',' + y;
  const used = new Set([key(m.start.x, m.start.y), key(m.exit.x, m.exit.y)]);
  const pathSet = new Set((m.path || []).map(([x, y]) => key(x, y)));

  const deg = (x, y) => MAZE_DIRS.reduce((c, d) => c + (m.grid[y + d.dy] && m.grid[y + d.dy][x + d.dx] === 0 ? 1 : 0), 0);

  // 1) الأقفاص: 1 (0..2)، 2 (3..5)، 3 (6+) مع ضمان بقاء جميع الممرات متصلة بدونها
  const wantedCages = lv < 3 ? 1 : lv < 6 ? 2 : 3;
  const deadEnds = [];
  for (let y = 1; y < m.rows - 1; y++) {
    for (let x = 1; x < m.cols - 1; x++) {
      if (m.grid[y][x] === 0 && !used.has(key(x, y)) && deg(x, y) === 1) {
        deadEnds.push({ x, y });
      }
    }
  }
  const cagePool = [...(m.nooks || [])];
  for (const de of deadEnds) {
    if (!cagePool.some((n) => n.x === de.x && n.y === de.y)) cagePool.push(de);
  }

  const cages = [];
  const blocked = new Set();
  const rescueCats = CATS.map((_, i) => i).filter((i) => i !== (save.cat || 0));
  const tryPlaceCage = (cand, minDist) => {
    if (cages.length >= wantedCages) return;
    if (used.has(key(cand.x, cand.y))) return;
    if (m.distMap[cand.y][cand.x] < minDist) return;
    const trial = new Set(blocked);
    trial.add(key(cand.x, cand.y));
    const testDist = mazeDistances(m.grid, m.start.x, m.start.y, trial);
    if (testDist[m.exit.y][m.exit.x] < 0) return; // منطقي: لا يسد الطريق للنهاية
    blocked.add(key(cand.x, cand.y));
    used.add(key(cand.x, cand.y));
    const catIdx = rescueCats.length ? rescueCats[cages.length % rescueCats.length] : 0;
    cages.push({ x: cand.x, y: cand.y, catIdx });
  };
  for (const cand of cagePool) tryPlaceCage(cand, 3);
  if (cages.length < wantedCages) {
    for (let y = 1; y < m.rows - 1 && cages.length < wantedCages; y++) {
      for (let x = 1; x < m.cols - 1 && cages.length < wantedCages; x++) {
        if (m.grid[y][x] === 0 && !pathSet.has(key(x, y))) tryPlaceCage({ x, y }, 3);
      }
    }
  }
  if (cages.length === 0) {
    for (const cand of cagePool) tryPlaceCage(cand, 2);
  }

  // خريطة المسافات القابلة للوصول قبل فتح أي قفص
  const reachDist = mazeDistances(m.grid, m.start.x, m.start.y, blocked);
  const reachable = [];
  for (let y = 1; y < m.rows - 1; y++) {
    for (let x = 1; x < m.cols - 1; x++) {
      if (m.grid[y][x] === 0 && reachDist[y][x] > 0 && !used.has(key(x, y))) {
        reachable.push({ x, y, d: reachDist[y][x], deg: deg(x, y) });
      }
    }
  }

  const shuffle = (arr) => {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(r() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  };

  // 2) المفاتيح: مفتاح لكل قفص على مسافة منطقية
  const keys = [];
  const keyCands = shuffle(reachable.filter((c) => c.d >= Math.min(6, 3 + lv)))
    .sort((a, b) => (lv >= 2 ? b.d - a.d : 0));
  const fallbackKeys = shuffle(reachable.filter((c) => c.d >= 2));
  for (const c of [...keyCands, ...fallbackKeys]) {
    if (keys.length >= cages.length) break;
    if (used.has(key(c.x, c.y))) continue;
    used.add(key(c.x, c.y));
    keys.push({ x: c.x, y: c.y });
  }

  // 3) الجبن: 10..18 قطعة موزعة على الممرات القابلة للوصول
  const cheeseCount = Math.min(10 + lv, 18);
  const cheese = [];
  const cheesePool = shuffle(reachable.filter((c) => !used.has(key(c.x, c.y))));
  for (const c of cheesePool) {
    if (cheese.length >= cheeseCount) break;
    used.add(key(c.x, c.y));
    cheese.push({ x: c.x, y: c.y });
  }

  // 4) الفئران (طرائد متحركة أو في النهايات المسدودة بقيمة +50)
  const wantedMice = lv >= 6 ? 3 : lv >= 2 ? 2 : 1;
  const mice = [];
  const miceCands = shuffle(reachable.filter((c) => !used.has(key(c.x, c.y)) && c.d >= 4))
    .sort((a, b) => a.deg - b.deg);
  for (const c of miceCands) {
    if (mice.length >= wantedMice) break;
    used.add(key(c.x, c.y));
    // نحاول إيجاد ممر قصير لحركة الفأر في المستويات الأعلى
    const patrolTiles = [[c.x, c.y]];
    if (lv >= 1) {
      for (const d of MAZE_DIRS) {
        const nx = c.x + d.dx, ny = c.y + d.dy;
        if (m.grid[ny][nx] === 0 && reachDist[ny][nx] >= 3 && !blocked.has(key(nx, ny)) && !(nx === m.exit.x && ny === m.exit.y)) {
          patrolTiles.push([nx, ny]);
          break;
        }
      }
    }
    mice.push({ x: c.x, y: c.y, patrol: patrolTiles });
  }

  // حاجز أمان حول الأقفاص والمداخل: يمنع وضع القنابل بالقرب من أي قفص أو مخرج أو نقطة بداية
  const nearAnyCage = (x, y) => cages.some((c) => Math.max(Math.abs(x - c.x), Math.abs(y - c.y)) <= 2);
  const nearStartOrExit = (x, y) =>
    (Math.abs(x - m.start.x) + Math.abs(y - m.start.y) <= 2)
    || (Math.abs(x - m.exit.x) + Math.abs(y - m.exit.y) <= 1);

  // 5) القنابل الثابتة: مقلّلة بشكل واضح لتبقى المتاهة ممتعة ومنطقية (0 في المستويين 1-2، و1..2 كحد أقصى لاحقاً)
  const wantedBombs = lv < 2 ? 0 : lv < 6 ? 1 : 2;
  const bombs = [];
  const bombBlocked = new Set(blocked);
  const bombCands = shuffle(reachable.filter((c) =>
    !used.has(key(c.x, c.y)) && !pathSet.has(key(c.x, c.y)) && !nearAnyCage(c.x, c.y) && !nearStartOrExit(c.x, c.y) && c.d >= 5));
  for (const c of bombCands) {
    if (bombs.length >= wantedBombs) break;
    const trial = new Set(bombBlocked);
    trial.add(key(c.x, c.y));
    const safeDist = mazeDistances(m.grid, m.start.x, m.start.y, trial);
    if (safeDist[m.exit.y][m.exit.x] < 0) continue;
    if (keys.some((k) => safeDist[k.y][k.x] < 0)) continue;
    if (cheese.some((ch) => safeDist[ch.y][ch.x] < 0)) continue;
    bombBlocked.add(key(c.x, c.y));
    used.add(key(c.x, c.y));
    bombs.push({ x: c.x, y: c.y });
  }

  // 6) الأبواب الدوارة عند الممرات: تبقى مفتوحة مدة أطول بكثير ليتمكن القط من العبور بسهولة
  const wantedGates = lv < 4 ? 1 : 2;
  const gates = [];
  const gateBlocked = new Set(bombBlocked);
  const gateCands = shuffle(reachable.filter((c) => !used.has(key(c.x, c.y)) && !nearAnyCage(c.x, c.y) && !nearStartOrExit(c.x, c.y) && c.d >= 4));
  for (const c of gateCands) {
    if (gates.length >= wantedGates) break;
    const hCorridor = m.grid[c.y][c.x - 1] === 1 && m.grid[c.y][c.x + 1] === 1;
    const vCorridor = m.grid[c.y - 1][c.x] === 1 && m.grid[c.y + 1][c.x] === 1;
    if (!hCorridor && !vCorridor) continue;
    const trial = new Set(gateBlocked);
    trial.add(key(c.x, c.y));
    const altDist = mazeDistances(m.grid, m.start.x, m.start.y, trial);
    if (altDist[m.exit.y][m.exit.x] < 0) continue;
    if (keys.some((k) => altDist[k.y][k.x] < 0)) continue;
    if (cheese.some((ch) => altDist[ch.y][ch.x] < 0)) continue;
    gateBlocked.add(key(c.x, c.y));
    used.add(key(c.x, c.y));
    gates.push({
      x: c.x, y: c.y,
      axis: hCorridor ? 'h' : 'v',
      openMs: Math.max(2600, 3400 - lv * 70),
      closedMs: Math.min(1150, 850 + lv * 30),
      phaseMs: (gates.length * 1100) % 3000,
    });
  }

  // 7) الحراس الحمر المتحركون عند الأبواب: يتحركون ذهاباً وإياباً بجانب الباب ويتوقفون جانباً ليفتح الطريق للقط للدخول
  const wantedPatrols = lv === 0 ? 0 : lv < 5 ? 1 : 2;
  const patrols = [];
  if (wantedPatrols > 0) {
    const doorGuards = [];
    const tileOkForGuard = (tx, ty) => {
      if (tx <= 0 || tx >= m.cols - 1 || ty <= 0 || ty >= m.rows - 1) return false;
      if (m.grid[ty][tx] !== 0) return false;
      if (blocked.has(key(tx, ty))) return false;
      if (tx === m.start.x && ty === m.start.y) return false;
      if (tx === m.exit.x && ty === m.exit.y) return false;
      if (bombs.some((b) => b.x === tx && b.y === ty)) return false;
      if (gates.some((g) => g.x === tx && g.y === ty)) return false;
      return true;
    };

    // البحث عن بلاطات أبواب/مداخل (بجوار ممر أو تقاطع) لها بلاطة انتظار مفتوحة بجانب الباب
    for (let y = 1; y < m.rows - 1; y++) {
      for (let x = 1; x < m.cols - 1; x++) {
        if (!tileOkForGuard(x, y) || reachDist[y][x] < 4 || nearStartOrExit(x, y)) continue;
        // هل هذه البلاطة تشكل مدخلاً (جداران متقابلان أو مدخل غرفة قفص/مفتاح)؟
        const isHCorridor = m.grid[y][x - 1] === 1 && m.grid[y][x + 1] === 1 && m.grid[y - 1][x] === 0 && m.grid[y + 1][x] === 0;
        const isVCorridor = m.grid[y - 1][x] === 1 && m.grid[y + 1][x] === 1 && m.grid[y][x - 1] === 0 && m.grid[y][x + 1] === 0;
        const adjSpecial = cages.some((c) => Math.abs(c.x - x) + Math.abs(c.y - y) === 1)
          || keys.some((k) => Math.abs(k.x - x) + Math.abs(k.y - y) <= 2)
          || (Math.abs(m.exit.x - x) + Math.abs(m.exit.y - y) === 2);
        if (!isHCorridor && !isVCorridor && !adjSpecial) continue;

        // إيجاد موضع تنحّي آمن ملاصق بحيث عندما ينتقل الحارس إليه يصبح الباب [x, y] مفتوحاً تماماً
        const sideOpts = [];
        for (const d of MAZE_DIRS) {
          const ax = x + d.dx, ay = y + d.dy;
          if (!tileOkForGuard(ax, ay) || nearStartOrExit(ax, ay)) continue;
          // يفضَّل أن تكون البلاطة الجانبية على طرف الغرفة وليس على أقصر طريق مباشر
          const scorePri = (adjSpecial ? 3 : 0) + (!pathSet.has(key(ax, ay)) ? 2 : 0) + (deg(ax, ay) >= 2 ? 1 : 0);
          sideOpts.push({ tiles: [[x, y], [ax, ay]], door: [x, y], aside: [ax, ay], pri: scorePri });
        }
        if (sideOpts.length) {
          sideOpts.sort((a, b) => b.pri - a.pri);
          doorGuards.push(sideOpts[0]);
        }
      }
    }

    const pickedGuards = shuffle(doorGuards).sort((a, b) => b.pri - a.pri);
    for (const gd of pickedGuards) {
      if (patrols.length >= wantedPatrols) break;
      const conflict = patrols.some((p) => p.tiles.some((t1) => gd.tiles.some((t2) => Math.abs(t1[0] - t2[0]) + Math.abs(t1[1] - t2[1]) < 3)));
      if (conflict) continue;
      patrols.push({
        tiles: gd.tiles,
        door: gd.door,
        aside: gd.aside,
        slideMs: Math.max(460, 580 - lv * 10),
        openHoldMs: Math.max(1100, 1450 - lv * 30),
        guardHoldMs: 700,
      });
    }
  }

  // 8) قدرات المتاهة الحماسية: الدرع 🛡️ متاح منذ المستوى الأول، والتربو ⚡ من المستوى 3+
  const powerups = [];
  const puCands = shuffle(reachable.filter((c) => !used.has(key(c.x, c.y)) && c.d >= 4));
  const types = lv >= 2 ? ['shield', 'turbo'] : ['shield'];
  for (const type of types) {
    const pick = puCands.find((c) => !used.has(key(c.x, c.y)));
    if (!pick) break;
    used.add(key(pick.x, pick.y));
    powerups.push({ x: pick.x, y: pick.y, type });
  }

  return { cages, keys, cheese, mice, bombs, gates, patrols, powerups, reachDist };
}

const MazeProgress = {
  ensure() {
    if (!save.maze || typeof save.maze !== 'object') {
      save.maze = { unlocked: 0, stars: [], bestScores: [], bestTimes: [] };
    }
    const mz = save.maze;
    if (typeof mz.unlocked !== 'number' || !Number.isFinite(mz.unlocked) || mz.unlocked < 0) mz.unlocked = 0;
    if (!Array.isArray(mz.stars)) mz.stars = [];
    if (!Array.isArray(mz.bestScores)) mz.bestScores = [];
    if (!Array.isArray(mz.bestTimes)) mz.bestTimes = [];
    return mz;
  },
  quota(totalCheese, level = 0) {
    const cfg = mazeLevelConfig(level);
    return Math.max(1, Math.ceil((Number(totalCheese) || 0) * cfg.quotaPct));
  },
  canExit({ rescued, totalCages, cheese, quota }) {
    return (Number(rescued) || 0) >= (Number(totalCages) || 0) && (Number(cheese) || 0) >= (Number(quota) || 0);
  },
  calcStars({ hearts, cheese, cheeseTotal, timeLeft, timeTotal, mice, miceTotal }) {
    const fullTime = Math.max(1, Number(timeTotal) || 1);
    const timePct = Math.max(0, (Number(timeLeft) || 0) / fullTime);
    const cheesePct = cheeseTotal > 0 ? cheese / cheeseTotal : 1;
    if (hearts >= 3 && cheesePct >= 0.9 && timePct >= 0.25) return 3;
    if (hearts >= 2 && (cheesePct >= 1 || timePct >= 0.20 || (miceTotal > 0 && mice >= miceTotal))) return 2;
    return 1;
  },
  record(level, { stars, score, timeLeft }) {
    const mz = this.ensure();
    const lv = Math.max(0, Number(level) || 0);
    while (mz.stars.length <= lv) mz.stars.push(0);
    while (mz.bestScores.length <= lv) mz.bestScores.push(0);
    while (mz.bestTimes.length <= lv) mz.bestTimes.push(0);
    mz.stars[lv] = Math.max(mz.stars[lv] || 0, stars || 0);
    mz.bestScores[lv] = Math.max(mz.bestScores[lv] || 0, score || 0);
    if (stars > 0) {
      mz.bestTimes[lv] = Math.max(mz.bestTimes[lv] || 0, Math.ceil(timeLeft || 0));
      if (mz.unlocked < lv + 1) mz.unlocked = lv + 1;
    }
    persist();
  },
};

function ensureMazeTextures(scene, theme) {
  if (!scene.textures || typeof scene.textures.createCanvas !== 'function') return;
  const pal = MAZE_WORLD_PALETTES[theme] || MAZE_WORLD_PALETTES.night;

  // بلاطة الجدار بتفاصيل حجرية مميزة للعالم
  const wallKey = 'maze_wall_' + theme;
  if (!scene.textures.exists(wallKey)) {
    const tex = scene.textures.createCanvas(wallKey, 80, 80), c = tex.getContext();
    c.fillStyle = pal.wall; c.fillRect(0, 0, 80, 80);
    c.fillStyle = pal.wallTop; c.fillRect(3, 3, 74, 62);
    c.fillStyle = pal.trim; c.fillRect(6, 6, 68, 8);
    c.strokeStyle = 'rgba(0,0,0,0.35)'; c.lineWidth = 3;
    c.strokeRect(2, 2, 76, 76);
    c.beginPath();
    c.moveTo(4, 34); c.lineTo(76, 34);
    c.moveTo(40, 4); c.lineTo(40, 34);
    c.moveTo(22, 34); c.lineTo(22, 66);
    c.moveTo(58, 34); c.lineTo(58, 66);
    c.stroke();
    c.fillStyle = 'rgba(255,255,255,0.14)'; c.fillRect(8, 16, 22, 6); c.fillRect(46, 42, 20, 6);
    tex.refresh();
  }

  // بلاطة الأرضية بتباين واضح لتمييز القط والعناصر
  const floorKey = 'maze_floor_' + theme;
  if (!scene.textures.exists(floorKey)) {
    const tex = scene.textures.createCanvas(floorKey, 80, 80), c = tex.getContext();
    c.fillStyle = pal.floorA; c.fillRect(0, 0, 80, 80);
    c.fillStyle = pal.floorB; c.fillRect(4, 4, 34, 34); c.fillRect(42, 42, 34, 34);
    c.fillStyle = pal.pebble;
    c.beginPath(); c.arc(20, 58, 4, 0, Math.PI * 2); c.arc(58, 22, 3.5, 0, Math.PI * 2); c.fill();
    c.strokeStyle = 'rgba(255,255,255,0.05)'; c.lineWidth = 2; c.strokeRect(1, 1, 78, 78);
    tex.refresh();
  }

  // علم خط النهاية (مفتوح ومغلق)
  if (!scene.textures.exists('maze_exit')) {
    const tex = scene.textures.createCanvas('maze_exit', 80, 80), c = tex.getContext();
    c.fillStyle = 'rgba(46,204,113,0.28)'; c.beginPath(); c.arc(40, 44, 30, 0, Math.PI * 2); c.fill();
    c.fillStyle = '#fff3b0'; c.fillRect(18, 12, 7, 58);
    c.fillStyle = '#2ecc71'; c.fillRect(25, 14, 42, 28);
    c.fillStyle = '#ffffff';
    for (let ry = 0; ry < 3; ry++) for (let rx = 0; rx < 4; rx++) {
      if ((rx + ry) % 2 === 0) c.fillRect(25 + rx * 10.5, 14 + ry * 9.3, 10.5, 9.3);
    }
    c.fillStyle = '#ffc83d'; c.beginPath(); c.arc(21.5, 11, 5, 0, Math.PI * 2); c.fill();
    tex.refresh();
  }

  // مفتاح ذهبي برأس قط
  if (!scene.textures.exists('maze_key')) {
    const tex = scene.textures.createCanvas('maze_key', 80, 80), c = tex.getContext();
    c.fillStyle = '#5a3a00'; c.beginPath(); c.arc(28, 40, 17, 0, Math.PI * 2); c.fill();
    c.fillStyle = '#ffc83d'; c.beginPath(); c.arc(28, 40, 13, 0, Math.PI * 2); c.fill();
    // أذنا القط على مقبض المفتاح
    c.beginPath(); c.moveTo(16, 30); c.lineTo(14, 17); c.lineTo(25, 25); c.fill();
    c.beginPath(); c.moveTo(40, 30); c.lineTo(42, 17); c.lineTo(31, 25); c.fill();
    c.fillStyle = '#2d1c00'; c.beginPath(); c.arc(28, 40, 5, 0, Math.PI * 2); c.fill();
    // ساق المفتاح وأسنانه
    c.fillStyle = '#ffc83d'; c.fillRect(39, 36, 28, 8); c.fillRect(55, 44, 5, 10); c.fillRect(62, 44, 5, 7);
    c.fillStyle = '#fff5b8'; c.fillRect(41, 37, 22, 2.5);
    tex.refresh();
  }

  // قفص حديدي شفاف يُظهر القطة بوضوح داخله مع قفل ذهبي أسفله
  if (!scene.textures.exists('maze_cage')) {
    const tex = scene.textures.createCanvas('maze_cage', 80, 80), c = tex.getContext();
    c.strokeStyle = '#94a3b8'; c.lineWidth = 4;
    c.strokeRect(8, 8, 64, 64);
    for (const bx of [22, 40, 58]) {
      c.fillStyle = '#cbd5e1'; c.fillRect(bx - 1.5, 8, 3, 64);
    }
    c.fillStyle = '#64748b'; c.fillRect(6, 6, 68, 7); c.fillRect(6, 67, 68, 7);
    // قفل ذهبي صغير في الزاوية السفلية اليمنى حتى لا يحجب وجه القط
    c.fillStyle = '#ffc83d'; c.fillRect(52, 50, 18, 16);
    c.strokeStyle = '#5a3a00'; c.lineWidth = 2.5; c.strokeRect(52, 50, 18, 16);
    c.beginPath(); c.arc(61, 50, 5, Math.PI, 0); c.stroke();
    tex.refresh();
  }

  // شرارة دورية حمراء خطرة
  if (!scene.textures.exists('maze_patrol')) {
    const tex = scene.textures.createCanvas('maze_patrol', 80, 80), c = tex.getContext();
    const rg = c.createRadialGradient(40, 40, 4, 40, 40, 34);
    rg.addColorStop(0, '#fff3b0'); rg.addColorStop(0.38, '#ff3b30'); rg.addColorStop(1, 'rgba(255,59,48,0)');
    c.fillStyle = rg; c.fillRect(0, 0, 80, 80);
    c.fillStyle = '#2b0d14'; c.beginPath(); c.arc(40, 40, 17, 0, Math.PI * 2); c.fill();
    c.strokeStyle = '#ff6b6b'; c.lineWidth = 3.5; c.stroke();
    // عيون غاضبة
    c.fillStyle = '#ffdf6d';
    c.beginPath(); c.moveTo(31, 35); c.lineTo(38, 38); c.lineTo(32, 42); c.fill();
    c.beginPath(); c.moveTo(49, 35); c.lineTo(42, 38); c.lineTo(48, 42); c.fill();
    tex.refresh();
  }

  // قدرة التربو داخل المتاهة
  if (!scene.textures.exists('maze_turbo')) {
    const tex = scene.textures.createCanvas('maze_turbo', 80, 80), c = tex.getContext();
    const rg = c.createRadialGradient(40, 40, 6, 40, 40, 34);
    rg.addColorStop(0, 'rgba(255,200,61,0.85)'); rg.addColorStop(1, 'rgba(255,200,61,0)');
    c.fillStyle = rg; c.fillRect(0, 0, 80, 80);
    c.fillStyle = '#1d1850'; c.beginPath(); c.arc(40, 40, 23, 0, Math.PI * 2); c.fill();
    c.strokeStyle = '#ffc83d'; c.lineWidth = 3.5; c.stroke();
    c.fillStyle = '#ffe885';
    c.beginPath(); c.moveTo(44, 21); c.lineTo(29, 43); c.lineTo(40, 43); c.lineTo(36, 59); c.lineTo(52, 37); c.lineTo(41, 37); c.closePath(); c.fill();
    tex.refresh();
  }

  // جدار دوار متحرك (بوابة دوارة)
  if (!scene.textures.exists('maze_gate')) {
    const tex = scene.textures.createCanvas('maze_gate', 80, 80), c = tex.getContext();
    c.fillStyle = '#312a5e'; c.fillRect(6, 31, 68, 18);
    c.fillStyle = '#ffc83d';
    for (let sx = 10; sx < 66; sx += 16) c.fillRect(sx, 33, 8, 14);
    c.strokeStyle = '#fff3b0'; c.lineWidth = 2.5; c.strokeRect(6, 31, 68, 18);
    c.fillStyle = '#e5484d'; c.beginPath(); c.arc(40, 40, 11, 0, Math.PI * 2); c.fill();
    c.strokeStyle = '#ffffff'; c.lineWidth = 2.5; c.stroke();
    tex.refresh();
  }
}

class MazeScene extends Phaser.Scene {
  constructor() { super('Maze'); }
  init(d) {
    const mz = MazeProgress.ensure();
    this.lvl = d && d.level !== undefined ? Math.max(0, Number(d.level) || 0) : Math.min(mz.unlocked, 9);
  }

  tileToPx(tx, ty) {
    return {
      x: tx * MAZE_TILE + MAZE_TILE / 2,
      y: MAZE_OFFSET_Y + ty * MAZE_TILE + MAZE_TILE / 2,
    };
  }

  create() {
    enter(this);
    Daily.ensure();
    this.cfg = mazeLevelConfig(this.lvl);
    Sound.startMusic(this.cfg.worldIdx, 'bgm_maze');
    if (typeof ensurePowerupTextures === 'function') ensurePowerupTextures(this);
    ensureMazeTextures(this, this.cfg.theme);

    this.m = genMaze(this.cfg.seed, this.lvl);
    this.plan = mazeItems(this.m, this.lvl, this.cfg.seed);
    this.quota = MazeProgress.quota(this.plan.cheese.length, this.lvl);

    Object.assign(this, {
      gx: this.m.start.x, gy: this.m.start.y,
      moving: false, moveDir: null, queuedDir: null,
      hearts: 3, score: 0, steps: 0,
      heldKeys: 0, rescued: 0,
      cheeseGot: 0, cheeseTotal: this.plan.cheese.length,
      miceGot: 0, miceTotal: this.plan.mice.length,
      combo: 0, comboTimer: 0, maxCombo: 0,
      shieldT: 0, turboT: 0, invulnT: 0,
      timeLeft: this.cfg.time, totalTime: this.cfg.time,
      exitUnlocked: false, over: false, paused: false,
      lastTickSec: -1, elapsedMs: 0,
      _vibUntil: 0, _vibPrio: 0,
    });

    this.drawBoard();
    this.spawnActors();
    this.createHud();
    this.bindInput();

    this._vis = () => { if (document.hidden && !this._settingsModal) this.openMazePause(); };
    this._blur = () => { if (!this._settingsModal) this.openMazePause(); };
    if (typeof document !== 'undefined' && document.addEventListener) {
      document.addEventListener('visibilitychange', this._vis);
    }
    if (typeof window !== 'undefined' && window.addEventListener) {
      window.addEventListener('blur', this._blur);
    }
    this._unregMazeAdPause = (typeof CG !== 'undefined' && CG.registerPauseHandler) ? CG.registerPauseHandler(() => this.openMazePause()) : null;
    this.events.once('shutdown', () => {
      if (typeof document !== 'undefined' && document.removeEventListener && this._vis) {
        document.removeEventListener('visibilitychange', this._vis);
      }
      if (typeof window !== 'undefined' && window.removeEventListener && this._blur) {
        window.removeEventListener('blur', this._blur);
      }
      if (this._unregMazeAdPause) { this._unregMazeAdPause(); this._unregMazeAdPause = null; }
      if (this.tweens && this.tweens.resumeAll) this.tweens.resumeAll();
      Sound.stopMusic();
      if (typeof CG !== 'undefined') CG.gameplayStop();
      try { navigator.vibrate && navigator.vibrate(0); } catch (e) {}
    });
    if (typeof CG !== 'undefined') CG.gameplayStart();
  }

  drawBoard() {
    const th = THEMES[this.cfg.theme] || THEMES.night;
    const bgCol = Phaser.Display.Color.HexStringToColor(th.sky[0]).color;
    this.add.rectangle(0, 0, W, H, bgCol).setOrigin(0);

    const wallKey = 'maze_wall_' + this.cfg.theme;
    const floorKey = 'maze_floor_' + this.cfg.theme;

    for (let y = 0; y < MAZE_ROWS; y++) {
      for (let x = 0; x < MAZE_COLS; x++) {
        const { x: px, y: py } = this.tileToPx(x, y);
        const isWall = this.m.grid[y][x] === 1;
        this.add.image(px, py, isWall ? wallKey : floorKey).setDepth(1);
      }
    }

    // بوابة المخرج
    const ep = this.tileToPx(this.m.exit.x, this.m.exit.y);
    this.exitGlow = this.add.image(ep.x, ep.y, 'glow').setDepth(2).setScale(2.1).setBlendMode('ADD').setTint(0xff5a5f).setAlpha(0.5);
    this.exitSprite = this.add.image(ep.x, ep.y, 'maze_exit').setDepth(4).setTint(0x9a96b8).setAlpha(0.75);
    this.exitLockIcon = txt(this, ep.x, ep.y + 18, '🔒', 24, '#ffffff', { strokeColor: '#1b1838', strokeW: 5 }).setDepth(5);
  }

  spawnActors() {
    const keyMap = new Map();
    const tKey = (x, y) => x + ',' + y;

    // 1) الجبن
    this.cheeseSprites = new Map();
    for (const c of this.plan.cheese) {
      const p = this.tileToPx(c.x, c.y);
      const img = this.add.image(p.x, p.y, 'cheese').setDepth(6).setScale(44 / 128);
      this.tweens.add({ targets: img, y: p.y - 4, duration: 900, yoyo: true, repeat: -1, ease: 'Sine.InOut', delay: (c.x + c.y) * 40 });
      this.cheeseSprites.set(tKey(c.x, c.y), img);
    }

    // 2) المفاتيح الذهبية
    this.keySprites = new Map();
    for (const k of this.plan.keys) {
      const p = this.tileToPx(k.x, k.y);
      const halo = this.add.image(p.x, p.y, 'glow').setDepth(5).setScale(1.6).setBlendMode('ADD').setTint(0xffc83d).setAlpha(0.55);
      const img = this.add.image(p.x, p.y, 'maze_key').setDepth(7).setScale(0.78);
      this.tweens.add({ targets: [img, halo], y: p.y - 5, duration: 800, yoyo: true, repeat: -1, ease: 'Sine.InOut' });
      this.keySprites.set(tKey(k.x, k.y), { img, halo });
    }

    // 3) الأقفاص + القطط المحبوسة بوضع _scared واضحة خلف القضبان
    this.cageMap = new Map();
    for (const cg of this.plan.cages) {
      const p = this.tileToPx(cg.x, cg.y);
      const glow = this.add.image(p.x, p.y, 'glow').setDepth(4).setScale(1.9).setBlendMode('ADD').setTint(0xffd24a).setAlpha(0.5);
      const catDef = CATS[cg.catIdx] || CATS[1];
      const catImg = this.add.image(p.x - 4, p.y + 4, catDef.key + '_scared').setDepth(6).setScale(68 / 401);
      const cageImg = this.add.image(p.x, p.y, 'maze_cage').setDepth(7).setScale(0.96);
      this.tweens.add({ targets: catImg, x: p.x - 1, duration: 350, yoyo: true, repeat: -1 });
      this.cageMap.set(tKey(cg.x, cg.y), { ...cg, glow, catImg, cageImg, opened: false });
      keyMap.set(tKey(cg.x, cg.y), true);
    }
    this.blockedCages = keyMap;

    // 4) القنابل الثابتة
    this.bombMap = new Map();
    for (const b of this.plan.bombs) {
      const p = this.tileToPx(b.x, b.y);
      const glow = this.add.image(p.x, p.y, 'glow').setDepth(5).setScale(1.4).setBlendMode('ADD').setTint(0xff4d4d).setAlpha(0.32);
      const img = this.add.image(p.x, p.y, 'bomb').setDepth(7).setScale(52 / 128);
      this.tweens.add({ targets: img, angle: { from: -6, to: 6 }, duration: 550, yoyo: true, repeat: -1 });
      this.bombMap.set(tKey(b.x, b.y), { ...b, img, glow });
    }

    // 5) الفئران (طرائد متحركة بين بلاطات)
    this.miceActors = this.plan.mice.map((ms) => {
      const p = this.tileToPx(ms.x, ms.y);
      const img = this.add.image(p.x, p.y, 'mouse').setDepth(8).setScale(58 / 128);
      return {
        x: ms.x, y: ms.y, patrol: ms.patrol, pIdx: 0, dir: 1, timer: 0, caught: false, img,
      };
    });

    // 6) الحراس الحمر عند الأبواب: مسار واضح على الأرضية + مؤشر لون الباب (أخضر عندما يتنحى الحارس ليسمح بالدخول)
    this.patrolActors = this.plan.patrols.map((pt, idx) => {
      const doorTile = pt.door || pt.tiles[0];
      const asideTile = pt.aside || pt.tiles[pt.tiles.length - 1];
      const dp = this.tileToPx(doorTile[0], doorTile[1]);
      const ap = this.tileToPx(asideTile[0], asideTile[1]);
      const track = this.add.graphics().setDepth(3);
      track.lineStyle(10, 0xff5a5f, 0.24);
      track.lineBetween(dp.x, dp.y, ap.x, ap.y);
      const doorRing = this.add.circle(dp.x, dp.y, 26, 0x2ecc71, 0.16).setDepth(4).setStrokeStyle(3, 0x2ecc71, 0.85);
      // نبدأ بالحارس متوقفاً في الموضع الجانبي بحيث يكون الباب مفتوحاً عند الاقتراب
      const startOpen = idx % 2 === 0;
      const startTile = startOpen ? asideTile : doorTile;
      const sp = this.tileToPx(startTile[0], startTile[1]);
      const img = this.add.image(sp.x, sp.y, 'maze_patrol').setDepth(9).setScale(0.78);
      return {
        tiles: pt.tiles, door: doorTile, aside: asideTile,
        slideMs: pt.slideMs || 520,
        openHoldMs: pt.openHoldMs || 1300,
        guardHoldMs: pt.guardHoldMs || 700,
        atAside: startOpen,
        sliding: false,
        timer: 0,
        gx: startTile[0], gy: startTile[1],
        doorRing, img,
      };
    });

    // 7) الجدران الدوارة المتحركة
    this.gateMap = new Map();
    this.gateActors = (this.plan.gates || []).map((gt) => {
      const p = this.tileToPx(gt.x, gt.y);
      const baseAngle = gt.axis === 'h' ? 90 : 0;
      const openAngle = baseAngle;
      const closedAngle = gt.axis === 'h' ? 0 : 90;
      const ring = this.add.circle(p.x, p.y, 16, 0x2ecc71, 0.25).setDepth(5).setStrokeStyle(3, 0x2ecc71, 0.9);
      const img = this.add.image(p.x, p.y, 'maze_gate').setDepth(8).setAngle(openAngle).setAlpha(0.75);
      const actor = {
        ...gt, openAngle, closedAngle, closed: false, warning: false,
        timer: gt.phaseMs || 0, img, ring,
      };
      this.gateMap.set(tKey(gt.x, gt.y), actor);
      return actor;
    });

    // 8) قدرات المتاهة (درع / تربو)
    this.powerMap = new Map();
    for (const pu of (this.plan.powerups || [])) {
      const p = this.tileToPx(pu.x, pu.y);
      const tex = pu.type === 'shield' ? (this.textures.exists('pu_shield') ? 'pu_shield' : 'star') : 'maze_turbo';
      const glow = this.add.image(p.x, p.y, 'glow').setDepth(5).setScale(1.6).setBlendMode('ADD').setTint(pu.type === 'shield' ? 0x38bdf8 : 0xffc83d).setAlpha(0.55);
      const img = this.add.image(p.x, p.y, tex).setDepth(7).setScale(pu.type === 'shield' ? 0.56 : 0.72);
      if (tex === 'star') img.setTint(0x38bdf8);
      this.tweens.add({ targets: [img, glow], scale: '+=0.08', duration: 650, yoyo: true, repeat: -1 });
      this.powerMap.set(tKey(pu.x, pu.y), { ...pu, img, glow });
    }

    // 9) جسيمات التأثيرات
    this._fxStars = this.add.particles(0, 0, 'star', {
      speed: { min: 90, max: 280 }, lifespan: { min: 380, max: 650 },
      scale: { start: 0.36, end: 0 }, alpha: { start: 1, end: 0 },
      tint: [0xffc83d, 0xfff3b0, 0xffffff], emitting: false, blendMode: 'ADD',
    }).setDepth(35);
    this._fxBlast = this.add.particles(0, 0, 'glow', {
      speed: { min: 140, max: 420 }, lifespan: { min: 260, max: 520 },
      scale: { start: 0.65, end: 0 }, alpha: { start: 1, end: 0 },
      tint: [0xff3b30, 0xff8a2b, 0xffd24a], emitting: false, blendMode: 'ADD',
    }).setDepth(36);

    // 10) اللاعب (مع تطبيق المظهر والهالة المختارة + هالة تباين للقطط الداكنة)
    const activeCat = CATS[save.cat] || CATS[0];
    const eqSkin = (typeof ShopSkins !== 'undefined' && ShopSkins.activeSkinDef()) || (typeof Achievements !== 'undefined' ? Achievements.activeSkinDef() : null);
    this.skinTint = eqSkin && eqSkin.tint ? eqSkin.tint : null;
    const sp = this.tileToPx(this.gx, this.gy);
    this.playerGlow = this.add.image(sp.x, sp.y, 'glow').setDepth(10).setScale(1.85)
      .setBlendMode('ADD').setTint((eqSkin && eqSkin.aura) || activeCat.aura || 0xffffff).setAlpha(0.45);
    this.playerShieldRing = this.add.circle(sp.x, sp.y, 38, 0x38bdf8, 0.16)
      .setDepth(12).setStrokeStyle(4, 0x7be8ff, 0.95).setVisible(false);
    this.player = this.add.image(sp.x, sp.y, activeCat.key + '_idle').setDepth(11).setScale(72 / 401);
    if (this.skinTint) this.player.setTint(this.skinTint);
  }

  createHud() {
    this.add.rectangle(0, 0, W, 80, 0x100c2b, 0.92).setOrigin(0).setDepth(40);
    this.add.rectangle(0, 78, W, 3, 0xffc83d, 0.6).setOrigin(0).setDepth(40);

    // زر الرجوع
    const backBtn = this.add.container(44, 40).setDepth(42).setSize(68, 60).setInteractive({ useHandCursor: true });
    backBtn.add([this.add.circle(0, 0, 26, 0x2d2566, 0.95).setStrokeStyle(3, 0xffffff, 0.75)]);
    if (this.textures.exists('ui_arrow_left')) backBtn.add(this.add.image(-1, 0, 'ui_arrow_left').setScale(32 / 96));
    else backBtn.add(txt(this, 0, -1, '◀', 24, '#ffffff', { stroke: false }));
    backBtn.on('pointerup', () => { Sound.play('click'); this.openMazePause(); });

    // القلوب
    this.heartImgs = [0, 1, 2].map((i) => this.add.image(110 + i * 40, 40, this.textures.exists('ui_heart') ? 'ui_heart' : 'heart')
      .setDepth(42).setScale(this.textures.exists('ui_heart') ? 0.30 : 0.56));

    // العداد: مفاتيح، إنقاذ قطط، جبن، وقت، ونقاط
    this.hudKeys = txt(this, 248, 26, '🔑 0', 22, '#ffc83d', { stroke: false }).setDepth(42);
    this.hudCats = txt(this, 248, 54, '😺 0/' + this.plan.cages.length, 22, '#9df5a8', { stroke: false }).setDepth(42);
    this.hudCheese = txt(this, 396, 26, '🧀 0/' + this.quota + ' (' + this.cheeseTotal + ')', 22, '#ffe9a8', { stroke: false }).setDepth(42);
    this.hudScore = txt(this, 396, 54, '★ 0', 22, '#7be8ff', { stroke: false }).setDepth(42);

    this.hudTimer = txt(this, W - 118, 40, '⏱ ' + Math.ceil(this.timeLeft) + 's', 30, '#ffffff', { strokeColor: '#0f0d22', strokeW: 6 }).setDepth(42);

    // زر الإعدادات السريع في الزاوية
    const setBtn = this.add.container(W - 36, 40).setDepth(42).setSize(54, 54).setInteractive({ useHandCursor: true });
    setBtn.add([this.add.circle(0, 0, 23, 0x2d2566, 0.95).setStrokeStyle(3, 0xffc83d, 0.9)]);
    if (this.textures.exists('ui_settings')) setBtn.add(this.add.image(0, 0, 'ui_settings').setScale(30 / 96));
    else setBtn.add(txt(this, 0, 0, '⚙', 22, '#ffffff', { stroke: false }));
    setBtn.on('pointerup', () => { Sound.play('click'); openSettingsModal(this, { musicLevel: this.cfg.worldIdx }); });

    // شريط تلميح أسفل الشاشة بدون مسميات عوالم أو بلاد
    this.add.rectangle(0, H - 64, W, 64, 0x100c2b, 0.88).setOrigin(0).setDepth(40);
    this.hudStatus = txt(this, W / 2, H - 32,
      (this.lvl + 1) + '   ·   ' + t('mazeSwipeHint'),
      21, '#dcd6ff', { stroke: false, wrap: W - 40 }).setDepth(42);

    this.comboTxt = txt(this, W / 2, 110, '', 32, '#ff9a3d', { strokeColor: '#2a1a4a', strokeW: 8 }).setDepth(44).setAlpha(0);
    this.refreshHud();
  }

  refreshHud() {
    this.hudKeys.setText('🔑 ' + this.heldKeys);
    this.hudCats.setText('😺 ' + this.rescued + '/' + this.plan.cages.length);
    this.hudCats.setColor(this.rescued >= this.plan.cages.length ? '#7ff594' : '#ffcf70');
    this.hudCheese.setText('🧀 ' + this.cheeseGot + '/' + this.quota + ' (' + this.cheeseTotal + ')');
    this.hudCheese.setColor(this.cheeseGot >= this.quota ? '#7ff594' : '#ffe9a8');
    this.hudScore.setText('★ ' + this.score);

    const ready = MazeProgress.canExit({
      rescued: this.rescued, totalCages: this.plan.cages.length,
      cheese: this.cheeseGot, quota: this.quota,
    });
    if (ready && !this.exitUnlocked) {
      this.exitUnlocked = true;
      Sound.play('portal');
      this.exitSprite.clearTint().setAlpha(1);
      this.exitGlow.setTint(0x2ecc71).setAlpha(0.85);
      this.exitLockIcon.setText('🏁');
      this.tweens.add({ targets: this.exitSprite, scale: 1.15, duration: 420, yoyo: true, repeat: -1 });
      this.popToast(W / 2, 155, t('mazeExitOpen'), '#7ff594', 32);
    }
  }

  bindInput() {
    let downX = 0, downY = 0, activeSwipe = false;
    this.input.on('pointerdown', (p) => {
      if (p.y < 84 || this._settingsModal || this.paused || this.over) return;
      Sound.init();
      downX = p.x; downY = p.y; activeSwipe = true;
    });
    this.input.on('pointermove', (p) => {
      if (!activeSwipe || !p.isDown || this._settingsModal || this.paused || this.over) return;
      const dx = p.x - downX, dy = p.y - downY;
      if (Math.hypot(dx, dy) >= 34) {
        const dir = Math.abs(dx) > Math.abs(dy) ? (dx > 0 ? 'right' : 'left') : (dy > 0 ? 'down' : 'up');
        this.requestDir(dir);
        downX = p.x; downY = p.y;
      }
    });
    this.input.on('pointerup', (p) => {
      if (activeSwipe && !this._settingsModal && !this.paused && !this.over) {
        const dx = p.x - downX, dy = p.y - downY;
        if (Math.hypot(dx, dy) < 24 && p.y >= MAZE_OFFSET_Y && p.y < H - 64) {
          // نقر مباشر على بلاطة في نفس الصف أو العمود
          const tx = Math.floor(p.x / MAZE_TILE);
          const ty = Math.floor((p.y - MAZE_OFFSET_Y) / MAZE_TILE);
          if (tx === this.gx && ty !== this.gy) this.requestDir(ty < this.gy ? 'up' : 'down');
          else if (ty === this.gy && tx !== this.gx) this.requestDir(tx < this.gx ? 'left' : 'right');
        }
      }
      activeSwipe = false;
    });

    const mapKeys = {
      UP: 'up', W: 'up', RIGHT: 'right', D: 'right',
      DOWN: 'down', S: 'down', LEFT: 'left', A: 'left',
    };
    Object.entries(mapKeys).forEach(([k, d]) => {
      this.input.keyboard.on('keydown-' + k, () => {
        if (!this._settingsModal && !this.paused && !this.over) { Sound.init(); this._lastMazeKeyAt = Date.now(); this.requestDir(d); }
      });
    });
    const codeMap = {
      ArrowUp: 'up', KeyW: 'up', w: 'up', W: 'up',
      ArrowRight: 'right', KeyD: 'right', d: 'right', D: 'right',
      ArrowDown: 'down', KeyS: 'down', s: 'down', S: 'down',
      ArrowLeft: 'left', KeyA: 'left', a: 'left', A: 'left',
    };
    this._winMazeKey = (ev) => {
      if (this._settingsModal || this.paused || this.over) return;
      const dir = codeMap[ev.code] || codeMap[ev.key];
      if (dir) {
        const now = Date.now();
        if (this._lastMazeKeyAt && now - this._lastMazeKeyAt < 35) return;
        this._lastMazeKeyAt = now;
        Sound.init();
        this.requestDir(dir);
      } else if (ev.key === 'Escape' || ev.key === 'p' || ev.key === 'P') {
        this.openMazePause();
      }
    };
    if (typeof window !== 'undefined' && window.addEventListener) {
      window.addEventListener('keydown', this._winMazeKey);
      this.events.once('shutdown', () => window.removeEventListener('keydown', this._winMazeKey));
    }
    this.input.keyboard.on('keydown-ESC', () => {
      if (!this._settingsModal && !this.over && !this.paused) this.openMazePause();
    });
    this.input.keyboard.on('keydown-P', () => {
      if (!this._settingsModal && !this.over && !this.paused) this.openMazePause();
    });
  }

  dirObj(name) { return MAZE_DIRS.find((d) => d.name === name); }
  isOpenTile(x, y) {
    if (x < 0 || x >= MAZE_COLS || y < 0 || y >= MAZE_ROWS) return false;
    if (this.m.grid[y][x] === 1 || this.blockedCages.has(x + ',' + y)) return false;
    const gate = this.gateMap && this.gateMap.get(x + ',' + y);
    return !(gate && gate.closed);
  }

  requestDir(name) {
    if (!name || this.over || this.paused) return;
    if (!this.moving) {
      this.tryStartMove(name);
    } else {
      this.queuedDir = name;
    }
  }

  tryStartMove(name) {
    const d = this.dirObj(name);
    if (!d) return false;
    const nx = this.gx + d.dx, ny = this.gy + d.dy;
    const nKey = nx + ',' + ny;

    // إذا كان هناك قفص مغلق
    if (this.blockedCages.has(nKey)) {
      if (this.heldKeys > 0) {
        this.unlockCage(nKey);
      } else {
        Sound.play('lose');
        const cage = this.cageMap.get(nKey);
        if (cage) this.tweens.add({ targets: cage.cageImg, x: cage.cageImg.x + 6, duration: 55, yoyo: true, repeat: 3 });
        this.popToast(this.player.x, this.player.y - 45, t('mazeNeedKey'), '#ffc83d', 26);
      }
      return false;
    }

    if (!this.isOpenTile(nx, ny)) return false;

    this.moving = true;
    this.moveDir = name;
    this.steps++;
    if (d.dx !== 0) this.player.setFlipX(d.dx < 0);

    const catDef = CATS[save.cat] || CATS[0];
    this.walkStep = (this.walkStep || 0) + 1;
    const moveTex = typeof catMoveFrame === 'function' ? catMoveFrame(catDef.key, this.walkStep, this) : catDef.key + '_run';
    this.player.setTexture(moveTex);
    const dest = this.tileToPx(nx, ny);
    const dur = this.turboT > 0 ? 86 : 132;
    const baseScale = 72 / 401;

    this.tweens.add({
      targets: this.player,
      x: dest.x, y: dest.y,
      duration: dur,
      ease: 'Linear',
      onUpdate: (tw) => {
        if (!this.player || this.over) return;
        const p = tw.progress;
        const stride = Math.sin(p * Math.PI);
        this.player.setScale(baseScale * (1 + stride * 0.05), baseScale * (1 - stride * 0.04));
        if (typeof CAT_WALK_FRAMES !== 'undefined' && Array.isArray(CAT_WALK_FRAMES[catDef.key]) && CAT_WALK_FRAMES[catDef.key].length > 1) {
          const frameTex = catMoveFrame(catDef.key, this.walkStep + p * 2, this);
          if (this.player.texture.key !== frameTex) this.player.setTexture(frameTex);
        }
      },
      onComplete: () => {
        if (this.player) this.player.setScale(baseScale);
        this.gx = nx; this.gy = ny;
        this.moving = false;
        this.onArriveTile();
        if (this.over || this.paused) return;

        // تنفيذ الاتجاه المحجوز إذا كان سالكاً
        if (this.queuedDir) {
          const q = this.queuedDir;
          this.queuedDir = null;
          if (this.tryStartMove(q)) return;
        }

        // المتابعة التلقائية داخل الممر أو المنعطف الوحيد، والتوقف عند التقاطع أو النهاية المسدودة
        const forwardOpts = MAZE_DIRS.filter((opt) => {
          if (opt.dx === -d.dx && opt.dy === -d.dy) return false;
          return this.isOpenTile(this.gx + opt.dx, this.gy + opt.dy);
        });
        if (forwardOpts.length === 1) {
          this.tryStartMove(forwardOpts[0].name);
        } else {
          this.player.setTexture(catDef.key + '_idle');
        }
      },
    });
    return true;
  }

  unlockCage(cKey) {
    const cage = this.cageMap.get(cKey);
    if (!cage || cage.opened) return;
    cage.opened = true;
    this.heldKeys--;
    this.rescued++;
    this.blockedCages.delete(cKey);

    Sound.play('unlock');
    try { navigator.vibrate && navigator.vibrate([25, 30, 45]); } catch (e) {}
    const catDef = CATS[cage.catIdx] || CATS[1];
    cage.catImg.setTexture(catDef.key + '_cheer').setDepth(14);
    this.tweens.killTweensOf(cage.catImg);
    this.tweens.add({ targets: cage.cageImg, scale: 1.35, alpha: 0, angle: 16, duration: 360, onComplete: () => cage.cageImg.destroy() });
    this.tweens.add({ targets: cage.glow, scale: 2.8, alpha: 0, duration: 480, onComplete: () => cage.glow.destroy() });
    this.tweens.add({
      targets: cage.catImg, y: cage.catImg.y - 32, scale: cage.catImg.scale * 1.25, alpha: 0,
      duration: 620, delay: 160, ease: 'Back.In', onComplete: () => cage.catImg.destroy(),
    });
    if (this._fxStars) this._fxStars.explode(16, cage.catImg.x, cage.catImg.y);
    this.addMazeScore(100);
    this.popToast(cage.catImg.x, cage.catImg.y - 34, t('mazeRescued'), '#9df5a8', 28);
    this.refreshHud();
  }

  addMazeScore(base) {
    this.combo++;
    this.comboTimer = 3.2;
    this.maxCombo = Math.max(this.maxCombo, this.combo);
    const mult = this.combo >= 8 ? 3 : this.combo >= 4 ? 2 : 1;
    const gain = base * mult;
    this.score += gain;
    if (this.combo >= 3) {
      this.comboTxt.setText('🔥 ' + this.combo + (mult > 1 ? '  x' + mult : '')).setAlpha(1);
      this.tweens.add({ targets: this.comboTxt, scale: { from: 1.28, to: 1 }, duration: 150 });
    }
    this.hudScore.setText('★ ' + this.score);
    return gain;
  }

  onArriveTile() {
    const k = this.gx + ',' + this.gy;
    const pos = this.tileToPx(this.gx, this.gy);

    // 1) جبن
    if (this.cheeseSprites.has(k)) {
      const img = this.cheeseSprites.get(k);
      this.cheeseSprites.delete(k);
      img.destroy();
      this.cheeseGot++;
      Daily.report('cheese', 1);
      Sound.play('cheese');
      const gain = this.addMazeScore(10);
      if (this._fxStars) this._fxStars.explode(6, pos.x, pos.y);
      this.popToast(pos.x, pos.y - 24, '+' + gain, '#ffc83d', 26);
      this.refreshHud();
    }

    // 2) مفتاح
    if (this.keySprites.has(k)) {
      const obj = this.keySprites.get(k);
      this.keySprites.delete(k);
      obj.img.destroy(); obj.halo.destroy();
      this.heldKeys++;
      Sound.play('key');
      if (this._fxStars) this._fxStars.explode(12, pos.x, pos.y);
      this.popToast(pos.x, pos.y - 26, '🔑 +1', '#ffc83d', 28);
      this.refreshHud();
    }

    // 3) قدرة مؤقتة
    if (this.powerMap.has(k)) {
      const pu = this.powerMap.get(k);
      this.powerMap.delete(k);
      pu.img.destroy(); pu.glow.destroy();
      Sound.play('powerup');
      if (pu.type === 'shield') {
        this.shieldT = 8.0;
        this.popToast(pos.x, pos.y - 26, t('mazeShield'), '#7be8ff', 28);
      } else {
        this.turboT = 6.0;
        this.popToast(pos.x, pos.y - 26, t('mazeTurbo'), '#ffe885', 28);
      }
      if (this._fxStars) this._fxStars.explode(12, pos.x, pos.y);
    }

    // 4) قنبلة ثابتة
    if (this.bombMap.has(k)) {
      this.hitHazard(pos.x, pos.y);
      if (this.over) return;
    }

    // 5) خط النهاية
    if (this.gx === this.m.exit.x && this.gy === this.m.exit.y) {
      if (this.exitUnlocked) {
        this.finishMaze(true);
      } else {
        Sound.play('lose');
        if (this.rescued < this.plan.cages.length) {
          this.popToast(pos.x, pos.y - 36, t('mazeNeedCats'), '#ff9a76', 26);
        } else {
          const leftC = Math.max(1, this.quota - this.cheeseGot);
          this.popToast(pos.x, pos.y - 36, t('mazeNeedCheese').replace('{n}', leftC), '#ffc83d', 24);
        }
      }
    }
  }

  hitHazard(px, py) {
    if (this.invulnT > 0 || this.over) return;
    if (this.shieldT > 0) {
      this.shieldT = 0;
      this.invulnT = 0.9;
      Sound.play('shield');
      this.popToast(px, py - 30, '🛡️ ' + t('pu_blocked'), '#7be8ff', 28);
      if (this._fxStars) this._fxStars.explode(14, px, py);
      return;
    }

    this.hearts--;
    this.combo = 0; this.comboTimer = 0; this.comboTxt.setAlpha(0);
    this.invulnT = 1.85;
    Sound.play('bomb');
    try { navigator.vibrate && navigator.vibrate(this.hearts <= 0 ? [110, 45, 160] : [90, 40, 120]); } catch (e) {}
    if (this._fxBlast) this._fxBlast.explode(22, px, py);
    this.cameras.main.shake(220, 0.012);
    this.cameras.main.flash(150, 229, 72, 77);

    const catDef = CATS[save.cat] || CATS[0];
    this.player.setTexture(catDef.key + (this.hearts <= 0 ? '_dizzy' : '_scared'));
    const hImg = this.heartImgs[this.hearts];
    if (hImg) {
      if (this.textures.exists('ui_heart_off')) hImg.setTexture('ui_heart_off');
      else hImg.setAlpha(0.25);
    }
    this.popToast(px, py - 30, '-1 ♥', '#ff6a6a', 34);
    if (this.hearts <= 0) this.finishMaze(false, 'hearts');
  }

  popToast(x, y, textStr, color, size = 26) {
    const cx = Phaser.Math.Clamp(x, 140, W - 140);
    const cy = Phaser.Math.Clamp(y, 120, H - 100);
    const tx = txt(this, cx, cy, textStr, size, color, { strokeColor: '#120d33', strokeW: 6 }).setDepth(55);
    this.tweens.add({ targets: tx, y: cy - 52, alpha: 0, duration: 1050, ease: 'Quad.Out', onComplete: () => tx.destroy() });
  }

  openMazePause() {
    if (this.over || this.paused) return;
    this.paused = true;
    if (typeof CG !== 'undefined') CG.gameplayStop();
    if (this.tweens && this.tweens.pauseAll) this.tweens.pauseAll();
    const M = this.add.container(0, 0).setDepth(90);
    M.add(this.add.rectangle(0, 0, W, H, 0x0a0820, 0.78).setOrigin(0).setInteractive());
    M.add(txt(this, W / 2, 340, t('paused'), 84, '#ffc83d', { strokeColor: '#7a3d00', strokeW: 12 }));
    const alt = { size: 38, color: 0x8a7bd8, shade: 0x4b3c99, textColor: '#ffffff' };

    const cleanupModalKeys = () => {
      if (this.input && this.input.keyboard && this._mazePauseKeyHandler) {
        this.input.keyboard.off('keydown', this._mazePauseKeyHandler);
        this._mazePauseKeyHandler = null;
      }
    };
    const resumeMaze = () => {
      cleanupModalKeys();
      M.destroy();
      this.paused = false;
      if (this.tweens && this.tweens.resumeAll) this.tweens.resumeAll();
      if (typeof CG !== 'undefined') CG.gameplayStart();
    };
    const retryMaze = () => {
      cleanupModalKeys();
      if (this.tweens && this.tweens.resumeAll) this.tweens.resumeAll();
      go(this, 'Maze', { level: this.lvl });
    };

    M.add(makeButton(this, W / 2, 540, 420, 106, t('resume'), { icon: 'ui_play', iconSize: 44, size: 44 }, resumeMaze));
    M.add(makeButton(this, W / 2, 680, 420, 92, t('retry'), alt, retryMaze));
    M.add(makeButton(this, W / 2, 800, 420, 92, t('menu'), Object.assign({ icon: 'ui_map', iconSize: 34 }, alt), () => {
      cleanupModalKeys();
      if (this.tweens && this.tweens.resumeAll) this.tweens.resumeAll();
      go(this, 'Levels', { tab: 'maze' });
    }));

    if (this.input && this.input.keyboard) {
      this._mazePauseKeyHandler = (ev) => {
        if (!this.paused || this._settingsModal) return;
        if (ev.key === 'Escape' || ev.key === 'p' || ev.key === 'P' || ev.key === ' ' || ev.key === 'Enter') resumeMaze();
        else if (ev.key === 'r' || ev.key === 'R') retryMaze();
      };
      this.input.keyboard.on('keydown', this._mazePauseKeyHandler);
    }
  }

  finishMaze(won, loseReason = '') {
    if (this.over) return;
    this.over = true;
    this.moving = false;
    this.tweens.killTweensOf(this.player);
    if (typeof CG !== 'undefined') CG.gameplayStop();

    const stars = won ? MazeProgress.calcStars({
      hearts: this.hearts, cheese: this.cheeseGot, cheeseTotal: this.cheeseTotal,
      timeLeft: this.timeLeft, timeTotal: this.totalTime, mice: this.miceGot, miceTotal: this.miceTotal,
    }) : 0;

    const baseCoins = won ? this.score + Math.round(this.timeLeft) * 2 : Math.round(this.score * 0.4);
    const bonus = Math.round(baseCoins * ((CATS[save.cat] && CATS[save.cat].coinBonus) || 0));
    const coinsEarned = baseCoins + bonus;
    save.coins += coinsEarned;
    MazeProgress.record(this.lvl, { stars, score: this.score, timeLeft: this.timeLeft });
    Sound.play(won ? 'win' : 'lose');
    if (typeof CG !== 'undefined' && won && stars >= 2) CG.happytime();

    const ov = this.add.container(0, 0).setDepth(95);
    ov.add(this.add.rectangle(0, 0, W, H, 0x0a0820, 0.82).setOrigin(0).setInteractive());

    const pg = this.add.graphics();
    pg.fillStyle(0x1d1850, 0.98).fillRoundedRect(54, 210, W - 108, 860, 36);
    pg.lineStyle(5, won ? 0xffc83d : 0xff6b6b, 1).strokeRoundedRect(54, 210, W - 108, 860, 36);
    ov.add(pg);

    const headStr = won ? t('win') : (loseReason === 'time' ? t('mazeTimeUp') : t('lose'));
    ov.add(txt(this, W / 2, 295, headStr, 70, won ? '#ffc83d' : '#ff7a7a', { strokeColor: won ? '#7a3d00' : '#4a1010', strokeW: 12, wrap: 560 }));

    // نجوم النتيجة
    for (let k = 0; k < 3; k++) {
      const sx = W / 2 + (k - 1) * 145, sy = k === 1 ? 425 : 450;
      const tex = this.textures.exists('ui_star') ? (k < stars ? 'ui_star' : 'ui_star_off') : 'star';
      const st = this.add.image(sx, sy, tex).setScale(0).setAngle((k - 1) * 10);
      if (!this.textures.exists('ui_star')) st.setTint(k < stars ? 0xffc83d : 0x4a4466);
      ov.add(st);
      this.tweens.add({ targets: st, scale: this.textures.exists('ui_star') ? 1.2 : 2.3, duration: 360, delay: 220 + k * 240, ease: 'Back.Out' });
    }

    const summaryStr = `😺 ${this.rescued}/${this.plan.cages.length}   ·   🧀 ${this.cheeseGot}/${this.cheeseTotal}   ·   ⏱ ${Math.ceil(this.timeLeft)}s`;
    ov.add(txt(this, W / 2, 555, summaryStr, 28, '#e4e0ff', { stroke: false }));
    const scoreSummary = txt(this, W / 2, 620, t('score') + ': ' + this.score + (coinsEarned > 0 ? '   ·   +' + coinsEarned : ''), 34, '#ffc83d', { stroke: false });
    ov.add(scoreSummary);
    if (bonus > 0) ov.add(txt(this, W / 2, 668, '✨ ' + t('catBonus') + ' +' + bonus, 24, '#9df5a8', { stroke: false }));

    let by = 755;
    if (typeof CG !== 'undefined' && CG.canShowRewarded && CG.canShowRewarded() && coinsEarned > 0) {
      let claimedAd = false;
      const adBtn = makeButton(this, W / 2, 712, 340, 62, t('doubleCoinsAd'),
        { icon: 'ui_coin', iconSize: 28, size: 24, color: 0x58c46b, shade: 0x2d7a3d, textColor: '#ffffff' }, () => {
          if (claimedAd) return;
          CG.requestRewarded({
            onReward: () => {
              claimedAd = true;
              save.coins += coinsEarned;
              persist();
              Sound.play('buy');
              scoreSummary.setText(t('score') + ': ' + this.score + '   ·   +' + (coinsEarned * 2));
              if (CG.happytime) CG.happytime();
              if (adBtn && adBtn.scene) adBtn.destroy();
            },
          });
        });
      ov.add(adBtn);
      by = 782;
    }
    const routeRound = (fn) => {
      if (typeof CG !== 'undefined' && CG.requestMidgame) CG.requestMidgame(fn);
      else fn();
    };
    if (won) {
      ov.add(makeButton(this, W / 2, by, 420, 88, t('next'), { icon: 'ui_arrow_right', iconSize: 34, size: 40 }, () => routeRound(() => go(this, 'Maze', { level: this.lvl + 1 }))));
      by += 102;
    }
    ov.add(makeButton(this, W / 2, by, 420, 82, t('retry'), { icon: 'ui_play', iconSize: 34, size: 36, color: 0x8a7bd8, shade: 0x4b3c99, textColor: '#ffffff' }, () => routeRound(() => go(this, 'Maze', { level: this.lvl }))));
    ov.add(makeButton(this, W / 2, by + 98, 420, 82, t('menu'), { icon: 'ui_map', iconSize: 34, size: 36, color: 0x8a7bd8, shade: 0x4b3c99, textColor: '#ffffff' }, () => go(this, 'Levels', { tab: 'maze' })));
  }

  update(_, delta) {
    if (this.over || this.paused) return;
    const dt = Math.min(delta / 1000, 0.05);
    this.elapsedMs += delta;

    // مؤقت العد التنازلي
    this.timeLeft -= dt;
    if (this.timeLeft <= 0) { this.timeLeft = 0; this.hudTimer.setText('⏱ 0s'); this.finishMaze(false, 'time'); return; }
    const sec = Math.ceil(this.timeLeft);
    this.hudTimer.setText('⏱ ' + sec + 's');
    if (sec <= 12) {
      this.hudTimer.setColor('#ff6b6b');
      if (sec !== this.lastTickSec) { this.lastTickSec = sec; Sound.play('tick'); }
    }

    if (this.comboTimer > 0) {
      this.comboTimer -= dt;
      if (this.comboTimer <= 0) { this.combo = 0; this.comboTxt.setAlpha(0); }
    }
    if (this.shieldT > 0) this.shieldT = Math.max(0, this.shieldT - dt);
    if (this.turboT > 0) this.turboT = Math.max(0, this.turboT - dt);
    if (this.invulnT > 0) {
      this.invulnT = Math.max(0, this.invulnT - dt);
      this.player.setAlpha(Math.sin(this.elapsedMs * 0.03) > 0 ? 1 : 0.45);
    } else if (this.player.alpha !== 1) {
      this.player.setAlpha(1);
    }

    this.playerGlow.setPosition(this.player.x, this.player.y);
    this.playerShieldRing.setVisible(this.shieldT > 0).setPosition(this.player.x, this.player.y);

    // حركة الفئران + التقاطها
    for (const ms of this.miceActors) {
      if (ms.caught) continue;
      if (ms.patrol.length > 1) {
        ms.timer += delta;
        if (ms.timer >= 520) {
          ms.timer = 0;
          ms.pIdx += ms.dir;
          if (ms.pIdx >= ms.patrol.length || ms.pIdx < 0) {
            ms.dir *= -1;
            ms.pIdx = Phaser.Math.Clamp(ms.pIdx + ms.dir * 2, 0, ms.patrol.length - 1);
          }
          const [nx, ny] = ms.patrol[ms.pIdx];
          ms.x = nx; ms.y = ny;
          const p = this.tileToPx(nx, ny);
          this.tweens.add({ targets: ms.img, x: p.x, y: p.y, duration: 240, ease: 'Sine.InOut' });
        }
      }
      if (Math.hypot(ms.img.x - this.player.x, ms.img.y - this.player.y) < 42) {
        ms.caught = true;
        ms.img.destroy();
        this.miceGot++;
        Daily.report('mice', 1);
        Sound.play('mouse');
        const gain = this.addMazeScore(50);
        if (this._fxStars) this._fxStars.explode(14, this.player.x, this.player.y);
        this.popToast(this.player.x, this.player.y - 34, '+' + gain + ' 🐭', '#ffffff', 30);
      }
    }

    // دوران الجدران الدوارة المتحركة (تفتح وتغلق بسلاسة، وتنتظر إذا كان القط فوقها)
    if (Array.isArray(this.gateActors)) {
      for (const gt of this.gateActors) {
        gt.timer += delta;
        const limit = gt.closed ? gt.closedMs : gt.openMs;
        if (!gt.closed && limit - gt.timer <= 550 && !gt.warning) {
          gt.warning = true;
          gt.ring.setStrokeStyle(3, 0xffc83d, 1).setFillStyle(0xffc83d, 0.3);
        }
        if (gt.timer >= limit) {
          if (!gt.closed && this.gx === gt.x && this.gy === gt.y) {
            gt.timer = limit - 120; // لا تغلق فوق القط مباشرة
            continue;
          }
          gt.timer = 0;
          gt.closed = !gt.closed;
          gt.warning = false;
          const targetAngle = gt.closed ? gt.closedAngle : gt.openAngle;
          gt.ring.setStrokeStyle(3, gt.closed ? 0xe5484d : 0x2ecc71, 0.95).setFillStyle(gt.closed ? 0xe5484d : 0x2ecc71, 0.25);
          this.tweens.add({
            targets: gt.img,
            angle: targetAngle,
            alpha: gt.closed ? 1 : 0.65,
            duration: 240,
            ease: 'Back.Out',
          });
        }
      }
    }

    // حركة الحراس الحمر عند الأبواب: ينسحبون بوضوح إلى الجانب ليفتحوا الباب للقط، ثم يعبرون الباب بتمهل
    for (const pt of this.patrolActors) {
      pt.img.angle = (this.elapsedMs * 0.2) % 360;
      if (!pt.sliding) {
        pt.timer += delta;
        const waitLimit = pt.atAside ? pt.openHoldMs : pt.guardHoldMs;
        if (pt.timer >= waitLimit) {
          pt.timer = 0;
          const nextTile = pt.atAside ? pt.door : pt.aside;
          // إذا كان القط واقفاً على البلاطة التي سيعود إليها الحارس عند الباب، نمنحه فرصة للخروج أولاً
          if (pt.atAside && this.gx === nextTile[0] && this.gy === nextTile[1]) {
            pt.timer = waitLimit - 250;
          } else {
            pt.sliding = true;
            pt.atAside = !pt.atAside;
            pt.gx = nextTile[0];
            pt.gy = nextTile[1];
            const p = this.tileToPx(nextTile[0], nextTile[1]);
            if (pt.doorRing) {
              const doorOpen = pt.atAside;
              pt.doorRing.setStrokeStyle(3, doorOpen ? 0x2ecc71 : 0xe5484d, 0.9)
                .setFillStyle(doorOpen ? 0x2ecc71 : 0xe5484d, doorOpen ? 0.16 : 0.28);
            }
            this.tweens.add({
              targets: pt.img,
              x: p.x, y: p.y,
              duration: pt.slideMs,
              ease: 'Sine.InOut',
              onComplete: () => { pt.sliding = false; },
            });
          }
        }
      }
      if (Math.hypot(pt.img.x - this.player.x, pt.img.y - this.player.y) < 32) {
        this.hitHazard(this.player.x, this.player.y);
        if (this.over) return;
      }
    }
  }
}

// ===== نافذة اختيار مستوى المتاهة (أرقام ونجوم فقط بدون مسميات بلاد أو بحار) =====
function openMazeHubModal(scene) {
  if (scene._mazeModal) return;
  const mz = MazeProgress.ensure();
  const M = (scene._mazeModal = scene.add.container(0, 0).setDepth(100));
  const closeModal = () => {
    if (scene._mazeModal) { scene._mazeModal.destroy(); scene._mazeModal = null; }
  };

  const dim = scene.add.rectangle(0, 0, W, H, 0x08061a, 0.84).setOrigin(0).setInteractive();
  M.add(dim);

  const pg = scene.add.graphics();
  pg.fillStyle(0x1d1850, 0.98).fillRoundedRect(38, 130, W - 76, 1020, 36);
  pg.lineStyle(5, 0x58c46b, 1).strokeRoundedRect(38, 130, W - 76, 1020, 36);
  M.add(pg);

  if (scene.textures.exists('ui_maze')) M.add(scene.add.image(W / 2 - 125, 195, 'ui_maze').setScale(48 / 96));
  M.add(txt(scene, W / 2 + (scene.textures.exists('ui_maze') ? 18 : 0), 195, t('mazeBtn'), 46, '#7ff594', { strokeColor: '#10381a', strokeW: 8 }));
  M.add(txt(scene, W / 2, 255, '🔑 → 😺   ·   🧀 60% → 🏁', 26, '#dcd6ff', { stroke: false }));

  let selected = Math.min(mz.unlocked, 9);
  const dyn = scene.add.container(0, 0);
  M.add(dyn);

  const hasMazeIcon = scene.textures.exists('ui_maze');
  const hasLock = scene.textures.exists('ui_lock');
  const hasStar = scene.textures.exists('ui_star') && scene.textures.exists('ui_star_off');
  const hasTrophy = scene.textures.exists('ui_trophy');

  const render = () => {
    dyn.removeAll(true);
    for (let i = 0; i < 10; i++) {
      const col = i % 2, row = Math.floor(i / 2);
      const bx = 205 + col * 310, by = 355 + row * 124;
      const open = i <= mz.unlocked;
      const isSel = selected === i;
      const stars = mz.stars[i] || 0;

      const card = scene.add.container(bx, by).setSize(280, 106).setInteractive({ useHandCursor: true });
      const bg = scene.add.graphics();
      bg.fillStyle(open ? (isSel ? 0x2e4a44 : 0x282166) : 0x1a173d, 0.96).fillRoundedRect(-140, -53, 280, 106, 22);
      bg.lineStyle(isSel ? 4 : 2, isSel ? 0x7ff594 : (open ? 0x58c46b : 0x4b4670), 1).strokeRoundedRect(-140, -53, 280, 106, 22);
      card.add(bg);
      if (open && hasMazeIcon) card.add(scene.add.image(-104, -14, 'ui_maze').setScale(34 / 96));
      else if (!open && hasLock) card.add(scene.add.image(-104, -14, 'ui_lock').setScale(30 / 128));
      card.add(txt(scene, -62, -14, String(i + 1), 30, open ? '#ffffff' : '#8a85b0', { stroke: false }));
      if (hasStar) {
        for (let k = 0; k < 3; k++) card.add(scene.add.image(28 + k * 32, -14, k < stars ? 'ui_star' : 'ui_star_off').setScale(28 / 128));
      } else {
        card.add(txt(scene, 56, -14, '★'.repeat(stars) + '☆'.repeat(3 - stars), 24, stars > 0 ? '#ffc83d' : '#605b85', { stroke: false }));
      }
      const bestSc = mz.bestScores[i] || 0;
      if (bestSc > 0) {
        if (hasTrophy) card.add(scene.add.image(-28, 24, 'ui_trophy').setScale(22 / 128));
        card.add(txt(scene, hasTrophy ? 12 : 0, 24, String(bestSc), 21, '#9df5a8', { stroke: false }));
      }

      card.on('pointerup', () => {
        Sound.play('click');
        if (!open) { Sound.play('lose'); return; }
        if (selected === i) { closeModal(); go(scene, 'Maze', { level: i }); }
        else { selected = i; render(); }
      });
      dyn.add(card);
    }

    const selBest = mz.bestScores[selected] || 0;
    const selTime = mz.bestTimes[selected] || 0;
    const infoTxt = (selected + 1) + '   ·   ' + t('mazeBest') + ': ' + selBest + (selTime ? ' (' + selTime + 's)' : '');
    dyn.add(txt(scene, W / 2, 955, infoTxt, 24, '#ffe9a8', { stroke: false }));

    dyn.add(makeButton(scene, W / 2, 1025, 380, 78, String(selected + 1),
      { icon: 'ui_maze', iconSize: 38, size: 34, color: 0x58c46b, shade: 0x2d7a3d, textColor: '#ffffff' },
      () => { closeModal(); go(scene, 'Maze', { level: selected }); }));
  };

  render();
  M.add(makeButton(scene, W / 2, 1112, 240, 62, t('close'),
    { size: 28, color: 0x8a7bd8, shade: 0x4b3c99, textColor: '#ffffff' }, closeModal));
}

;
/* ===== js/main.js ===== */
// ===== نقطة التشغيل =====
const KEYS_DOWN = new Set();
function isKeyDown(...keys) {
  for (let i = 0; i < keys.length; i++) if (KEYS_DOWN.has(keys[i])) return true;
  return false;
}

Sound.setMusic(save.music);
Sound.setSfx(save.sfx);
Sound.setMusicVolume(save.musicVol !== undefined ? save.musicVol : 1);
Sound.setSfxVolume(save.sfxVol !== undefined ? save.sfxVol : 1);
if (typeof CG !== 'undefined') CG.init();

function onGlobalKeyDown(e) {
  Sound.init();
  const tag = e.target && e.target.tagName;
  if (tag !== 'INPUT' && tag !== 'TEXTAREA') {
    if (e.code) KEYS_DOWN.add(e.code);
    if (e.key) KEYS_DOWN.add(e.key);
    if (e.keyCode) KEYS_DOWN.add(e.keyCode);
    if (e.key === 'ArrowUp' || e.key === 'ArrowDown' || e.key === 'ArrowLeft' || e.key === 'ArrowRight' || e.key === ' ' || e.code === 'Space') {
      e.preventDefault();
    }
  }
}
function onGlobalKeyUp(e) {
  if (e.code) KEYS_DOWN.delete(e.code);
  if (e.key) KEYS_DOWN.delete(e.key);
  if (e.keyCode) KEYS_DOWN.delete(e.keyCode);
}
window.addEventListener('pointerdown', () => {
  Sound.init();
  try { window.focus(); } catch (err) {}
});
window.addEventListener('keydown', onGlobalKeyDown, { passive: false });
window.addEventListener('keyup', onGlobalKeyUp);
if (typeof document !== 'undefined' && document.addEventListener) {
  document.addEventListener('keydown', onGlobalKeyDown, { passive: false });
  document.addEventListener('keyup', onGlobalKeyUp);
  document.addEventListener('visibilitychange', () => {
    if (document.hidden) { KEYS_DOWN.clear(); Sound.suspend(); }
    else Sound.resume();
  });
}
window.addEventListener('blur', () => KEYS_DOWN.clear());
window.addEventListener('contextmenu', (e) => e.preventDefault());

const phaserGame = new Phaser.Game({
  type: Phaser.AUTO,
  parent: 'game',
  width: W,
  height: H,
  backgroundColor: '#1b1838',
  fps: { target: 60, smoothStep: true },
  render: { antialias: true, powerPreference: 'high-performance' },
  scale: { mode: Phaser.Scale.FIT, autoCenter: Phaser.Scale.CENTER_BOTH, expandParent: true },
  input: { activePointers: 2 },
  scene: [BootScene, LangScene, MenuScene, LevelsScene, GameScene, MazeScene, EndScene, PauseScene, StoryScene, ShopScene, MissionsScene],
});
if (typeof window !== 'undefined') {
  let resizeTimer = null;
  const refreshScale = () => {
    if (resizeTimer) clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => {
      if (phaserGame && phaserGame.scale) phaserGame.scale.refresh();
    }, 60);
  };
  window.addEventListener('resize', refreshScale);
  window.addEventListener('orientationchange', refreshScale);
  if (typeof document !== 'undefined') {
    document.addEventListener('fullscreenchange', refreshScale);
  }
}
if (typeof document !== 'undefined') {
  const gEl = document.getElementById('game');
  if (gEl) { gEl.setAttribute('tabindex', '0'); gEl.style.outline = 'none'; }
}

// تكامل أندرويد الأصلي (Capacitor WebView فقط — لا يعمل في المتصفح)
if (typeof window !== 'undefined' && window.Capacitor && typeof window.Capacitor.isNativePlatform === 'function' && window.Capacitor.isNativePlatform()) {
  const capApp = window.Capacitor.Plugins && window.Capacitor.Plugins.App;
  if (capApp && typeof capApp.addListener === 'function') {
    capApp.addListener('appStateChange', ({ isActive }) => {
      if (!isActive) {
        Sound.suspend();
        const gameSc = phaserGame.scene.getScene('Game');
        if (phaserGame.scene.isActive('Game') && gameSc && !gameSc.over && !phaserGame.scene.isActive('Pause')) {
          phaserGame.scene.pause('Game');
          phaserGame.scene.launch('Pause', { level: gameSc.level, mode: gameSc.mode, endlessTheme: gameSc.themeKey });
        }
        const mazeSc = phaserGame.scene.getScene('Maze');
        if (phaserGame.scene.isActive('Maze') && mazeSc && !mazeSc.over && !mazeSc.paused && typeof mazeSc.openMazePause === 'function') {
          mazeSc.openMazePause();
        }
      } else {
        Sound.resume();
      }
    });

    capApp.addListener('backButton', () => {
      if (phaserGame.scene.isActive('Game')) {
        const gameSc = phaserGame.scene.getScene('Game');
        if (gameSc && !gameSc.over && !phaserGame.scene.isActive('Pause')) {
          phaserGame.scene.pause('Game');
          phaserGame.scene.launch('Pause', { level: gameSc.level, mode: gameSc.mode, endlessTheme: gameSc.themeKey });
        }
        return;
      }
      if (phaserGame.scene.isActive('Maze')) {
        const mazeSc = phaserGame.scene.getScene('Maze');
        if (mazeSc && !mazeSc.over && !mazeSc.paused && typeof mazeSc.openMazePause === 'function') {
          mazeSc.openMazePause();
        }
        return;
      }
      if (phaserGame.scene.isActive('Pause')) {
        const gameSc = phaserGame.scene.getScene('Game');
        phaserGame.scene.stop('Pause');
        if (gameSc) phaserGame.scene.resume('Game');
        return;
      }
      for (const key of ['Levels', 'Shop', 'Missions', 'End', 'Story']) {
        if (phaserGame.scene.isActive(key)) {
          phaserGame.scene.start('Menu');
          return;
        }
      }
      if (typeof capApp.minimizeApp === 'function') capApp.minimizeApp();
    });
  }
}


;
