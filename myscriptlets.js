(() => {
    'use strict';
    const vanha = document.getElementById("sb_form_q");
    let uus = document.createElement("textarea");

    Array.from(vanha.attributes).forEach(attribute => {
            uus.setAttribute(
              attribute.nodeName === 'id' ? 'data-id' : attribute.nodeName,
              attribute.nodeValue,
            );
      });

    vanha.replaceWith(uus);
})();
