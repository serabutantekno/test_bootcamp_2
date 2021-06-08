![](https://github.com/serabutantekno/test_bootcamp_2/blob/master/app_oauth/flow_diagram.png)

# Alur Aplikasi
1. Jalankan app `npm run dev`
2. Buka dari browser `http://localhost:3000`
3. Klik login dengan Google
4. Server localhost akan mengirimkan request data user yang akan login ke Server Google
5. Localhost menerima data user dari Google
6. Localhost mengecek apakah ID Google dari user tersebut telah ada di DB, jika belum, data user akan disimpan. Jika sudah ada, tidak disimpan.
7. Selesai 
