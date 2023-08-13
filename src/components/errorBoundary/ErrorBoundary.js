import { Component } from "react";

import ErrorMessage from "../errorMessage/ErrorMessage";
// -----------------
// предохранители ловят ошибки только:
// - render()
// - методах жизненного цикла
// - конструкторах дочерних компонентов
//
// не ловят:
// - ошибки внутри обработчиков событий
// - ассинхронный код
// - ошибки в самом предохранителе
// - серверный рендеринг
//
// static getDerivedStateFromError(error) - обновляет только состояние
// никаких логов и тд - только изменение стейта
// -----------------

class ErrorBoundary extends Component {
    state = {
        error: false
    }

    // static getDerivedStateFromError(error) {
    //     return { error: true }
    // }

    componentDidCatch(error, errorInfo) {
        this.setState({
            error: true
        })
    }

    render() {
        if (this.state.error) {
            return <ErrorMessage />
        }

        return this.props.children;
    };
}

export default ErrorBoundary;