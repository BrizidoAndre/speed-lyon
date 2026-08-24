function uploadFile() {
    const fileInput = document.getElementById('fileInput');
    const progressBar = document.getElementById('progress-bar');
    const status = document.getElementById('status');

    if (fileInput.files.length === 0) {
        alert('Por favor, selecione um arquivo!');
        return;
    }
    const file = fileInput.files[0];
    const formData = new FormData();
    formData.append('file', file);

    const xhr = new XMLHttpRequest();

    xhr.upload.onprogress = function (event) {
        if (event.lengthComputable) {
            const percentComplete = (event.loaded / event.total) * 100;
            progressBar.style.width = percentComplete + "%";
            status.innerText = `Enviando: ${Math.round(percentComplete)}%`
        }
    };

    xhr.onload = function () {
        if (xhr.status === 200) {
            status.innerText = 'Upload concluído com sucesso!';
            progressBar.style.width = 100 + "%";
        } else {
            status.innerText = 'Erro ao enviar o arquivo';
        }
    }

    xhr.open('POST', "upload.php", true);
    xhr.send(formData);
}