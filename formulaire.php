<?php

// Route pour afficher la boîte de réception
Route::get('/inbox', function () {
    $user = Auth::user();
    $emails = $user->emails()->where('folder_id', 1)->paginate(10);
    return view('inbox', compact('emails'));
});

// Route pour afficher un email
Route::get('/email/{id}', function ($id) {
    $email = Email::findOrFail($id);
    return view('email', compact('email'));
});

// Route pour envoyer un email
Route::post('/send-email', function (Request $request) {
    $user = Auth::user();
    $data = $request->all();
    $data['from'] = $user->email;
    $data['folder_id'] = 2;
    $email = Email::create($data);
    return redirect('/inbox');
});
?>