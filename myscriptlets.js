(() => {
	'use strict';
	const vanha = findElementById("sb_form_q");
	let uus = createElement("textarea");

	Array.from(vanha.attributes).forEach(attribute => {
    		uus.setAttribute(
      		attribute.nodeName === 'id' ? 'data-id' : attribute.nodeName,
      		attribute.nodeValue,
    		);
  	});

	vanha.replaceWith(uus);
})();
