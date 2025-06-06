import { sendMessageToFrontend } from "..";
import { WebsocketMessageTypes } from "../enums/WebsocketMessageTypes";
import { StepLog } from "../types/StepLog";
import { InstallLog } from "../types/InstallLog";
import { Steps } from "../enums/Steps";

export async function globalError(message: string, error: Error): Promise<void> {
    const log: InstallLog = {
        message: message,
        error: error.message,
        isError: true,
    };
    await sendMessageToFrontend({
        type: WebsocketMessageTypes.INSTALL_LOG,
        data: log,
    });
}

export async function stepError(step: Steps, message: string, error: Error): Promise<void> {
    const log: StepLog = {
        step: step,
        message: message,
        error: error.message,
        isError: true,
    };
    await sendMessageToFrontend({
        type: WebsocketMessageTypes.STEP_LOG,
        data: log,
    });
}

export async function stepLog(step: Steps, message: string): Promise<void> {
    const log: StepLog = {
        step: step,
        message: message,
        isError: false,
    };
    await sendMessageToFrontend({
        type: WebsocketMessageTypes.STEP_LOG,
        data: log,
    });
}

export async function globalLog(message: string): Promise<void> {
    const log: InstallLog = {
        message: message,
        isError: false,
    };
    await sendMessageToFrontend({
        type: WebsocketMessageTypes.INSTALL_LOG,
        data: log,
    });
}

export async function installationError(message: string): Promise<void> {
    await sendMessageToFrontend({
        type: WebsocketMessageTypes.INSTALLATION_ERROR,
        data: message,
    });
}

export async function nextStep(step: Steps): Promise<void> {
    await sendMessageToFrontend({
        type: WebsocketMessageTypes.STEP_UPDATE,
        data: step,
    });
}

export async function installComplete(): Promise<void> {
    await sendMessageToFrontend({
        type: WebsocketMessageTypes.INSTALLATION_COMPLETE,
        data: null,
    });
}

export async function installError(message: string): Promise<void> {
    await sendMessageToFrontend({
        type: WebsocketMessageTypes.INSTALLATION_ERROR,
        data: message,
    });
}

