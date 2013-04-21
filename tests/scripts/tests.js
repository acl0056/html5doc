// !Preferences
window.gkdebug = true;
module("html5doc");

test("Html5Doc", function() {
	
	// Create doc
	var doc = new Html5Doc("test", "docs");

	equal(doc.name, "test", "name property");
	equal(doc.store, "docs", "store property");
	
	doc.text = "I am a doc. Blah, blah, blah.";
	
	// Test save
	var saved = Html5Doc.saveDocument(doc);
	equal(saved, true, "saved doc");
	
	// Test names
	var doc2 = new Html5Doc("test2", "docs");
	Html5Doc.saveDocument(doc2);
	var names = Html5Doc.getDocumentNamesForStore("docs");
	var testObj = {};
	for (var i in names)
		testObj[names[i]] = true;
	equal(testObj["test"], true, "test names");
	equal(testObj["test2"], true, "test names");
	
	// Test retrieval
	var docTester = Html5Doc.getDocument("test", "docs");
	deepEqual(docTester, doc, "doc and retrieved doc match");
	
	// Test remove doc
	var removed = Html5Doc.removeDocument(doc);
	equal(removed, true, "remove doc");
	var docTester = Html5Doc.getDocument("test", "docs");
	equal(docTester, undefined, "doc removed should be undefined");
	
	// test detect
	var detect = Html5Doc.detect();
	equal(detect, true, "detect doc");
	
	
});

