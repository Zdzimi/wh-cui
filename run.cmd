set /p ip=Podaj ip serwera aplikacji rest:
echo {"ip":"%ip%"} > src/assets/properties.json
npx nx run warehouse-cui:serve -o --host 0.0.0.0
