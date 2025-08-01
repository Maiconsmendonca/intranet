<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('welcome');
})->name('home');

Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('dashboard', function () {
        return Inertia::render('dashboard');
    })->name('dashboard');
});

// Agrupamento para LMS
Route::prefix('lms')->middleware(['auth'])->group(function () {

    // Cursos
    Route::get('/cursos', [CursoController::class, 'index']);        // Listar cursos
    Route::post('/cursos', [CursoController::class, 'store']);       // Criar novo curso
    Route::get('/cursos/{id}', [CursoController::class, 'show']);    // Ver curso específico
    Route::put('/cursos/{id}', [CursoController::class, 'update']);  // Atualizar curso
    Route::delete('/cursos/{id}', [CursoController::class, 'destroy']); // Deletar curso

    // Módulos (dentro de um curso)
    Route::post('/cursos/{id}/modulos', [ModuloController::class, 'store']);
    Route::get('/modulos/{id}', [ModuloController::class, 'show']);

    // Aulas (dentro de um módulo)
    Route::post('/modulos/{id}/aulas', [AulaController::class, 'store']);
    Route::get('/aulas/{id}', [AulaController::class, 'show']);
    Route::post('/aulas/{id}/assistir', [AulaController::class, 'marcarComoAssistida']);

    // Avaliações
    Route::post('/aulas/{id}/avaliacoes', [AvaliacaoController::class, 'store']);
    Route::post('/avaliacoes/{id}/responder', [AvaliacaoController::class, 'responder']);

    // Progresso do aluno
    Route::get('/meu-progresso', [ProgressoController::class, 'index']);

    // Certificados
    Route::get('/cursos/{id}/certificado', [CertificadoController::class, 'gerar']);
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
