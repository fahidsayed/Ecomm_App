package com.ecomm.mango.exception;

public class MangoApplicationException extends RuntimeException {
	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;

	public MangoApplicationException() {
	}

	public MangoApplicationException(final Throwable cause) {
		super(cause);
	}

	public MangoApplicationException(final String message) {
		super(message);
	}

	public MangoApplicationException(final String message, final Throwable cause) {
		super(message, cause);
	}
}
