// ============================================================================
// CONFIGURATION FRONTEND - ABM EduPilote+
// Ce fichier centralise les variables de configuration pour l'interface utilisateur.
// ============================================================================

// IMPORTANT: Remplacez cette URL par l'URL de déploiement de votre script Google Apps Script.
const WEB_APP_URL = 'https://script.google.com/macros/s/AKfycbxItbOCU4lR9FVF2-3OlrOEJTKlO4fTpPygR3Pf3jxnyKftfzLDZTMguFZTe0kjBMjr2g/exec'; // REMPLACEZ PAR VOTRE URL

// Clés utilisées pour stocker les informations de session dans le navigateur.
const STUDENT_SESSION_KEY = 'abm_student_session_id';
const RESPONSABLE_SESSION_KEY = 'abm_responsable_session_token';
const ADMIN_SESSION_KEY = 'abm_admin_session_token';

// Noms des fichiers HTML pour la navigation.
const PAGE_URLS = {
    HOME: 'index.html',
    ADMIN: 'admin.html',
    RESPONSABLE: 'responsable.html',
    STUDENT: 'etudiant.html'
};
