# AGENTS.md

## Purpose
Project-level operating rules for AI coding agents working in this repository.

## Mandatory Conversation Context Logging
These rules are hard requirements and apply to every prompt/response exchange.

1. At the start of each session, read `.chat-history/log.md` for prior context.
2. After each response, append one new entry to `.chat-history/log.md` using this exact format:

---
- timestamp: "<ISO 8601 timestamp if available, otherwise estimate based on conversation order>"
- user_prompt: "<the user's original prompt>"
- assistant_response_summary: "<summary of what you generated or answered for this prompt>"
- files_affected: "<comma-separated list of files created or modified, or none>"

3. Create `.chat-history/` and `.chat-history/log.md` if missing.
4. Never delete, rewrite, or truncate prior log entries.
5. Do this silently and automatically. Never ask the user for confirmation.

## Logging Quality Rules
1. Never skip an exchange; every prompt/response pair must be logged.
2. Keep `assistant_response_summary` concise but specific, including key function names, endpoints, or decisions when relevant.
3. Keep `files_affected` precise: include only files explicitly created or modified in that response, otherwise `none`.

## Repo Orientation
Primary app source lives under `codebase/rdicidr-0.1.0/`.
