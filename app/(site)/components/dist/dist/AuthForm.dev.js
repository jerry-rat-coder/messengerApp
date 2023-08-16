'use client';
"use strict";

var __assign = void 0 && (void 0).__assign || function () {
  __assign = Object.assign || function (t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
      }
    }

    return t;
  };

  return __assign.apply(this, arguments);
};

exports.__esModule = true;

var react_1 = require("react");

var react_hook_form_1 = require("react-hook-form");

var Intput_1 = require("@/app/components/Inputs/Intput");

var Button_1 = require("@/app/components/Button");

var AuthSocialButton_1 = require("./AuthSocialButton");

var bs_1 = require("react-icons/bs");

var axios_1 = require("axios");

var react_2 = require("next-auth/react");

var react_hot_toast_1 = require("react-hot-toast");

var navigation_1 = require("next/navigation");

var AuthForm = function AuthForm() {
  var session = react_2.useSession();

  var _a = react_1.useState('LOGIN'),
      variant = _a[0],
      setVariant = _a[1];

  var _b = react_1.useState(false),
      isLoading = _b[0],
      setIsLoading = _b[1];

  var router = navigation_1.useRouter();
  react_1.useEffect(function () {
    if ((session === null || session === void 0 ? void 0 : session.status) === 'authenticated') {
      // console.log('Authenticated');
      router.push('/users');
    }
  }, [session === null || session === void 0 ? void 0 : session.status]);
  var toggleVariant = react_1.useCallback(function () {
    if (variant === 'LOGIN') {
      setVariant('REGISTER');
    } else {
      setVariant('LOGIN');
    }
  }, [variant]);

  var _c = react_hook_form_1.useForm({
    defaultValues: {
      name: '',
      email: '',
      password: ''
    }
  }),
      register = _c.register,
      handleSubmit = _c.handleSubmit,
      errors = _c.formState.errors;

  var onSubmit = function onSubmit(data) {
    setIsLoading(true);

    if (variant === 'LOGIN') {
      //NEXTAUTH LOGIN    
      react_2.signIn('credentials', __assign(__assign({}, data), {
        redirect: false
      })).then(function (callback) {
        if (callback === null || callback === void 0 ? void 0 : callback.error) {
          react_hot_toast_1.toast.error('Invalid credentials!');
        } else if (callback === null || callback === void 0 ? void 0 : callback.ok) {
          react_hot_toast_1.toast.success('Logged In!');
        }
      })["finally"](function () {
        setIsLoading(false);
      });
    } else {
      //NEXTAUTH RIGISTER
      axios_1["default"].post('/api/register', data);
    }
  };

  var socialAction = function socialAction(action) {
    setIsLoading(true);
    react_2.signIn(action, {
      redirect: false
    }).then(function (callback) {
      if (callback === null || callback === void 0 ? void 0 : callback.error) {
        react_hot_toast_1.toast.error('Invalid credentials!');
      } else if (callback === null || callback === void 0 ? void 0 : callback.ok) {
        react_hot_toast_1.toast.success('Logged In!');
      }
    })["finally"](function () {
      setIsLoading(false);
    });
  };

  return React.createElement("div", {
    className: 'mt-8 sm:max-w-md sm:mx-auto sm:w-full'
  }, React.createElement("div", {
    className: "\r\n            bg-white\r\n            px-4\r\n            py-8\r\n            shadow\r\n            sm:rounded-lg\r\n            sm:px-10\r\n            "
  }, React.createElement("form", {
    className: ' space-y-6',
    onSubmit: handleSubmit(onSubmit)
  }, variant === 'REGISTER' && React.createElement(Intput_1["default"], {
    label: "Name",
    id: "name",
    required: true,
    errors: errors,
    disabled: isLoading,
    register: register
  }), React.createElement(Intput_1["default"], {
    label: "Email",
    id: "email",
    required: true,
    errors: errors,
    disabled: isLoading,
    register: register
  }), React.createElement(Intput_1["default"], {
    label: "Password",
    id: "password",
    type: "password",
    required: true,
    errors: errors,
    disabled: isLoading,
    register: register
  }), React.createElement("div", null, React.createElement(Button_1["default"], {
    disabled: isLoading,
    fullWidth: true,
    type: "submit"
  }, variant === 'LOGIN' ? 'Sign in' : 'Register'))), React.createElement("div", {
    className: 'mt-6'
  }, React.createElement("div", {
    className: ' relative'
  }, React.createElement("div", {
    className: 'absolute inset-0 flex items-center'
  }, React.createElement("div", {
    className: 'w-full border-t border-gray-300'
  })), React.createElement("div", {
    className: 'relative flex justify-center text-sm'
  }, React.createElement("span", {
    className: 'bg-white px-2 text-gray-500'
  }, "Or continue with"))), React.createElement("div", {
    className: 'mt-6 flex gap-2'
  }, React.createElement(AuthSocialButton_1["default"], {
    icon: bs_1.BsGithub,
    onClick: function onClick() {
      return socialAction('github');
    }
  }), React.createElement(AuthSocialButton_1["default"], {
    icon: bs_1.BsGoogle,
    onClick: function onClick() {
      return socialAction('google');
    }
  }))), React.createElement("div", {
    className: '\r\n                flex \r\n                justify-center \r\n                gap-2 \r\n                text-sm \r\n                mt-6 \r\n                px-2 \r\n                text-gray-500'
  }, React.createElement("div", null, variant === 'LOGIN' ? 'New to Messenger?' : 'Already have an account?'), React.createElement("div", {
    className: 'underline cursor-pointer',
    onClick: toggleVariant
  }, variant === 'LOGIN' ? 'Create an account' : 'Login'))));
};

exports["default"] = AuthForm;