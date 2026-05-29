# AGENTS.md — Learn Qwik

## Projet

Learn Qwik est une plateforme de contenu autour de Qwik, du développement web, de l’IA et des workflows de développement modernes.

Stack principale :

- Qwik / Qwik City
- TypeScript
- Vite
- Tailwind CSS
- Supabase
- Vercel Edge

## Serveur local

Le propriétaire lance généralement le serveur local avant une tâche Codex.

Considère par défaut que le site est disponible sur http://localhost:5173.

Ne lance pas toi-même un nouveau serveur de développement sauf demande explicite.

Si un aperçu navigateur est nécessaire et que http://localhost:5173 ne répond pas, indique-le au propriétaire et attends qu’il lance le serveur.

## Code

Respecte l’organisation actuelle du dépôt et les conventions existantes.

Avant d’ajouter un fichier, un dossier ou une abstraction, vérifie s’il existe déjà une convention équivalente.

Évite les refactors globaux pendant une tâche ciblée.

Ne modifie pas les scripts npm sans validation explicite.

## Qwik

Respecte les patterns Qwik existants.

Évite les réflexes React non adaptés à Qwik.

Privilégie :

- composants Qwik simples ;
- TypeScript clair ;
- JavaScript client minimal ;
- logique serveur quand elle est plus adaptée.

## Supabase

Ne modifie pas les types Supabase générés manuellement.

Si le schéma Supabase doit changer, propose un script SQL clair et indique les impacts.

Ne mets jamais de secret, service role key ou variable sensible dans le code client.

Respecte les règles d’authentification, d’autorisation et de RLS existantes.

## Contenu et SEO

Pour les pages publiques :

- préserver les routes existantes ;
- garder une structure HTML sémantique ;
- préserver ou améliorer les métadonnées SEO ;
- éviter le contenu dupliqué inutile.

## Sécurité et qualité

Ne fais pas confiance aux données utilisateur sans validation.

Si tu touches au rendu HTML ou Markdown, conserve une sanitization stricte.

N’utilise pas any ou as any pour masquer une erreur TypeScript sans justification claire.

N’ajoute pas de dépendance sans justification claire.

## Fin de tâche

À la fin, indique uniquement :

- fichiers modifiés ;
- résumé des changements ;
- commandes exécutées ;
- vérifications faites ;
- risques ou points à valider.
