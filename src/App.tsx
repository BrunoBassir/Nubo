/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { HomeScreen } from './components/HomeScreen';
import { ExploreScreen } from './components/ExploreScreen';
import { ScanQRScreen } from './components/ScanQRScreen';
import { PrizesScreen } from './components/PrizesScreen';
import { RankingScreen } from './components/RankingScreen';
import { ProfileScreen } from './components/ProfileScreen';
import { PassportScreen } from './components/PassportScreen';
import { ExplorerDnaScreen } from './components/ExplorerDnaScreen';
import { RadarScreen } from './components/RadarScreen';
import { LiveAuctionsScreen } from './components/LiveAuctionsScreen';
import { SecretMissionsScreen } from './components/SecretMissionsScreen';
import { PrizeFragmentsScreen } from './components/PrizeFragmentsScreen';
import { TradingMarketScreen } from './components/TradingMarketScreen';
import { MysteryChestScreen } from './components/MysteryChestScreen';
import { HolographicCompanionScreen } from './components/HolographicCompanionScreen';
import { EditProfileScreen } from './components/EditProfileScreen';
import { AchievementsScreen } from './components/AchievementsScreen';
import { LevelScreen } from './components/LevelScreen';
import { LevelBenefitsScreen } from './components/LevelBenefitsScreen';
import { RecentActivityScreen } from './components/RecentActivityScreen';
import { SpotGalleryScreen } from './components/SpotGalleryScreen';
import { UploadProofScreen } from './components/UploadProofScreen';
import { ValidationCelebrationScreen } from './components/ValidationCelebrationScreen';
import { CoffeeRouteScreen } from './components/CoffeeRouteScreen';
import { ExplorePlacesScreen } from './components/ExplorePlacesScreen';
import { ChallengesScreen } from './components/ChallengesScreen';
import { DiscoveryScreen } from './components/DiscoveryScreen';
import { VouchersScreen } from './components/VouchersScreen';
import { RedeemVoucherScreen } from './components/RedeemVoucherScreen';
import { ShareInviteScreen } from './components/ShareInviteScreen';
import { ReferralsScreen } from './components/ReferralsScreen';
import { SettingsMenuScreen } from './components/SettingsMenuScreen';
import { NotificationsScreen } from './components/NotificationsScreen';
import { SettingsIdentityScreen } from './components/SettingsIdentityScreen';
import { SettingsPrivacyScreen } from './components/SettingsPrivacyScreen';
import { SettingsPaymentsScreen } from './components/SettingsPaymentsScreen';
import { SettingsAppearanceScreen } from './components/SettingsAppearanceScreen';
import { SettingsHelpScreen } from './components/SettingsHelpScreen';
import { SettingsAboutScreen } from './components/SettingsAboutScreen';
import { GlobalTopNavBar } from './components/GlobalTopNavBar';

import { SpotPhotoDetailScreen } from './components/SpotPhotoDetailScreen';
import { ChallengeDetailScreen } from './components/ChallengeDetailScreen';
import { FeaturedDetailScreen } from './components/FeaturedDetailScreen';
import { OnboardingScreen } from './components/OnboardingScreen';
import { RankingPrizeDetailScreen } from './components/RankingPrizeDetailScreen';
import { RouteMapScreen } from './components/RouteMapScreen';
import { ManualCodeScreen } from './components/ManualCodeScreen';

import { InviteContactsScreen } from './components/InviteContactsScreen';

type Tab = 'home' | 'explore' | 'scan_qr' | 'prizes' | 'ranking' | 'profile' | 'edit_profile' | 'level' | 'level_benefits' | 'recent_activity' | 'spot_gallery' | 'upload_proof' | 'validation_celebration' | 'coffee_route' | 'explore_places' | 'challenges' | 'discovery' | 'vouchers' | 'redeem_voucher' | 'share_invite' | 'referrals' | 'settings_menu' | 'notifications' | 'settings_identity' | 'settings_privacy' | 'settings_payments' | 'settings_appearance' | 'settings_help' | 'settings_about' | 'share_invite_profile' | 'spot_photo_detail' | 'challenge_detail' | 'featured_detail' | 'ranking_prize_detail' | 'route_map' | 'manual_code' | 'passport' | 'explorer_dna' | 'achievements' | 'radar' | 'mystery_chest' | 'secret_missions' | 'live_auctions' | 'prize_fragments' | 'trading_market' | 'holographic_companion' | 'invite_contacts';

