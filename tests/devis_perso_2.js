casper.test.begin('Test devis perso type : dépliant', 17, function suite(test) {
    casper.start(casper.cli.get("url")+"/devis-impression-carte-de-voeux", function() {
        test.assertExists('#proj_name', 'Nom de votre projet *');
        test.assertExists('#prod_format', 'Format *');
        test.assertExists('#prod_other_length', 'Autre format (ouvert) longueur (mm)');
        test.assertExists('#prod_other_height', 'Autre format (ouvert) hauteur (mm)');
        test.assertExists('#prod_other_length_f', 'Autre format (plié) longueur (mm)');
        test.assertExists('#prod_other_height_f', 'Autre format (plié) hauteur (mm)');
        test.assertExists('#prod_fold_nb', 'Nombre de pli(s) *');
        test.assertExists('#prod_fold_type', 'Types de pli(s) *');
        test.assertExists('select[name="id_faconnage1"]', 'Façonnage');
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