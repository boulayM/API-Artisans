<?php
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $data = json_decode(file_get_contents("php://input"), true);

    $to = $data['email'];
    $subject = "Sujet de l'e-mail";
    $message = "Ceci est un message envoyé dynamiquement.";
    $headers = "From: votre-email@example.com";

    if (mail($to, $subject, $message, $headers)) {
        echo json_encode(["success" => true, "message" => "E-mail envoyé avec succès."]);
    } else {
        echo json_encode(["success" => false, "message" => "Échec de l'envoi de l'e-mail."]);
    }
} else {
    echo json_encode(["success" => false, "message" => "Méthode non autorisée."]);
}
?>
