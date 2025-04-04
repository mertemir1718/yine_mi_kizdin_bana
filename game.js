<!DOCTYPE html>
<html lang="tr">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Dayak Oyunu</title>
  <style>
    /* Boks eldiveni imleci */
    body {
      cursor: url('boks.png') 16 16, auto; /* 'boks.png' görselini aynı klasörde kullanıyoruz */
      font-family: Arial, sans-serif;  /* Yazı tipi belirleme */
    }

    /* Oyun alanı */
    #gameArea {
      text-align: center;
      margin-top: 50px;
      position: relative;
    }

    /* Görsel boyutunu büyütme */
    img {
      width: 400px;  /* Görselin boyutunu büyüttük */
      height: 400px;
      transition: all 0.3s ease;
      position: relative;
    }

    /* Tıklama efekti */
    .hit