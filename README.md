# Exemple de chat avec Django et Channels

Cet exemple a pour objectif de présenter un exemple minimal de chat en utilisant django-channels et les
websockets.

## Utilisation

L'installation des dépendances se fait à l'aide de pipenv. Une fois que ce repo a été clone à partir de github,
il suffit d'ouvrir un terminal à la racine du projet et d'exécuter les commandes suivantes:
- `pipenv install --dev`
- `pipenv shell` pour activer l'environnement virtuel
- `python manage.py migrate` pour initialiser la base de données
- `python manage.py createsuperuser`
- `python manage.py runserver` pour exécuter le serveur de développement

Une fois que le serveur de développement est lancé, il suffit d'ouvrir un navigateur et de se rendre à la racine
du site à l'addresse localhost:8000. La chat room est à l'adresse http://localhost:8000/chat/.