import React from "react";
import VueIcon from "../../assets/icon/vue.svg";
import ReactIcon from "../../assets/icon/react.svg";
import AngularIcon from "../../assets/icon/angular.svg";
import DockerIcon from "../../assets/icon/docker.svg";
import GitIcon from "../../assets/icon/git.svg";
import GithubIcon from "../../assets/icon/github.svg";
import HtmlIcon from "../../assets/icon/html.svg";
import CssIcon from "../../assets/icon/css.svg";
import JsIcon from "../../assets/icon/js.svg";
import LaravelIcon from "../../assets/icon/laravel.svg";
import MysqlIcon from "../../assets/icon/mysql.svg";
import NodeIcon from "../../assets/icon/node.svg";
import NuxtIcon from "../../assets/icon/nuxt.svg";
import PhpIcon from "../../assets/icon/php.svg";
import ReduxIcon from "../../assets/icon/redux.svg";
import SassIcon from "../../assets/icon/sass.svg";
import PiniaIcon from "../../assets/icon/pinia.svg";
import Figma from "../../assets/icon/figma.svg";

interface GeneratorSVGProps {
  name: string;
}
function GeneratorSVG({ name }: GeneratorSVGProps) {
  switch (name) {
    case "vue":
      return VueIcon;
    case "react":
      return ReactIcon;
    case "angular":
      return AngularIcon;
    case "docker":
      return DockerIcon;
    case "git":
      return GitIcon;
    case "github":
      return GithubIcon;
    case "html":
      return HtmlIcon;
    case "css":
      return CssIcon;
    case "js":
      return JsIcon;
    case "laravel":
      return LaravelIcon;
    case "mysql":
      return MysqlIcon;
    case "node":
      return NodeIcon;
    case "nuxt":
      return NuxtIcon;
    case "php":
      return PhpIcon;
    case "redux":
      return ReduxIcon;
    case "sass":
      return SassIcon;
    case "pinia":
      return PiniaIcon;
    case "figma":
      return Figma;
    default:
      return <svg></svg>;
  }
}

export default GeneratorSVG;
