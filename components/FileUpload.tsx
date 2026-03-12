'use client';

import React, { useState, useCallback } from 'react';

interface FileUploadProps {
  onFileUploaded: (content: string) => void;
}

export default function FileUpload({ onFileUploaded }: FileUploadProps) {
  const [isDragging, setIsDragging] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);

  const handleFile = useCallback(async (file: File) => {
    if (!file.name.endsWith('.htm') && !file.name.endsWith('.html')) {
      alert('Veuillez sélectionner un fichier HTML (.htm ou .html)');
      return;
    }

    setIsProcessing(true);
    
    try {
      const content = await file.text();
      onFileUploaded(content);
    } catch (error) {
      console.error('Erreur lors de la lecture du fichier:', error);
      alert('Erreur lors de la lecture du fichier');
    } finally {
      setIsProcessing(false);
    }
  }, [onFileUploaded]);

  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);

    const file = e.dataTransfer.files[0];
    if (file) {
      handleFile(file);
    }
  }, [handleFile]);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const handleDragLeave = useCallback(() => {
    setIsDragging(false);
  }, []);

  const handleFileInput = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      handleFile(file);
    }
  }, [handleFile]);

  return (
    <div className="w-full">
      <div
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        className={`border-2 border-dashed rounded-lg p-12 text-center transition-colors ${
          isDragging 
            ? 'border-blue-500 bg-blue-50' 
            : 'border-gray-300 bg-white hover:border-gray-400'
        }`}
      >
        {isProcessing ? (
          <div className="flex flex-col items-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500 mb-4"></div>
            <p className="text-gray-600">Traitement du fichier...</p>
          </div>
        ) : (
          <>
            <svg
              className="mx-auto h-12 w-12 text-gray-400 mb-4"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 48 48"
            >
              <path
                d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            
            <div className="mb-4">
              <label
                htmlFor="file-upload"
                className="cursor-pointer inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
              >
                Choisir un fichier
              </label>
              <input
                id="file-upload"
                type="file"
                className="hidden"
                accept=".htm,.html"
                onChange={handleFileInput}
              />
            </div>
            
            <p className="text-sm text-gray-600 mb-1">
              ou glissez-déposez votre fichier StrategyTester.htm
            </p>
            <p className="text-xs text-gray-500">
              Formats acceptés: .htm, .html
            </p>
          </>
        )}
      </div>

      <div className="mt-6 bg-blue-50 rounded-lg p-4">
        <h3 className="text-sm font-semibold text-blue-900 mb-2">📋 Comment obtenir votre fichier?</h3>
        <ol className="text-sm text-blue-800 space-y-1 list-decimal list-inside">
          <li>Ouvrez MetaTrader 4</li>
          <li>Allez dans "View" → "Strategy Tester" (ou Ctrl+R)</li>
          <li>Lancez votre backtest</li>
          <li>Cliquez droit sur un résultat → "Save as Report"</li>
          <li>Choisissez le format HTML et sauvegardez</li>
          <li>Glissez-déposez le fichier ici</li>
        </ol>
      </div>
    </div>
  );
}
