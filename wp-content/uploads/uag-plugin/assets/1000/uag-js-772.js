document.addEventListener("DOMContentLoaded", function(){ window.addEventListener( 'load', function() {
	UAGBButtonChild.init( '.uagb-block-fc8358f0' );
});
var ssLinksParent = document.querySelector( '.uagb-block-69983425' );
ssLinksParent?.addEventListener( 'keyup', function ( e ) {
var link = e.target.closest( '.uagb-ss__link' );
if ( link && e.keyCode === 13 ) {
	handleSocialLinkClick( link );
}
});

ssLinksParent?.addEventListener( 'click', function ( e ) {
var link = e.target.closest( '.uagb-ss__link' );
if ( link ) {
	handleSocialLinkClick( link );
}
});

function handleSocialLinkClick( link ) {
var social_url = link.dataset.href;
var target = "";
if ( social_url == "mailto:?body=" ) {
	target = "_self";
}
var request_url = "";
if ( social_url.indexOf("/pin/create/link/?url=") !== -1 ) {
	request_url = social_url + encodeURIComponent( window.location.href ) + "&media=" + '';
} else {
	request_url = social_url + encodeURIComponent( window.location.href );
}
window.open( request_url, target );
}
window.addEventListener( 'load', function() {
	UAGBButtonChild.init( '.uagb-block-944305bb' );
});
window.addEventListener( 'load', function() {
	UAGBButtonChild.init( '.uagb-block-0cdb3a46' );
});
window.addEventListener( 'load', function() {
	UAGBButtonChild.init( '.uagb-block-779f5197' );
});
window.addEventListener( 'load', function() {
	UAGBButtonChild.init( '.uagb-block-9252c31c' );
});
 });