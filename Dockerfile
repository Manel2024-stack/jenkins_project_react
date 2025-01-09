# Étape 1 : Utiliser l'image de Nginx pour servir les fichiers statiques
FROM nginx:alpine

# Copier les fichiers générés lors du build dans le répertoire Nginx
COPY /build /usr/share/nginx/html

# Exposer le port 80 pour accéder à l'application
EXPOSE 80

# Lancer Nginx pour servir l'application
CMD ["nginx", "-g", "daemon off;"]
