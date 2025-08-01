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
    Route::get('/cursos', [CourseController::class, 'index']);        // Listar cursos
    Route::post('/cursos', [CourseController::class, 'store']);       // Criar novo curso
    Route::get('/cursos/{id}', [CourseController::class, 'show']);    // Ver curso específico
    Route::put('/cursos/{id}', [CourseController::class, 'update']);  // Atualizar curso
    Route::delete('/cursos/{id}', [CourseController::class, 'destroy']); // Deletar curso

    // Módulos (dentro de um curso)
    Route::post('/cursos/{id}/modulos', [ModuleController::class, 'store']);
    Route::get('/modulos/{id}', [ModuleController::class, 'show']);

    // Aulas (dentro de um módulo)
    Route::post('/modulos/{id}/aulas', [LessonController::class, 'store']);
    Route::get('/aulas/{id}', [LessonController::class, 'show']);
    Route::post('/aulas/{id}/assistir', [LessonController::class, 'marcarComoAssistida']);

    // Avaliações
    Route::post('/aulas/{id}/avaliacoes', [QuizController::class, 'store']);
    Route::post('/avaliacoes/{id}/responder', [QuizController::class, 'responder']);

    // Progresso do aluno
    Route::get('/meu-progresso', [ProgressController::class, 'index']);

    // Certificados
    Route::get('/cursos/{id}/certificado', [CertificationController::class, 'gerar']);
});

require __DIR__.'/settings.php';
require __DIR__.'/auth.php';
