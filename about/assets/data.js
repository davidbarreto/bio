/**
 * data.js — Single source of truth for david_bf's portfolio.
 * Edit this file to update all themes at once.
 */
const PORTFOLIO = {

    // ── Identity ───────────────────────────────────────────────
    name: "David",
    handle: "david_bf",
    fullName: "David Barreto Ferreira",
    title: "Software Engineer",
    location: "Porto, Portugal",
    email: "hello@davidbf.com",

    // ── Bio ────────────────────────────────────────────────────
    // Each string is a paragraph.
    bio: [
        "Hey. I'm David — or david_bf online. The BF stands for Barreto Ferreira, not best friend. Although I am pretty great.",
        "Software engineer with a CS background and a soft spot for distributed systems, clean code, and making machines do the heavy lifting.",
        "When I'm not shipping code, I'm playing guitar, watching movies or traveling — probably all at the same time in some unholy multithreaded process.",
    ],

    // Short one-liner used in compact views
    tagline: "CS master's · Backend · Distributed Systems · Algorithms · AI",

    // ── What I'm currently doing ────────────────────────────────
    currently: [
        "Building an AI personal assistant",
        "Creating a NES emulator with Rust",
    ],
    currentlyNote: "Yes, I talk to my computer. It talks back. We are colleagues now.",

    // ── Skills ─────────────────────────────────────────────────
    skills: {
        languages: ["Java", "Python", "Rust", "Go", "SQL"],
        areas: ["Distributed Systems", "System Design", "Backend Engineering", "Algorithms", "Machine Learning", "LLMs"],
        tools: ["Linux", "Git", "Microservices", "Spring Boot", "Apache Camel", "IntelliJ", "VS Code", "FastAPI", "pandas"],
    },

    // ── Social links ────────────────────────────────────────────
    social: [
        { label: "GitHub", url: "https://github.com/davidbarreto", note: "code & projects" },
        { label: "LinkedIn", url: "https://www.linkedin.com/in/david-ferreira-7283462b/", note: "professional profile" },
    ],

    // ── Competitive programming ─────────────────────────────────
    competitive: [
        { label: "LeetCode", handle: "david_bf", url: "https://leetcode.com/u/david_bf/", color: "#ffa116" },
        { label: "HackerRank", handle: "david_brto", url: "https://www.hackerrank.com/profile/david_brto", color: "#00c853" },
        { label: "Codeforces", handle: "david_bf", url: "https://codeforces.com/profile/david_bf", color: "#f85149" },
        { label: "CodeChef", handle: "david_bf", url: "https://www.codechef.com/users/david_bf", color: "#FFB852" },
        { label: "Topcoder", handle: "david_bf", url: "https://profiles.topcoder.com/david_bf", color: "#00aee0" },
        { label: "SPOJ", handle: "david_bf", url: "https://www.spoj.com/status/david_bf/", color: "#d2a8ff" },
        { label: "UVa Online Judge", handle: "#26642", url: "https://onlinejudge.org/index.php?option=com_onlinejudge&Itemid=19&page=show_authorstats&userid=26642", color: "#7d8590" },
    ],

    // ── Projects ────────────────────────────────────────────────
    // Add your projects here when ready. Each theme will pick these up automatically.
    projects: [
        // { label: "My AI Assistant", url: "https://github.com/davidbarreto/...", desc: "Self-hosted personal assistant with n8n + Claude + Ollama" },
        // { label: "Project 2",       url: "https://github.com/davidbarreto/...", desc: "..." },
    ],

    // ── Neofetch-style extras (used by CLI theme) ───────────────
    neofetch: {
        OS: "All (but <3 Unix-like OS's)",
        Language: "Whatever which gets the job done",
        Memory: "∞ (coffee-powered)",
        Uptime: "since graduation",
        Location: "Porto, Portugal 🇵🇹",
        Music: "playing guitar @ 1am",
    },
};