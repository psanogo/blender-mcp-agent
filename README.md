graph TD
    subgraph User
        A[User via Terminal]
    end

    subgraph "AGNO Agent Studio (Python App)"
        B[appF.py]
        C[Coordinator Agent]
        D[Specialist Agents Team]
        E[Session & Memory DBs]

        A -- "Natural Language Task" --> B
        B -- "Initializes & Connects" --> C
        C <--> D
        C <--> E
    end

    subgraph "Blender"
        G[Blender UI]
        H[MCP Addon Server]
        I[3D Scene]

        H -- "Executes Python Script" --> I
    end

    F[MCP Client]

    B -- "Launches" --> F
    F -- "Communicates via MCP" --> H

    style A fill:#cde4ff
    style G fill:#ffb870
