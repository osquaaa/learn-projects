// Получаем доступ к элементам
const video = document.getElementById('video');
const canvas = document.getElementById('canvas');
const photo = document.getElementById('photo');
const captureButton = document.getElementById('capture');

// Настраиваем камеру
navigator.mediaDevices
  .getUserMedia({ video: true })
  .then((stream) => {
    video.srcObject = stream;
  })
  .catch((error) => {
    console.error('Ошибка доступа к камере:', error);
  });

// Добавляем обработчик для кнопки съемки
captureButton.addEventListener('click', () => {
  const context = canvas.getContext('2d');
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;

  // Рисуем кадр из видео на canvas
  context.drawImage(video, 0, 0, canvas.width, canvas.height);

  // Получаем изображение в формате data URL
  const imageData = canvas.toDataURL('image/png');
  photo.src = imageData;
  photo.style.display = 'block';
});