export default function App() {
  const [history, setHistory] = useState<Tab[]>(['home']);
  const activeTab = history[history.length - 1];
  const [showOnboarding, setShowOnboarding] = useState(false);

  useEffect(() => {
    // Check if onboarding was completed previously
    const hasCompletedOnboarding = localStorage.getItem('nubo_onboarding_completed') === 'true';
    if (!hasCompletedOnboarding) {
      setShowOnboarding(true);
    }
  }, []);

  useEffect(() => {
    // Evita el scroll "suave" para que el cambio de pantalla se sienta instantáneo
    window.scrollTo(0, 0);
    // Si la aplicación estuviera dentro de un contenedor en lugar del body, 
    // se buscaría el scroll container y se le aplicaría scroll.
    const scrollableDiv = document.querySelector('.overflow-y-auto');
    if (scrollableDiv) {
      scrollableDiv.scrollTop = 0;
    }
  }, [activeTab]);

  const setActiveTab = (tab: Tab) => {
    // If we're navigating to a main tab, clear history and jump there
    if (['home', 'explore', 'scan_qr', 'prizes', 'ranking'].includes(tab)) {
      setHistory([tab]);
    } else {
      setHistory(prev => [...prev, tab]);
    }
  };

  const goBack = () => {
    setHistory(prev => prev.length > 1 ? prev.slice(0, -1) : prev);
  };

  const showGlobalBottomNav = [
    'home', 
    'explore', 
    'scan_qr', 
    'prizes', 
    'ranking', 
    'share_invite', 
    'referrals', 
    'level', 
    'level_benefits', 
    'challenges', 
    'discovery', 
    'explore_places', 
    'coffee_route', 
    'vouchers', 
    'redeem_voucher', 
    'profile', 
    'edit_profile', 
    'recent_activity',
    'spot_gallery',
    'upload_proof',
    'validation_celebration',
    'settings_menu',
    'spot_photo_detail',
    'challenge_detail',
    'featured_detail',
    'ranking_prize_detail',
    'route_map',
    'passport',
    'explorer_dna',
    'radar',
    'mystery_chest',
    'secret_missions',
    'live_auctions',
    'prize_fragments',
    'trading_market'
  ].includes(activeTab);

  // Determinar en cuáles pantallas mostramos el Top Nav Global
  const showGlobalTopNav = ['home', 'explore', 'prizes', 'ranking', 'profile'].includes(activeTab);

  if (showOnboarding) {
    return (
      <div className="dark lg:max-w-md lg:mx-auto relative bg-background-dark text-slate-100 min-h-screen">
        <OnboardingScreen onComplete={() => {
          localStorage.setItem('nubo_onboarding_completed', 'true');
          setShowOnboarding(false);
        }} />
      </div>
    );
  }

  return (
      <div className={`overflow-x-hidden min-h-screen ${showGlobalBottomNav ? 'pb-32' : ''} dark lg:max-w-md lg:mx-auto lg:border-x lg:border-white/10 relative ${
      activeTab === 'profile' || activeTab === 'edit_profile'
        ? 'bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 flex flex-col w-full'
        : activeTab === 'explore' || activeTab === 'ranking' || activeTab === 'level' || activeTab === 'level_benefits' || activeTab === 'recent_activity' || activeTab === 'spot_gallery' || activeTab === 'upload_proof' || activeTab === 'validation_celebration' || activeTab === 'coffee_route' || activeTab === 'route_map' || activeTab === 'explore_places' || activeTab === 'challenges' || activeTab === 'discovery' || activeTab === 'vouchers' || activeTab === 'redeem_voucher' || activeTab === 'share_invite' || activeTab === 'referrals' || activeTab === 'spot_photo_detail' || activeTab === 'challenge_detail' || activeTab === 'featured_detail' || activeTab === 'ranking_prize_detail' || activeTab === 'manual_code' || activeTab === 'passport' || activeTab === 'radar' || activeTab === 'mystery_chest' || activeTab === 'secret_missions' || activeTab === 'live_auctions' || activeTab === 'prize_fragments' || activeTab === 'trading_market' || activeTab === 'holographic_companion'
          ? 'bg-background-dark text-slate-100 w-full overflow-x-hidden'
          : activeTab === 'scan_qr'
            ? 'bg-background-dark font-display text-slate-100 overflow-hidden h-screen w-full flex flex-col'
            : activeTab === 'prizes' 
              ? 'bg-background-dark font-display text-slate-100 antialiased overflow-x-hidden flex flex-col w-full'
              : 'bg-background text-on-background font-body-md w-full overflow-x-hidden'
    }`}>
      {showGlobalTopNav && (
        <GlobalTopNavBar 
          onProfileClick={() => setActiveTab('profile')} 
          onNotificationsClick={() => setActiveTab('notifications')} 
        />
      )}
      <div className={showGlobalTopNav ? "pt-16" : ""}>
        {activeTab === 'home' && <HomeScreen onProfileClick={() => setActiveTab('profile')} onLevelClick={() => setActiveTab('level')} onRecentActivityClick={() => setActiveTab('recent_activity')} onSpotClick={() => setActiveTab('spot_gallery')} onCoffeeRouteClick={() => setActiveTab('coffee_route')} onNotificationsClick={() => setActiveTab('notifications')} onValidate={() => setActiveTab('validation_celebration')} />}
        {activeTab === 'explore' && <ExploreScreen onPlacesClick={() => setActiveTab('explore_places')} onChallengesClick={() => setActiveTab('challenges')} onDiscoveryClick={() => setActiveTab('discovery')} onFeaturedDetailClick={() => setActiveTab('featured_detail')} onRadarClick={() => setActiveTab('radar')} onSecretMissionsClick={() => setActiveTab('secret_missions')} onRouteClick={() => setActiveTab('coffee_route')} onValidate={() => setActiveTab('validation_celebration')} />}
        {activeTab === 'secret_missions' && <SecretMissionsScreen onBack={goBack} />}
        {activeTab === 'scan_qr' && <ScanQRScreen onProfileClick={() => setActiveTab('profile')} onNotificationsClick={() => setActiveTab('notifications')} onManualCodeClick={() => setActiveTab('manual_code')} />}
        {activeTab === 'manual_code' && <ManualCodeScreen onBack={goBack} onValidate={() => setActiveTab('validation_celebration')} />}
        {activeTab === 'prizes' && <PrizesScreen onVouchersClick={() => setActiveTab('vouchers')} onMysteryChestClick={() => setActiveTab('mystery_chest')} onLiveAuctionsClick={() => setActiveTab('live_auctions')} onPrizeFragmentsClick={() => setActiveTab('prize_fragments')} onTradingMarketClick={() => setActiveTab('trading_market')} />}
        {activeTab === 'live_auctions' && <LiveAuctionsScreen onBack={goBack} />}
        {activeTab === 'prize_fragments' && <PrizeFragmentsScreen onBack={goBack} onOpenVouchers={() => setActiveTab('vouchers')} />}
        {activeTab === 'trading_market' && <TradingMarketScreen onBack={goBack} />}
        {activeTab === 'mystery_chest' && <MysteryChestScreen onBack={goBack} onOpen={() => setActiveTab('vouchers')} />}
        {activeTab === 'ranking' && <RankingScreen onReferidosClick={() => setActiveTab('share_invite')} onWeeklyPrizeClick={() => setActiveTab('ranking_prize_detail')} />}
        {activeTab === 'profile' && <ProfileScreen onEditProfile={() => setActiveTab('edit_profile')} onSettingsClick={() => setActiveTab('settings_menu')} onInviteFriendsClick={() => setActiveTab('share_invite_profile')} onViewAllAchievements={() => setActiveTab('achievements')} onPassportClick={() => setActiveTab('passport')} onDnaClick={() => setActiveTab('explorer_dna')} onCompanionClick={() => setActiveTab('holographic_companion')} />}
        {activeTab === 'passport' && <PassportScreen onBack={goBack} />}
        {activeTab === 'explorer_dna' && <ExplorerDnaScreen onBack={goBack} />}
        {activeTab === 'radar' && <RadarScreen onBack={goBack} />}
        {activeTab === 'achievements' && <AchievementsScreen onBack={goBack} />}
        {activeTab === 'edit_profile' && <EditProfileScreen onBack={goBack} />}
        {activeTab === 'level' && <LevelScreen onLevelDetailsClick={() => setActiveTab('level_benefits')} onProfileClick={() => setActiveTab('profile')} onNotificationsClick={() => setActiveTab('notifications')} />}
        {activeTab === 'level_benefits' && <LevelBenefitsScreen onBack={goBack} onProfileClick={() => setActiveTab('profile')} onNotificationsClick={() => setActiveTab('notifications')} />}
        {activeTab === 'recent_activity' && <RecentActivityScreen onBack={goBack} onLevelAchievedClick={() => setActiveTab('level')} />}
        {activeTab === 'spot_gallery' && <SpotGalleryScreen onBack={goBack} onUploadProofClick={() => setActiveTab('upload_proof')} onPhotoClick={() => setActiveTab('spot_photo_detail')} />}
        {activeTab === 'upload_proof' && <UploadProofScreen onBack={goBack} onValidate={() => setActiveTab('validation_celebration')} />}
        {activeTab === 'validation_celebration' && <ValidationCelebrationScreen onClose={goBack} onHome={() => setActiveTab('home')} onExplore={() => setActiveTab('explore')} onScan={() => setActiveTab('scan_qr')} onPrizes={() => setActiveTab('prizes')} onRanking={() => setActiveTab('ranking')} />}
        {activeTab === 'coffee_route' && <CoffeeRouteScreen onBack={goBack} onHome={() => setActiveTab('home')} onExplore={() => setActiveTab('explore')} onScan={() => setActiveTab('scan_qr')} onPrizes={() => setActiveTab('prizes')} onRanking={() => setActiveTab('ranking')} onRouteMapClick={() => setActiveTab('route_map')} />}
        {activeTab === 'route_map' && <RouteMapScreen onBack={goBack} />}
        {activeTab === 'explore_places' && <ExplorePlacesScreen onBack={goBack} onPlaceDetailClick={() => setActiveTab('validation_celebration')} onProfileClick={() => setActiveTab('profile')} onNotificationsClick={() => setActiveTab('notifications')} onRouteClick={() => setActiveTab('coffee_route')} />}
        {activeTab === 'challenges' && <ChallengesScreen onBack={goBack} onCoffeeRouteClick={() => setActiveTab('coffee_route')} onChallengeClick={() => setActiveTab('challenge_detail')} />}
        {activeTab === 'discovery' && <DiscoveryScreen onHome={() => setActiveTab('home')} onExplore={() => setActiveTab('explore')} onScan={() => setActiveTab('scan_qr')} onPrizes={() => setActiveTab('prizes')} onRanking={() => setActiveTab('ranking')} onValidate={() => setActiveTab('validation_celebration')} onRouteClick={() => setActiveTab('coffee_route')} />}
        {activeTab === 'vouchers' && <VouchersScreen onHome={() => setActiveTab('home')} onExplore={() => setActiveTab('explore')} onScan={() => setActiveTab('scan_qr')} onPrizes={() => setActiveTab('prizes')} onRanking={() => setActiveTab('ranking')} onRedeemVoucher={() => setActiveTab('redeem_voucher')} />}
        {activeTab === 'redeem_voucher' && <RedeemVoucherScreen onBack={goBack} onHome={() => setActiveTab('home')} onExplore={() => setActiveTab('explore')} onScan={() => setActiveTab('scan_qr')} onPrizes={() => setActiveTab('prizes')} onRanking={() => setActiveTab('ranking')} />}
        {activeTab === 'share_invite' && <ShareInviteScreen onClose={goBack} onHome={() => setActiveTab('home')} onExplore={() => setActiveTab('explore')} onScan={() => setActiveTab('scan_qr')} onPrizes={() => setActiveTab('prizes')} onRanking={() => setActiveTab('ranking')} onViewReferrals={() => setActiveTab('referrals')} onInviteContacts={() => setActiveTab('invite_contacts')} />}
        {activeTab === 'share_invite_profile' && <ShareInviteScreen onClose={goBack} onHome={() => setActiveTab('home')} onExplore={() => setActiveTab('explore')} onScan={() => setActiveTab('scan_qr')} onPrizes={() => setActiveTab('prizes')} onRanking={() => setActiveTab('ranking')} onViewReferrals={() => setActiveTab('referrals')} onInviteContacts={() => setActiveTab('invite_contacts')} />}
        {activeTab === 'invite_contacts' && <InviteContactsScreen onBack={goBack} />}
        {activeTab === 'referrals' && <ReferralsScreen onBack={goBack} onHome={() => setActiveTab('home')} onExplore={() => setActiveTab('explore')} onScan={() => setActiveTab('scan_qr')} onPrizes={() => setActiveTab('prizes')} onRanking={() => setActiveTab('ranking')} onInviteClick={() => setActiveTab('share_invite')} />}
        {activeTab === 'settings_menu' && <SettingsMenuScreen onBack={goBack} onIdentityClick={() => setActiveTab('settings_identity')} onPrivacyClick={() => setActiveTab('settings_privacy')} onPaymentsClick={() => setActiveTab('settings_payments')} onAppearanceClick={() => setActiveTab('settings_appearance')} onHelpClick={() => setActiveTab('settings_help')} onAboutClick={() => setActiveTab('settings_about')} />}
        {activeTab === 'notifications' && <NotificationsScreen onBack={goBack} />}
        {activeTab === 'settings_identity' && <SettingsIdentityScreen onBack={goBack} />}
        {activeTab === 'settings_privacy' && <SettingsPrivacyScreen onBack={goBack} />}
        {activeTab === 'settings_payments' && <SettingsPaymentsScreen onBack={goBack} />}
        {activeTab === 'settings_appearance' && <SettingsAppearanceScreen onBack={goBack} />}
        {activeTab === 'settings_help' && <SettingsHelpScreen onBack={goBack} />}
        {activeTab === 'settings_about' && <SettingsAboutScreen onBack={goBack} />}
        {activeTab === 'spot_photo_detail' && <SpotPhotoDetailScreen onBack={goBack} />}
        {activeTab === 'challenge_detail' && <ChallengeDetailScreen onBack={goBack} onValidate={() => setActiveTab('validation_celebration')} />}
        {activeTab === 'featured_detail' && <FeaturedDetailScreen onBack={goBack} onValidate={() => setActiveTab('validation_celebration')} />}
        {activeTab === 'ranking_prize_detail' && <RankingPrizeDetailScreen onBack={goBack} />}
        {activeTab === 'holographic_companion' && <HolographicCompanionScreen onBack={goBack} />}
        
        {activeTab !== 'home' && activeTab !== 'explore' && activeTab !== 'scan_qr' && activeTab !== 'prizes' && activeTab !== 'ranking' && activeTab !== 'profile' && activeTab !== 'edit_profile' && activeTab !== 'level' && activeTab !== 'level_benefits' && activeTab !== 'recent_activity' && activeTab !== 'spot_gallery' && activeTab !== 'upload_proof' && activeTab !== 'validation_celebration' && activeTab !== 'coffee_route' && activeTab !== 'explore_places' && activeTab !== 'challenges' && activeTab !== 'discovery' && activeTab !== 'vouchers' && activeTab !== 'redeem_voucher' && activeTab !== 'share_invite' && activeTab !== 'share_invite_profile' && activeTab !== 'invite_contacts' && activeTab !== 'referrals' && activeTab !== 'settings_menu' && activeTab !== 'notifications' && activeTab !== 'settings_identity' && activeTab !== 'settings_privacy' && activeTab !== 'settings_payments' && activeTab !== 'settings_appearance' && activeTab !== 'settings_help' && activeTab !== 'settings_about' && activeTab !== 'spot_photo_detail' && activeTab !== 'challenge_detail' && activeTab !== 'featured_detail' && activeTab !== 'ranking_prize_detail' && activeTab !== 'route_map' && activeTab !== 'manual_code' && activeTab !== 'passport' && activeTab !== 'explorer_dna' && activeTab !== 'radar' && activeTab !== 'mystery_chest' && activeTab !== 'secret_missions' && activeTab !== 'live_auctions' && activeTab !== 'prize_fragments' && activeTab !== 'trading_market' && activeTab !== 'holographic_companion' && (
          <div className="flex flex-1 items-center justify-center text-center p-6 text-on-surface-variant">
            <p>La sección {activeTab} estará disponible pronto.</p>
          </div>
        )}
      </div>

    {/* BottomNavBar */}
      {showGlobalBottomNav && (
        <nav className="fixed bottom-0 left-0 right-0 z-50 lg:max-w-md lg:mx-auto px-2 pb-6 pt-2">
          <div className="absolute inset-x-0 bottom-0 h-24 bg-slate-900/80 backdrop-blur-xl rounded-t-3xl border-t border-white/20 shadow-[0_-4px_24px_rgba(0,0,0,0.5)] -z-10"></div>
          
          <div className="mx-auto flex justify-around max-w-md items-end h-16 w-full">
            <button 
              onClick={() => setActiveTab('home')}
              className={`flex flex-col items-center justify-center transition-all duration-300 active:scale-95 gap-1 ${
                activeTab === 'home' 
                  ? 'text-primary drop-shadow-[0_0_8px_rgba(25,204,240,0.5)] scale-110' 
                  : 'text-slate-500 hover:text-primary hover:scale-105'
              }`}
            >
              <span className="material-symbols-outlined text-[24px] transition-all duration-300" style={activeTab === 'home' ? { fontVariationSettings: "'FILL' 1" } : {}}>home</span>
              <span className="font-space-grotesk text-[10px] font-bold uppercase tracking-tight mt-1 transition-all duration-300">Inicio</span>
            </button>
            
            <button 
              onClick={() => setActiveTab('explore')}
              className={`flex flex-col items-center justify-center transition-all duration-300 active:scale-95 gap-1 ${
                activeTab === 'explore' 
                  ? 'text-primary drop-shadow-[0_0_8px_rgba(25,204,240,0.5)] scale-110' 
                  : 'text-slate-500 hover:text-primary hover:scale-105'
              }`}
            >
              <span className="material-symbols-outlined text-[24px] transition-all duration-300" style={activeTab === 'explore' ? { fontVariationSettings: "'FILL' 1" } : {}}>explore</span>
              <span className="font-space-grotesk text-[10px] font-bold uppercase tracking-tight mt-1 transition-all duration-300">Explorar</span>
            </button>
            
            <div className="relative -top-6">
              <button 
                onClick={() => setActiveTab('scan_qr')}
                className={`w-16 h-16 rounded-full shadow-[0_0_20px_rgba(25,204,240,0.3)] flex items-center justify-center transition-all duration-300 ring-4 ring-slate-900 cursor-pointer ${
                  activeTab === 'scan_qr'
                    ? 'bg-background-dark text-primary scale-95 border-2 border-primary drop-shadow-[0_0_12px_rgba(25,204,240,0.8)]'
                    : 'bg-primary text-background-dark hover:scale-105 active:scale-95 hover:shadow-[0_0_25px_rgba(25,204,240,0.6)]'
                }`}
              >
                <span className={`material-symbols-outlined text-[32px] font-bold transition-all duration-300 ${activeTab === 'scan_qr' ? 'scale-110' : ''}`}>qr_code_scanner</span>
              </button>
              <span className={`absolute -bottom-6 left-1/2 -translate-x-1/2 font-space-grotesk text-[10px] font-bold uppercase tracking-wider whitespace-nowrap transition-all duration-300 ${activeTab === 'scan_qr' ? 'text-primary drop-shadow-[0_0_8px_rgba(25,204,240,0.5)]' : 'text-slate-500'}`}>Scan QR</span>
            </div>
            
            <button 
              onClick={() => setActiveTab('prizes')}
              className={`flex flex-col items-center justify-center transition-all duration-300 active:scale-95 gap-1 ${
                activeTab === 'prizes' 
                  ? 'text-primary drop-shadow-[0_0_8px_rgba(25,204,240,0.5)] scale-110' 
                  : 'text-slate-500 hover:text-primary hover:scale-105'
              }`}
            >
              <span className="material-symbols-outlined text-[24px] transition-all duration-300" style={activeTab === 'prizes' ? { fontVariationSettings: "'FILL' 1" } : {}}>workspace_premium</span>
              <span className="font-space-grotesk text-[10px] font-bold uppercase tracking-tight mt-1 transition-all duration-300">Premios</span>
            </button>
            
            <button 
              onClick={() => setActiveTab('ranking')}
              className={`flex flex-col items-center justify-center transition-all duration-300 active:scale-95 gap-1 ${
                activeTab === 'ranking' 
                  ? 'text-primary drop-shadow-[0_0_8px_rgba(25,204,240,0.5)] scale-110' 
                  : 'text-slate-500 hover:text-primary hover:scale-105'
              }`}
            >
              <span className="material-symbols-outlined text-[24px] transition-all duration-300" style={activeTab === 'ranking' ? { fontVariationSettings: "'FILL' 1" } : {}}>leaderboard</span>
              <span className="font-space-grotesk text-[10px] font-bold uppercase tracking-tight mt-1 transition-all duration-300">Ranking</span>
            </button>
          </div>
        </nav>
      )}
      
      {/* iOS style bottom indicator */}
      <div className="fixed bottom-1 left-1/2 -translate-x-1/2 w-32 h-1 bg-slate-300 dark:bg-slate-700 rounded-full z-[60]"></div>
    </div>
  );
}
