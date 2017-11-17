/*! HTML5 Shiv v3.6.1 | @afarkas @jdalton @jon_neal @rem | MIT/GPL2 Licensed */
;(function(window, document) {
/*jshint evil:true */
  /** Preset options */
  var options = window.html5 || {};

  /** Used to skip problem elements */
  var reSkip = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$ i;="" **="" not="" all="" elements="" can="" be="" cloned="" in="" ie="" var="" saveclones="/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i;" detect="" whether="" the="" browser="" supports="" default html5="" styles="" *="" supportshtml5styles;="" name="" of="" expando,="" to="" work="" with="" multiple documents="" or="" re-shiv="" one="" document="" expando="_html5shiv" ;="" id="" for="" expanid="0;" cached="" data="" each="" expandodata="{};" unknown="" supportsunknownelements;="" (function()="" {="" try="" a="document.createElement('a');" a.innerhtml="<xyz></xyz>" if="" hidden property="" is="" implemented="" we="" assume,="" that="" basic="" supportshtml5styles="('hidden'" a);="" supportsunknownelements="a.childNodes.length" =="1" ||="" assign="" false="" positive="" unable="" shiv="" (document.createelement)('a');="" frag="document.createDocumentFragment();" return="" (="" typeof="" frag.clonenode="=" 'undefined'="" frag.createdocumentfragment="=" frag.createelement="=" );="" }());="" }="" catch(e)="" *--------------------------------------------------------------------------*="" creates="" style="" sheet="" given="" css="" text="" and="" adds="" it="" document.="" @private="" @param="" {document}="" ownerdocument="" {string}="" csstext="" text.="" @returns="" {stylesheet}="" element.="" function="" addstylesheet(ownerdocument,="" csstext)="" p="ownerDocument.createElement('p')," parent="ownerDocument.getElementsByTagName('head')[0]" ownerdocument.documentelement;="" p.innerhtml="x<style>" +="" '<="">';
    return parent.insertBefore(p.lastChild, parent.firstChild);
  }

  /**
   * Returns the value of `html5.elements` as an array.
   * @private
   * @returns {Array} An array of shived element node names.
   */
  function getElements() {
    var elements = html5.elements;
    return typeof elements == 'string' ? elements.split(' ') : elements;
  }
  
    /**
   * Returns the data associated to the given document
   * @private
   * @param {Document} ownerDocument The document.
   * @returns {Object} An object of data.
   */
  function getExpandoData(ownerDocument) {
    var data = expandoData[ownerDocument[expando]];
    if (!data) {
        data = {};
        expanID++;
        ownerDocument[expando] = expanID;
        expandoData[expanID] = data;
    }
    return data;
  }

  /**
   * returns a shived element for the given nodeName and document
   * @memberOf html5
   * @param {String} nodeName name of the element
   * @param {Document} ownerDocument The context document.
   * @returns {Object} The shived element.
   */
  function createElement(nodeName, ownerDocument, data){
    if (!ownerDocument) {
        ownerDocument = document;
    }
    if(supportsUnknownElements){
        return ownerDocument.createElement(nodeName);
    }
    if (!data) {
        data = getExpandoData(ownerDocument);
    }
    var node;

    if (data.cache[nodeName]) {
        node = data.cache[nodeName].cloneNode();
    } else if (saveClones.test(nodeName)) {
        node = (data.cache[nodeName] = data.createElem(nodeName)).cloneNode();
    } else {
        node = data.createElem(nodeName);
    }

    // Avoid adding some elements to fragments in IE < 9 because
    // * Attributes like `name` or `type` cannot be set/changed once an element
    //   is inserted into a document/fragment
    // * Link elements with `src` attributes that are inaccessible, as with
    //   a 403 response, will cause the tab/window to crash
    // * Script elements appended to fragments will execute when their `src`
    //   or `text` property is set
    return node.canHaveChildren && !reSkip.test(nodeName) ? data.frag.appendChild(node) : node;
  }

  /**
   * returns a shived DocumentFragment for the given document
   * @memberOf html5
   * @param {Document} ownerDocument The context document.
   * @returns {Object} The shived DocumentFragment.
   */
  function createDocumentFragment(ownerDocument, data){
    if (!ownerDocument) {
        ownerDocument = document;
    }
    if(supportsUnknownElements){
        return ownerDocument.createDocumentFragment();
    }
    data = data || getExpandoData(ownerDocument);
    var clone = data.frag.cloneNode(),
        i = 0,
        elems = getElements(),
        l = elems.length;
    for(;i</|^(?:button|map|select|textarea|object|iframe|option|optgroup)$>