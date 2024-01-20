#include <iostream>
#include <winsock2.h>

const int PORT = 8080;

int main() {
    // Initialize Winsock
    WSADATA wsaData;
    if (WSAStartup(MAKEWORD(2, 2), &wsaData) != 0) {
        std::cerr << "Failed to initialize Winsock\n";
        return -1;
    }

    // Create a socket
    SOCKET serverSocket = socket(AF_INET, SOCK_STREAM, 0);
    if (serverSocket == INVALID_SOCKET) {
        std::cerr << "Error creating socket\n";
        WSACleanup();
        return -1;
    }

    // Bind the socket to an address and port
    sockaddr_in serverAddr{};
    serverAddr.sin_family = AF_INET;
    serverAddr.sin_addr.s_addr = INADDR_ANY;
    serverAddr.sin_port = htons(PORT);

    if (bind(serverSocket, (struct sockaddr*)&serverAddr, sizeof(serverAddr)) == SOCKET_ERROR) {
        std::cerr << "Error binding socket\n";
        closesocket(serverSocket);
        WSACleanup();
        return -1;
    }

    // Listen for incoming connections
    if (listen(serverSocket, 10) == SOCKET_ERROR) {
        std::cerr << "Error listening on socket\n";
        closesocket(serverSocket);
        WSACleanup();
        return -1;
    }

    std::cout << "Server listening on port " << PORT << " by saurabh dwivedi...\n";

    // Accept a connection
    sockaddr_in clientAddr{};
    int clientAddrLen = sizeof(clientAddr);
    SOCKET clientSocket = accept(serverSocket, (struct sockaddr*)&clientAddr, &clientAddrLen);
    if (clientSocket == INVALID_SOCKET) {
        std::cerr << "Error accepting connection\n";
        closesocket(serverSocket);
        WSACleanup();
        return -1;
    }

    // Receive and respond to HTTP requests
    const char* response = "HTTP/1.1 200 OK\r\nContent-Type: text/plain\r\nContent-Length: 12\r\n\r\nHello, World!";
    send(clientSocket, response, strlen(response), 0);

    // Close sockets
    closesocket(clientSocket);
    closesocket(serverSocket);
    WSACleanup();


    return 0;
}


// g++ -o httpServer httpServer.cpp -lws2_32 ./httpServer
// Paste above code in terminal
