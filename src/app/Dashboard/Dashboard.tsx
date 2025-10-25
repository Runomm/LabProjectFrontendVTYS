import React, { useState, useEffect } from "react";
import Dock from "../../components/Dock";
import { useAuth } from "../../contexts/AuthContext";
import "./Dashboard.css";


export default function Dashboard() {
    const {user,isLoading}=useAuth();

    return (
        <div className="dashboard-container">
            {/* Beams Background */}
            <div className="beams-background">
                <div className="beam beam-1"></div>
                <div className="beam beam-2"></div>
                <div className="beam beam-3"></div>
                <div className="beam beam-4"></div>
                <div className="beam beam-5"></div>
            </div>

            {/* Main Content Area with scroll */}
            <div className="dashboard-main-content">
                <main className="dashboard-main">
                    {/* Content Container with proper spacing */}
                    <div className="dashboard-content">
                        {/* Header Section */}
                        <div className="dashboard-header">
                            <h1 className="dashboard-title">
                                Dashboard
                            </h1>
                            <p className="dashboard-subtitle">
                                Hoş geldiniz! {user?.username || 'Kullanıcı'} Dashboard'dasınız şuan.
                            </p>
                        </div>
                        
                        {/* Dashboard Content Area */}
                        <div className="dashboard-content-area">
                            {/* Sample content for scroll testing */}
                            <div className="content-section">
                                <h2 className="section-title">Hoş Geldiniz</h2>
                                <p className="section-text">
                                    Bu modern dashboard'da çeşitli özellikler ve araçlar bulabilirsiniz. 
                                    Aşağıdaki içerikler scroll özelliğini test etmek için eklenmiştir.
                                </p>
                            </div>

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

                            <div className="content-section">
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

                            {/* Extra content for scroll testing */}
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
                        </div>
                    </div>
                </main>
            </div>
            
            {/* Dock Component */}
            <Dock />
        </div>
    );
}
