// You can edit this file
function navigate(pageUrl, pageTitle, contentUrl) {
    loadNewPageContent(contentUrl);
    window.history.pushState({page: pageTitle}, pageTitle, pageUrl);
}

async function loadNewPageContent(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        document.getElementById('main-content').innerHTML = await response.text();
    } catch (error) {
        console.error('There has been a problem with your fetch operations:', error)
    }
}