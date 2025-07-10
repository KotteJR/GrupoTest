# 📁 RAGdocuments Folder

Esta carpeta es donde debes colocar todos los documentos que quieres que el asistente IA pueda consultar.

## 📄 Tipos de archivos soportados

- **JSON** (`.json`) - Archivos de datos estructurados
- **PDF** (`.pdf`) - Documentos PDF 
- **Texto** (`.txt`, `.md`) - Archivos de texto plano

## 🏗️ Estructura recomendada

```
RAGdocuments/
├── servicios/
│   ├── wifi-solutions.json
│   ├── iptv-systems.json
│   └── telephony.json
├── faq/
│   ├── general-faq.json
│   └── technical-faq.json
├── documentation/
│   ├── user-manual.pdf
│   └── technical-specs.pdf
└── policies/
    ├── privacy-policy.txt
    └── terms-of-service.md
```

## 🔄 Carga automática

Los documentos se cargan automáticamente cuando:
- Se inicia el servidor de desarrollo
- Se hace una consulta al asistente IA
- Se llama al endpoint `/api/initialize`

## 📋 Ejemplos

Revisa la carpeta `examples/` para ver formatos de ejemplo de documentos JSON.

## 🚀 Después de añadir documentos

1. Coloca tus archivos en esta carpeta
2. Reinicia el servidor: `npm run dev`
3. O llama al endpoint: `GET /api/initialize`
4. ¡El asistente ya puede consultar tus documentos!

## 📊 Verificación

Puedes verificar que los documentos se cargaron correctamente visitando `/admin` en tu navegador. 