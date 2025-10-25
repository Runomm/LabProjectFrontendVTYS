import Dock from "../../components/Dock";
import Shuffle from "../../components/Shuffle";
import GlassSurface from "../../components/GlassSurface";
import Silk from "../../components/Silk";
import { useAuth } from "../../contexts/AuthContext";
import { useEffect, useRef, useState } from "react";
import "./LandingPage.css";


export default function LandingPage() {
    const {user}=useAuth();
    const containerRef = useRef<HTMLDivElement>(null);
    const [currentSection, setCurrentSection] = useState(0);
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        // Mouse wheel scroll - simplified
        const handleWheel = () => {
            // Allow default scroll behavior
            // Just track scroll position
        };

        // Touch scroll for mobile - simplified
        const handleTouchStart = () => {
            // Allow default touch behavior
        };

        const handleTouchMove = () => {
            // Allow default touch behavior
        };

        // Keyboard scroll
        const handleKeyDown = (e: KeyboardEvent) => {
            const scrollAmount = 100;
            switch (e.key) {
                case 'ArrowDown':
                case 'PageDown':
                case ' ':
                    e.preventDefault();
                    container.scrollTop += scrollAmount;
                    break;
                case 'ArrowUp':
                case 'PageUp':
                    e.preventDefault();
                    container.scrollTop -= scrollAmount;
                    break;
                case 'Home':
                    e.preventDefault();
                    container.scrollTop = 0;
                    break;
                case 'End':
                    e.preventDefault();
                    container.scrollTop = container.scrollHeight;
                    break;
            }
        };

        // Scroll position tracking
        const handleScroll = () => {
            const scrollTop = container.scrollTop;
            const scrollHeight = container.scrollHeight;
            const clientHeight = container.clientHeight;
            const scrollPercentage = scrollTop / (scrollHeight - clientHeight);
            
            // Update current section (0-9)
            setCurrentSection(Math.round(scrollPercentage * 9));
            
            // Update scroll progress (0-1) for indicator movement
            setScrollProgress(scrollPercentage);
        };

        // Add event listeners
        container.addEventListener('wheel', handleWheel, { passive: true });
        container.addEventListener('touchstart', handleTouchStart, { passive: true });
        container.addEventListener('touchmove', handleTouchMove, { passive: true });
        container.addEventListener('scroll', handleScroll);
        document.addEventListener('keydown', handleKeyDown);

        // Cleanup
        return () => {
            container.removeEventListener('wheel', handleWheel);
            container.removeEventListener('touchstart', handleTouchStart);
            container.removeEventListener('touchmove', handleTouchMove);
            container.removeEventListener('scroll', handleScroll);
            document.removeEventListener('keydown', handleKeyDown);
        };
    }, []);

    const scrollToSection = (sectionIndex: number) => {
        const container = containerRef.current;
        if (!container) return;
        
        const scrollHeight = container.scrollHeight;
        const clientHeight = container.clientHeight;
        const targetScroll = (scrollHeight - clientHeight) * (sectionIndex / 9);
        container.scrollTo({
            top: targetScroll,
            behavior: 'smooth'
        });
    };

    return (
        <div className="landingpage-container" ref={containerRef}>
            {/* Silk Background */}
            <div className="silk-background">
                    <Silk
                        speed={5}
                        scale={1}
                        color="#c9beb0"
                        noiseIntensity={1.5}
                        rotation={0}
                    />
            </div>

            {/* Main Content Area with scroll */}
            <div className="landingpage-main-content">
                <main className="landingpage-main">
                    {/* Content Container with proper spacing */}
                    <div className="landingpage-content">
                        {/* Header Section */}
                        <div className="landingpage-header">
                            <Shuffle
                                text="LANDING PAGE"
                                tag="h1"
                                className="landingpage-title"
                                shuffleDirection="right"
                                duration={0.6}
                                animationMode="evenodd"
                                shuffleTimes={1}
                                ease="power2.out"
                                stagger={0.05}
                                threshold={0.1}
                                triggerOnce={true}
                                triggerOnHover={false}
                                respectReducedMotion={true}
                                onShuffleComplete={() => {}}
                                colorFrom=""
                                colorTo=""
                            />
                            <Shuffle
                                text={`HOŞ GELDİNİZ! ${user?.username || 'KULLANICI'} LANDING PAGE'DASINIZ ŞUAN.`}
                                tag="p"
                                className="landingpage-subtitle"
                                shuffleDirection="right"
                                duration={0.8}
                                animationMode="evenodd"
                                shuffleTimes={1}
                                ease="power2.out"
                                stagger={0.03}
                                threshold={0.1}
                                triggerOnce={true}
                                triggerOnHover={false}
                                respectReducedMotion={true}
                                onShuffleComplete={() => {}}
                                colorFrom=""
                                colorTo=""
                            />
                        </div>
                        
                        {/* Landing Page Content Area */}
                        <div className="landingpage-content-area">
                            {/* Hero Image Section with Text Overlay */}
                            <div className="hero-image-section">
                                <div className="hero-image-container">
                                    <img 
                                        src="https://images.unsplash.com/photo-1594576547505-1be67997401e?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                        alt="Modern Technology"
                                        className="hero-image"
                                    />
                                    <div className="hero-text-overlay">
                                        <Shuffle
                                            text="LANDING PAGE"
                                            tag="h1"
                                            className="hero-title"
                                            shuffleDirection="right"
                                            duration={0.6}
                                            animationMode="evenodd"
                                            shuffleTimes={1}
                                            ease="power2.out"
                                            stagger={0.05}
                                            threshold={0.1}
                                            triggerOnce={true}
                                            triggerOnHover={false}
                                            respectReducedMotion={true}
                                            onShuffleComplete={() => {}}
                                            colorFrom=""
                                            colorTo=""
                                        />
                                        <Shuffle
                                            text={`HOŞ GELDİNİZ! ${user?.username || 'KULLANICI'} LANDING PAGE'DASINIZ ŞUAN.`}
                                            tag="p"
                                            className="hero-subtitle"
                                            shuffleDirection="right"
                                            duration={0.8}
                                            animationMode="evenodd"
                                            shuffleTimes={1}
                                            ease="power2.out"
                                            stagger={0.03}
                                            threshold={0.1}
                                            triggerOnce={true}
                                            triggerOnHover={false}
                                            respectReducedMotion={true}
                                            onShuffleComplete={() => {}}
                                            colorFrom=""
                                            colorTo=""
                                        />
                                    </div>
                                </div>
                            </div>

                    {/* Sample content for scroll testing */}
                    <GlassSurface
                        width="100%"
                        height="auto"
                        borderRadius={20}
                        displace={15}
                        distortionScale={-200}
                        redOffset={5}
                        greenOffset={15}
                        blueOffset={25}
                        brightness={70}
                        opacity={0.85}
                        mixBlendMode="screen"
                        className="welcome-glass-surface"
                    >
                        <div className="content-section">
                            <h2 className="section-title">Hoş Geldiniz</h2>
                            <p className="section-text">
                                Bu modern landing page'de çeşitli özellikler ve araçlar bulabilirsiniz. 
                                Aşağıdaki içerikler scroll özelliğini test etmek için eklenmiştir.
                            </p>
                        </div>
                    </GlassSurface>

                            <GlassSurface
                                width="100%"
                                height="auto"
                                borderRadius={20}
                                displace={15}
                                distortionScale={-200}
                                redOffset={5}
                                greenOffset={15}
                                blueOffset={25}
                                brightness={70}
                                opacity={0.85}
                                mixBlendMode="screen"
                                className="features-glass-surface"
                            >
                                <div className="content-section">
                                    <h2 className="section-title">Özellikler</h2>
                                    <div className="features-grid">
                                        <div className="feature-card">
                                            <h3>Modern Tasarım</h3>
                                            <p>Liquid glass efektleri ve smooth animasyonlar</p>
                                        </div>
                                        <div className="feature-card">
                                            <h3>Responsive Layout</h3>
                                            <p>Tüm cihazlarda mükemmel görünüm</p>
                                        </div>
                                        <div className="feature-card">
                                            <h3>Interactive Elements</h3>
                                            <p>Hover efektleri ve dinamik içerik</p>
                                        </div>
                                        <div className="feature-card">
                                            <h3>Performance</h3>
                                            <p>Hızlı yükleme ve smooth geçişler</p>
                                        </div>
                                    </div>
                                </div>
                            </GlassSurface>

                            <GlassSurface
                                width="100%"
                                height="auto"
                                borderRadius={20}
                                displace={15}
                                distortionScale={-200}
                                redOffset={5}
                                greenOffset={15}
                                blueOffset={25}
                                brightness={70}
                                opacity={0.85}
                                mixBlendMode="screen"
                                className="stats-glass-surface"
                            >
                                <div className="stats-content">
                                    <h2 className="section-title">İstatistikler</h2>
                                    <div className="stats-grid">
                                        <div className="stat-card">
                                            <div className="stat-number">1,234</div>
                                            <div className="stat-label">Toplam Kullanıcı</div>
                                        </div>
                                        <div className="stat-card">
                                            <div className="stat-number">567</div>
                                            <div className="stat-label">Aktif Proje</div>
                                        </div>
                                        <div className="stat-card">
                                            <div className="stat-number">89</div>
                                            <div className="stat-label">Tamamlanan Görev</div>
                                        </div>
                                        <div className="stat-card">
                                            <div className="stat-number">45</div>
                                            <div className="stat-label">Bekleyen İşlem</div>
                                        </div>
                                    </div>
                                </div>
                            </GlassSurface>

                            <GlassSurface
                                width="100%"
                                height="auto"
                                borderRadius={20}
                                displace={15}
                                distortionScale={-200}
                                redOffset={5}
                                greenOffset={15}
                                blueOffset={25}
                                brightness={70}
                                opacity={0.85}
                                mixBlendMode="screen"
                                className="activities-glass-surface"
                            >
                                <div className="content-section">
                                    <h2 className="section-title">Son Aktiviteler</h2>
                                    <div className="activity-list">
                                        <div className="activity-item">
                                            <div className="activity-icon">📊</div>
                                            <div className="activity-content">
                                                <h4>Rapor Oluşturuldu</h4>
                                                <p>2 saat önce</p>
                                            </div>
                                        </div>
                                        <div className="activity-item">
                                            <div className="activity-icon">👤</div>
                                            <div className="activity-content">
                                                <h4>Yeni Kullanıcı Kaydı</h4>
                                                <p>4 saat önce</p>
                                            </div>
                                        </div>
                                        <div className="activity-item">
                                            <div className="activity-icon">📝</div>
                                            <div className="activity-content">
                                                <h4>Görev Güncellendi</h4>
                                                <p>6 saat önce</p>
                                            </div>
                                        </div>
                                        <div className="activity-item">
                                            <div className="activity-icon">🔔</div>
                                            <div className="activity-content">
                                                <h4>Sistem Bildirimi</h4>
                                                <p>8 saat önce</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </GlassSurface>

                            {/* Extra content for scroll testing */}
                            <GlassSurface
                                width="100%"
                                height="auto"
                                borderRadius={20}
                                displace={15}
                                distortionScale={-200}
                                redOffset={5}
                                greenOffset={15}
                                blueOffset={25}
                                brightness={70}
                                opacity={0.85}
                                mixBlendMode="screen"
                                className="extra-content-glass-surface"
                            >
                                <div className="content-section">
                                    <h2 className="section-title">Ek İçerik</h2>
                                    <p className="section-text">
                                        Bu bölüm scroll özelliğini test etmek için eklenmiştir. 
                                        Sayfayı aşağı kaydırarak dock'un sabit kalmasını görebilirsiniz.
                                    </p>
                                    <div className="scroll-indicator">
                                        <div className="scroll-text">↓ Scroll to see more content ↓</div>
                                    </div>
                                </div>
                            </GlassSurface>

                            {/* Additional Content Sections */}
                            <GlassSurface
                                width="100%"
                                height="auto"
                                borderRadius={20}
                                displace={15}
                                distortionScale={-200}
                                redOffset={5}
                                greenOffset={15}
                                blueOffset={25}
                                brightness={70}
                                opacity={0.85}
                                mixBlendMode="screen"
                                className="project-details-glass-surface"
                            >
                                <div className="content-section">
                                    <h2 className="section-title">Proje Detayları</h2>
                                    <div className="project-grid">
                                        <div className="project-card">
                                            <h3>Frontend Development</h3>
                                            <p>React ve modern web teknolojileri ile geliştirilmiş kullanıcı arayüzü</p>
                                            <div className="project-stats">
                                                <span className="stat">95% Tamamlandı</span>
                                                <span className="stat">12 Görev</span>
                                            </div>
                                        </div>
                                        <div className="project-card">
                                            <h3>Backend Integration</h3>
                                            <p>API entegrasyonu ve veri yönetimi sistemleri</p>
                                            <div className="project-stats">
                                                <span className="stat">78% Tamamlandı</span>
                                                <span className="stat">8 Görev</span>
                                            </div>
                                        </div>
                                        <div className="project-card">
                                            <h3>Database Design</h3>
                                            <p>Veritabanı tasarımı ve optimizasyonu</p>
                                            <div className="project-stats">
                                                <span className="stat">100% Tamamlandı</span>
                                                <span className="stat">5 Görev</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </GlassSurface>

                            <GlassSurface
                                width="100%"
                                height="auto"
                                borderRadius={20}
                                displace={15}
                                distortionScale={-200}
                                redOffset={5}
                                greenOffset={15}
                                blueOffset={25}
                                brightness={70}
                                opacity={0.85}
                                mixBlendMode="screen"
                                className="team-members-glass-surface"
                            >
                                <div className="content-section">
                                    <h2 className="section-title">Takım Üyeleri</h2>
                                    <div className="team-grid">
                                        <div className="team-member">
                                            <div className="member-avatar">👨‍💻</div>
                                            <h4>Ahmet Yılmaz</h4>
                                            <p>Frontend Developer</p>
                                            <div className="member-status online">Çevrimiçi</div>
                                        </div>
                                        <div className="team-member">
                                            <div className="member-avatar">👩‍💻</div>
                                            <h4>Ayşe Demir</h4>
                                            <p>Backend Developer</p>
                                            <div className="member-status busy">Meşgul</div>
                                        </div>
                                        <div className="team-member">
                                            <div className="member-avatar">👨‍🎨</div>
                                            <h4>Mehmet Kaya</h4>
                                            <p>UI/UX Designer</p>
                                            <div className="member-status online">Çevrimiçi</div>
                                        </div>
                                        <div className="team-member">
                                            <div className="member-avatar">👩‍🔬</div>
                                            <h4>Fatma Öz</h4>
                                            <p>QA Engineer</p>
                                            <div className="member-status away">Uzakta</div>
                                        </div>
                                    </div>
                                </div>
                            </GlassSurface>

                            <GlassSurface
                                width="100%"
                                height="auto"
                                borderRadius={20}
                                displace={15}
                                distortionScale={-200}
                                redOffset={5}
                                greenOffset={15}
                                blueOffset={25}
                                brightness={70}
                                opacity={0.85}
                                mixBlendMode="screen"
                                className="updates-glass-surface"
                            >
                                <div className="content-section">
                                    <h2 className="section-title">Son Güncellemeler</h2>
                                    <div className="updates-list">
                                        <div className="update-item">
                                            <div className="update-icon">🚀</div>
                                            <div className="update-content">
                                                <h4>Yeni Özellik Eklendi</h4>
                                                <p>Landing page'e Silk animasyon efekti eklendi</p>
                                                <span className="update-time">2 saat önce</span>
                                            </div>
                                        </div>
                                        <div className="update-item">
                                            <div className="update-icon">🐛</div>
                                            <div className="update-content">
                                                <h4>Hata Düzeltildi</h4>
                                                <p>Dock component'indeki render sorunu çözüldü</p>
                                                <span className="update-time">4 saat önce</span>
                                            </div>
                                        </div>
                                        <div className="update-item">
                                            <div className="update-icon">📱</div>
                                            <div className="update-content">
                                                <h4>Responsive İyileştirme</h4>
                                                <p>Mobil cihazlarda görünüm optimize edildi</p>
                                                <span className="update-time">6 saat önce</span>
                                            </div>
                                        </div>
                                        <div className="update-item">
                                            <div className="update-icon">🎨</div>
                                            <div className="update-content">
                                                <h4>Tasarım Güncellemesi</h4>
                                                <p>Renk paleti ve font'lar güncellendi</p>
                                                <span className="update-time">8 saat önce</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </GlassSurface>

                            <GlassSurface
                                width="100%"
                                height="auto"
                                borderRadius={20}
                                displace={15}
                                distortionScale={-200}
                                redOffset={5}
                                greenOffset={15}
                                blueOffset={25}
                                brightness={70}
                                opacity={0.85}
                                mixBlendMode="screen"
                                className="metrics-glass-surface"
                            >
                                <div className="content-section">
                                    <h2 className="section-title">Performans Metrikleri</h2>
                                    <div className="metrics-grid">
                                        <div className="metric-card">
                                            <div className="metric-icon">⚡</div>
                                            <div className="metric-value">98%</div>
                                            <div className="metric-label">Uptime</div>
                                        </div>
                                        <div className="metric-card">
                                            <div className="metric-icon">📊</div>
                                            <div className="metric-value">1.2s</div>
                                            <div className="metric-label">Ortalama Yükleme</div>
                                        </div>
                                        <div className="metric-card">
                                            <div className="metric-icon">👥</div>
                                            <div className="metric-value">2.4K</div>
                                            <div className="metric-label">Aktif Kullanıcı</div>
                                        </div>
                                        <div className="metric-card">
                                            <div className="metric-icon">💾</div>
                                            <div className="metric-value">45GB</div>
                                            <div className="metric-label">Veri Kullanımı</div>
                                        </div>
                                    </div>
                                </div>
                            </GlassSurface>

                            <GlassSurface
                                width="100%"
                                height="auto"
                                borderRadius={20}
                                displace={15}
                                distortionScale={-200}
                                redOffset={5}
                                greenOffset={15}
                                blueOffset={25}
                                brightness={70}
                                opacity={0.85}
                                mixBlendMode="screen"
                                className="notes-glass-surface"
                            >
                                <div className="content-section">
                                    <h2 className="section-title">Son Notlar</h2>
                                    <div className="notes-list">
                                        <div className="note-item">
                                            <h4>Önemli Toplantı</h4>
                                            <p>Yarın saat 14:00'da proje değerlendirme toplantısı yapılacak.</p>
                                            <div className="note-tags">
                                                <span className="tag urgent">Acil</span>
                                                <span className="tag meeting">Toplantı</span>
                                            </div>
                                        </div>
                                        <div className="note-item">
                                            <h4>Kod Review</h4>
                                            <p>Frontend component'lerinin kod review'ı tamamlandı.</p>
                                            <div className="note-tags">
                                                <span className="tag completed">Tamamlandı</span>
                                                <span className="tag code">Kod</span>
                                            </div>
                                        </div>
                                        <div className="note-item">
                                            <h4>Test Sonuçları</h4>
                                            <p>Unit test'lerin %95'i başarıyla geçti.</p>
                                            <div className="note-tags">
                                                <span className="tag success">Başarılı</span>
                                                <span className="tag test">Test</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </GlassSurface>

                            {/* Additional Content Sections */}
                            <GlassSurface
                                width="100%"
                                height="auto"
                                borderRadius={20}
                                displace={15}
                                distortionScale={-200}
                                redOffset={5}
                                greenOffset={15}
                                blueOffset={25}
                                brightness={70}
                                opacity={0.85}
                                mixBlendMode="screen"
                                className="tech-stack-glass-surface"
                            >
                                <div className="content-section">
                                    <h2 className="section-title">Teknoloji Stack</h2>
                                    <div className="tech-stack-grid">
                                        <div className="tech-item">
                                            <div className="tech-icon">⚛️</div>
                                            <h4>React</h4>
                                            <p>Modern UI kütüphanesi</p>
                                        </div>
                                        <div className="tech-item">
                                            <div className="tech-icon">🎨</div>
                                            <h4>Tailwind CSS</h4>
                                            <p>Utility-first CSS framework</p>
                                        </div>
                                        <div className="tech-item">
                                            <div className="tech-icon">📦</div>
                                            <h4>Vite</h4>
                                            <p>Hızlı build tool</p>
                                        </div>
                                        <div className="tech-item">
                                            <div className="tech-icon">🎭</div>
                                            <h4>Framer Motion</h4>
                                            <p>Animasyon kütüphanesi</p>
                                        </div>
                                        <div className="tech-item">
                                            <div className="tech-icon">🔧</div>
                                            <h4>TypeScript</h4>
                                            <p>Type-safe JavaScript</p>
                                        </div>
                                        <div className="tech-item">
                                            <div className="tech-icon">🌐</div>
                                            <h4>Three.js</h4>
                                            <p>3D grafik kütüphanesi</p>
                                        </div>
                                    </div>
                                </div>
                            </GlassSurface>

                            <GlassSurface
                                width="100%"
                                height="auto"
                                borderRadius={20}
                                displace={15}
                                distortionScale={-200}
                                redOffset={5}
                                greenOffset={15}
                                blueOffset={25}
                                brightness={70}
                                opacity={0.85}
                                mixBlendMode="screen"
                                className="timeline-glass-surface"
                            >
                                <div className="content-section">
                                    <h2 className="section-title">Geliştirme Süreci</h2>
                                    <div className="timeline">
                                        <div className="timeline-item">
                                            <div className="timeline-marker"></div>
                                            <div className="timeline-content">
                                                <h4>Proje Başlangıcı</h4>
                                                <p>Landing page projesi başlatıldı ve temel yapı oluşturuldu</p>
                                                <span className="timeline-date">1 hafta önce</span>
                                            </div>
                                        </div>
                                        <div className="timeline-item">
                                            <div className="timeline-marker"></div>
                                            <div className="timeline-content">
                                                <h4>UI/UX Tasarım</h4>
                                                <p>Kullanıcı arayüzü tasarımı ve wireframe'ler hazırlandı</p>
                                                <span className="timeline-date">5 gün önce</span>
                                            </div>
                                        </div>
                                        <div className="timeline-item">
                                            <div className="timeline-marker"></div>
                                            <div className="timeline-content">
                                                <h4>Frontend Geliştirme</h4>
                                                <p>React component'leri ve sayfa yapıları oluşturuldu</p>
                                                <span className="timeline-date">3 gün önce</span>
                                            </div>
                                        </div>
                                        <div className="timeline-item">
                                            <div className="timeline-marker"></div>
                                            <div className="timeline-content">
                                                <h4>Animasyon Entegrasyonu</h4>
                                                <p>Framer Motion ve Three.js animasyonları eklendi</p>
                                                <span className="timeline-date">2 gün önce</span>
                                            </div>
                                        </div>
                                        <div className="timeline-item">
                                            <div className="timeline-marker"></div>
                                            <div className="timeline-content">
                                                <h4>Test ve Optimizasyon</h4>
                                                <p>Performans testleri ve optimizasyonlar yapıldı</p>
                                                <span className="timeline-date">1 gün önce</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </GlassSurface>

                            <GlassSurface
                                width="100%"
                                height="auto"
                                borderRadius={20}
                                displace={15}
                                distortionScale={-200}
                                redOffset={5}
                                greenOffset={15}
                                blueOffset={25}
                                brightness={70}
                                opacity={0.85}
                                mixBlendMode="screen"
                                className="feedback-glass-surface"
                            >
                                <div className="content-section">
                                    <h2 className="section-title">Kullanıcı Geri Bildirimleri</h2>
                                    <div className="feedback-grid">
                                        <div className="feedback-card positive">
                                            <div className="feedback-icon">👍</div>
                                            <h4>Mükemmel Tasarım</h4>
                                            <p>"Landing page'in görsel tasarımı çok etkileyici ve kullanıcı dostu."</p>
                                            <div className="feedback-author">- Mehmet K.</div>
                                        </div>
                                        <div className="feedback-card positive">
                                            <div className="feedback-icon">🚀</div>
                                            <h4>Hızlı Performans</h4>
                                            <p>"Sayfa yükleme hızı ve animasyonlar çok smooth."</p>
                                            <div className="feedback-author">- Ayşe D.</div>
                                        </div>
                                        <div className="feedback-card neutral">
                                            <div className="feedback-icon">💡</div>
                                            <h4>Öneri</h4>
                                            <p>"Daha fazla özelleştirme seçeneği eklenebilir."</p>
                                            <div className="feedback-author">- Ali M.</div>
                                        </div>
                                    </div>
                                </div>
                            </GlassSurface>

                            <GlassSurface
                                width="100%"
                                height="auto"
                                borderRadius={20}
                                displace={15}
                                distortionScale={-200}
                                redOffset={5}
                                greenOffset={15}
                                blueOffset={25}
                                brightness={70}
                                opacity={0.85}
                                mixBlendMode="screen"
                                className="roadmap-glass-surface"
                            >
                                <div className="content-section">
                                    <h2 className="section-title">Gelecek Planları</h2>
                                    <div className="roadmap-grid">
                                        <div className="roadmap-item">
                                            <div className="roadmap-phase">Faz 1</div>
                                            <h4>Mobil Uygulama</h4>
                                            <p>React Native ile mobil versiyon geliştirme</p>
                                            <div className="roadmap-timeline">Q1 2024</div>
                                        </div>
                                        <div className="roadmap-item">
                                            <div className="roadmap-phase">Faz 2</div>
                                            <h4>AI Entegrasyonu</h4>
                                            <p>Yapay zeka destekli özellikler ekleme</p>
                                            <div className="roadmap-timeline">Q2 2024</div>
                                        </div>
                                        <div className="roadmap-item">
                                            <div className="roadmap-phase">Faz 3</div>
                                            <h4>Çoklu Platform</h4>
                                            <p>Desktop ve web uygulamaları için genişletme</p>
                                            <div className="roadmap-timeline">Q3 2024</div>
                                        </div>
                                    </div>
                                </div>
                            </GlassSurface>

                            <GlassSurface
                                width="100%"
                                height="auto"
                                borderRadius={20}
                                displace={15}
                                distortionScale={-200}
                                redOffset={5}
                                greenOffset={15}
                                blueOffset={25}
                                brightness={70}
                                opacity={0.85}
                                mixBlendMode="screen"
                                className="charts-glass-surface"
                            >
                                <div className="content-section">
                                    <h2 className="section-title">İstatistiksel Veriler</h2>
                                    <div className="charts-grid">
                                        <div className="chart-card">
                                            <h4>Haftalık Aktivite</h4>
                                            <div className="chart-placeholder">
                                                <div className="chart-bar" style={{height: '60%'}}></div>
                                                <div className="chart-bar" style={{height: '80%'}}></div>
                                                <div className="chart-bar" style={{height: '45%'}}></div>
                                                <div className="chart-bar" style={{height: '90%'}}></div>
                                                <div className="chart-bar" style={{height: '70%'}}></div>
                                                <div className="chart-bar" style={{height: '85%'}}></div>
                                                <div className="chart-bar" style={{height: '95%'}}></div>
                                            </div>
                                        </div>
                                        <div className="chart-card">
                                            <h4>Kullanıcı Dağılımı</h4>
                                            <div className="pie-chart">
                                                <div className="pie-slice slice-1"></div>
                                                <div className="pie-slice slice-2"></div>
                                                <div className="pie-slice slice-3"></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </GlassSurface>

                            <GlassSurface
                                width="100%"
                                height="auto"
                                borderRadius={20}
                                displace={15}
                                distortionScale={-200}
                                redOffset={5}
                                greenOffset={15}
                                blueOffset={25}
                                brightness={70}
                                opacity={0.85}
                                mixBlendMode="screen"
                                className="features-timeline-glass-surface"
                            >
                                <div className="content-section">
                                    <h2 className="section-title">Son Eklenen Özellikler</h2>
                                    <div className="features-timeline">
                                        <div className="feature-item">
                                            <div className="feature-badge new">YENİ</div>
                                            <h4>Silk Animasyon Efekti</h4>
                                            <p>WebGL shader'lar ile dinamik arka plan animasyonu</p>
                                        </div>
                                        <div className="feature-item">
                                            <div className="feature-badge new">YENİ</div>
                                            <h4>GlassSurface Component</h4>
                                            <p>İstatistikler paneli için gelişmiş cam efekti</p>
                                        </div>
                                        <div className="feature-item">
                                            <div className="feature-badge updated">GÜNCELLENDİ</div>
                                            <h4>Dock Navigation</h4>
                                            <p>Alt kısımda modern dock navigasyon sistemi</p>
                                        </div>
                                        <div className="feature-item">
                                            <div className="feature-badge updated">GÜNCELLENDİ</div>
                                            <h4>Responsive Design</h4>
                                            <p>Tüm cihazlarda optimize edilmiş görünüm</p>
                                        </div>
                                    </div>
                                </div>
                            </GlassSurface>

                            {/* Footer Content */}
                            <GlassSurface
                                width="100%"
                                height="auto"
                                borderRadius={20}
                                displace={15}
                                distortionScale={-200}
                                redOffset={5}
                                greenOffset={15}
                                blueOffset={25}
                                brightness={70}
                                opacity={0.85}
                                mixBlendMode="screen"
                                className="footer-glass-surface"
                            >
                                <div className="content-section footer-section">
                                    <h2 className="section-title">Proje Hakkında</h2>
                                    <p className="section-text">
                                        Bu landing page modern web teknolojileri kullanılarak geliştirilmiştir. 
                                        React, TypeScript, Tailwind CSS ve Three.js gibi güncel teknolojiler 
                                        ile oluşturulan bu proje, kullanıcı deneyimini ön planda tutarak 
                                        performanslı ve görsel olarak etkileyici bir arayüz sunmaktadır.
                                    </p>
                                    <div className="footer-links">
                                        <a href="#" className="footer-link">GitHub</a>
                                        <a href="#" className="footer-link">Dokümantasyon</a>
                                        <a href="#" className="footer-link">API Referansı</a>
                                        <a href="#" className="footer-link">Destek</a>
                                    </div>
                                </div>
                            </GlassSurface>
                        </div>
                    </div>
                </main>
            </div>
            
            {/* Scroll Indicator */}
            <div 
                className="scroll-indicator"
                style={{
                    transform: `translateY(calc(-50% + ${scrollProgress * 200}px))`
                }}
            >
                {Array.from({ length: 10 }, (_, index) => (
                    <div
                        key={index}
                        className={`scroll-dot ${currentSection === index ? 'active' : ''}`}
                        onClick={() => scrollToSection(index)}
                        title={`Section ${index + 1}`}
                    />
                ))}
            </div>

            
            {/* Dock Component */}
            <Dock />
        </div>
    );
}
