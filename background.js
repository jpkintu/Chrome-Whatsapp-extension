chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
        id: "sendWhatsappMessage",
        title: "Send WhatsApp Message",
        contexts: ["selection"]
    });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
    if (info.menuItemId === "sendWhatsappMessage") {
        const phoneNumber = info.selectionText.trim();
        const whatsappLink = `https://wa.me/${phoneNumber}`;
        chrome.tabs.create({ url: whatsappLink });
    }
});
