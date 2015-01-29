casper.test.begin('Test devis perso type : feuillet', 12, function suite(test) {
    casper.start(casper.cli.get("url")+"/devis-impression-cartes-de-fidelite", function() {
        test.assertExists('#proj_name', 'Nom de votre projet *');
        test.assertExists('#prod_format', 'Format *');
        test.assertExists('#prod_other_length', 'Autre format longueur (mm)');
        test.assertExists('#prod_other_height', 'Autre format hauteur (mm)');
        test.assertExists('#prod_paper', 'Papier *');
        test.assertExists('#prod_other_paper', 'Autre papier');
        test.assertExists('#prod_recto_color', 'Recto impression (couleur) *');
        test.assertExists('select[name="recto_finition1"]', 'Recto finition');
        test.assertExists('select[name="verso_ncoul"]', 'Verso impression (couleur)');
        test.assertExists('select[name="verso_finition1"]', 'Verso finition');
        test.assertExists('#prod_quantity', 'Quantité *');
        test.assertExists('#prod_descriptive', 'Descriptif');
    });

    casper.run(function() {
        test.done();
    });
});